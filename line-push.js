const { json, pushText, safeEqual } = require("./_line");

module.exports = async function handler(req, res) {
  if (req.method === "GET") {
    return json(res, 200, {
      ok: true,
      service: "line-push-test",
      configured: Boolean(
        process.env.LINE_CHANNEL_ACCESS_TOKEN &&
        process.env.LINE_ADMIN_TOKEN &&
        process.env.LINE_TEST_USER_ID
      )
    });
  }

  if (req.method !== "POST") {
    res.setHeader("Allow", "GET, POST");
    return json(res, 405, { ok: false, error: "method_not_allowed" });
  }

  const authorization = String(req.headers.authorization || "");
  const suppliedToken = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  if (!process.env.LINE_ADMIN_TOKEN || !safeEqual(suppliedToken, process.env.LINE_ADMIN_TOKEN)) {
    return json(res, 401, { ok: false, error: "unauthorized" });
  }

  const channelAccessToken = process.env.LINE_CHANNEL_ACCESS_TOKEN;
  const testUserId = process.env.LINE_TEST_USER_ID;
  if (!channelAccessToken || !testUserId) {
    return json(res, 503, { ok: false, error: "line_push_not_configured" });
  }

  const text = typeof req.body?.text === "string"
    ? req.body.text.trim().slice(0, 500)
    : "智能管家 LINE 測試成功。";
  if (!text) return json(res, 400, { ok: false, error: "empty_message" });

  try {
    await pushText(testUserId, text, channelAccessToken);
    return json(res, 200, { ok: true, delivered: true });
  } catch (error) {
    console.error("LINE push test failed", error);
    return json(res, 502, { ok: false, error: "line_push_failed" });
  }
};
