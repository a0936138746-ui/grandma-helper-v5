const crypto = require("crypto");

const LINE_API_BASE = "https://api.line.me/v2/bot";

function json(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.end(JSON.stringify(payload));
}

function readRawBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", chunk => chunks.push(Buffer.from(chunk)));
    req.on("end", () => resolve(Buffer.concat(chunks)));
    req.on("error", reject);
  });
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function verifyLineSignature(rawBody, signature, channelSecret) {
  if (!signature || !channelSecret) return false;
  const expected = crypto.createHmac("sha256", channelSecret).update(rawBody).digest("base64");
  return safeEqual(signature, expected);
}

async function callLineApi(path, body, channelAccessToken) {
  const response = await fetch(LINE_API_BASE + path, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + channelAccessToken,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`LINE API ${response.status}: ${detail.slice(0, 300)}`);
  }
  return response.status === 204 ? null : response.json();
}

function textMessage(text) {
  return { type: "text", text: String(text || "").slice(0, 5000) };
}

function replyText(replyToken, text, channelAccessToken) {
  return callLineApi("/message/reply", {
    replyToken,
    messages: [textMessage(text)]
  }, channelAccessToken);
}

function pushText(to, text, channelAccessToken) {
  return callLineApi("/message/push", {
    to,
    messages: [textMessage(text)]
  }, channelAccessToken);
}

module.exports = {
  json,
  pushText,
  readRawBody,
  replyText,
  safeEqual,
  verifyLineSignature
};
