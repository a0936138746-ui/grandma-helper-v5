const {
  json,
  pushText,
  readRawBody,
  replyText,
  verifyLineSignature
} = require("./_line");

const APP_URL = process.env.LINE_APP_URL || "https://grandma-helper-v5.vercel.app/app";

function isEmergency(text) {
  return /(救命|跌倒|胸痛|喘不過氣|呼吸困難|昏倒|叫救護車)/i.test(text);
}

function ruleBasedReply(text) {
  const value = String(text || "").trim();
  if (!value) return "我在。你可以直接說要記錄或提醒的事情。";

  if (/(怎麼用|說明|幫助|help)/i.test(value)) {
    return [
      "我是你的智能管家。",
      "你可以直接傳文字，例如：",
      "1. 明天早上提醒我拿藥",
      "2. 血壓 135/82",
      "3. 我要找家人",
      "目前是免費規則測試版，語音 AI 尚未啟用。"
    ].join("\n");
  }

  if (/(開啟管家|管理頁|網頁|設定)/i.test(value)) {
    return `這裡可以開啟完整管家：\n${APP_URL}`;
  }

  const bloodPressure = value.match(/(?:血壓\s*)?(\d{2,3})\s*[\/／]\s*(\d{2,3})/);
  if (bloodPressure) {
    return `我聽到的血壓是 ${bloodPressure[1]}/${bloodPressure[2]}。目前 LINE 測試版尚未寫入正式健康資料，確認資料庫後才會開啟自動記錄。`;
  }

  const bloodSugar = value.match(/血糖\s*(\d{2,3})/);
  if (bloodSugar) {
    return `我聽到的血糖是 ${bloodSugar[1]}。目前 LINE 測試版尚未寫入正式健康資料。`;
  }

  if (/(提醒|記得|不要忘記)/.test(value)) {
    return `我收到這件事：「${value.slice(0, 120)}」。目前正在測試 LINE 連線，尚未啟用背景排程，所以我先不假裝已經設好提醒。`;
  }

  if (/(找家人|找女兒|找兒子|找孫子|聯絡家人)/.test(value)) {
    return "我收到你想聯絡家人的訊息。目前是測試模式，正式通知名單設定完成後才會送出。";
  }

  return `我收到：「${value.slice(0, 150)}」。LINE 已經連線成功；下一階段會把這句交給同一個管家整理。`;
}

async function notifyConfiguredFamily(text, sourceUserId, channelAccessToken) {
  if (process.env.LINE_ALERTS_ENABLED !== "true") return;
  const recipients = String(process.env.LINE_FAMILY_USER_IDS || "")
    .split(",")
    .map(item => item.trim())
    .filter(Boolean)
    .slice(0, 5);
  if (!recipients.length) return;

  const sourceHint = sourceUserId ? sourceUserId.slice(-6) : "未知";
  const message = `重要通知：管家收到緊急訊息「${text.slice(0, 120)}」。來源末六碼 ${sourceHint}，請立即聯絡確認；必要時請撥 119。`;
  await Promise.allSettled(recipients.map(to => pushText(to, message, channelAccessToken)));
}

async function handleEvent(event, channelAccessToken) {
  if (!event || event.deliveryContext?.isRedelivery) return;
  if (!event.replyToken) return;

  if (event.type === "follow") {
    await replyText(event.replyToken,
      "你好，我是智能管家。直接傳文字給我就好。輸入「怎麼用」可以看範例；目前先使用不產生 AI 費用的測試模式。",
      channelAccessToken);
    return;
  }

  if (event.type !== "message") return;
  if (event.message?.type === "audio") {
    await replyText(event.replyToken,
      "我收到語音了。為避免未經同意產生 AI 轉錄費用，目前先不轉文字；下一階段啟用前我會先提醒你。",
      channelAccessToken);
    return;
  }

  if (event.message?.type !== "text") {
    await replyText(event.replyToken, "我收到了。目前測試版請先傳文字或語音。", channelAccessToken);
    return;
  }

  const text = String(event.message.text || "");
  if (isEmergency(text)) {
    await replyText(event.replyToken,
      "我收到重要狀況。請先坐下或躺下，不要勉強走動；若有胸痛、呼吸困難、昏倒或情況危急，請立即撥 119。家人通知只有在後台正式啟用後才會送出。",
      channelAccessToken);
    await notifyConfiguredFamily(text, event.source?.userId, channelAccessToken);
    return;
  }

  await replyText(event.replyToken, ruleBasedReply(text), channelAccessToken);
}

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    return json(res, 200, {
      ok: true,
      service: "line-webhook",
      configured: Boolean(process.env.LINE_CHANNEL_SECRET && process.env.LINE_CHANNEL_ACCESS_TOKEN),
      alertsEnabled: process.env.LINE_ALERTS_ENABLED === "true",
      aiEnabled: false
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return json(res, 405, { ok: false, error: "method_not_allowed" });
  }

  const channelSecret = process.env.LINE_CHANNEL_SECRET;
  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  if (!channelSecret || !channelAccessToken) {
    return json(res, 503, { ok: false, error: "line_not_configured" });
  }

  try {
    const rawBody = await readRawBody(req);
    const signature = req.headers["x-line-signature"];
    if (!verifyLineSignature(rawBody, signature, channelSecret)) {
      return json(res, 401, { ok: false, error: "invalid_signature" });
    }

    const payload = JSON.parse(rawBody.toString("utf8"));
    const results = await Promise.allSettled(
      (Array.isArray(payload.events) ? payload.events : []).map(event => handleEvent(event, channelAccessToken))
    );
    results.filter(result => result.status === "rejected")
      .forEach(result => console.error("LINE event failed", result.reason));
    return json(res, 200, { ok: true });
  } catch (error) {
    console.error("LINE webhook error", error);
    return json(res, 400, { ok: false, error: "invalid_webhook_payload" });
  }
};
