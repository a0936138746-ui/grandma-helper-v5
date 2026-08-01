const crypto = require("crypto");

function send(res, status, payload) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Cache-Control", "no-store, max-age=0");
  res.end(JSON.stringify(payload));
}

function safeEqual(left, right) {
  const a = Buffer.from(String(left || ""));
  const b = Buffer.from(String(right || ""));
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

function taipeiDate() {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Asia/Taipei",
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(new Date());
}

function addDays(dateText, days) {
  if (!dateText) return "";
  const date = new Date(dateText + "T00:00:00+08:00");
  if (Number.isNaN(date.getTime())) return "";
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function processDate(order) {
  return order.delivery === "宅配"
    ? String(order.arrival_date || "")
    : String(order.pickup_date || order.arrival_date || "");
}

function shipDate(order) {
  if (order.delivery === "宅配" && order.arrival_date) return addDays(order.arrival_date, -3);
  return String(order.ship_date || "");
}

function isClosed(order) {
  return ["已取消", "已取貨", "已宅配"].includes(order.status);
}

function daysBetween(dateText, today) {
  if (!dateText) return null;
  const target = Date.parse(dateText + "T00:00:00+08:00");
  const base = Date.parse(today + "T00:00:00+08:00");
  if (!Number.isFinite(target) || !Number.isFinite(base)) return null;
  return Math.round((target - base) / 86400000);
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return send(res, 405, { ok: false, error: "method_not_allowed" });
  }

  const supabaseUrl = process.env.ORDER_SUPABASE_URL;
  const supabaseKey = process.env.ORDER_SUPABASE_ANON_KEY;
  const integrationToken = process.env.BUTLER_ORDER_TOKEN;
  if (!supabaseUrl || !supabaseKey || !integrationToken) {
    return send(res, 503, { ok: false, error: "integration_not_configured" });
  }

  const authorization = String(req.headers.authorization || "");
  const suppliedToken = authorization.startsWith("Bearer ") ? authorization.slice(7) : "";
  if (!safeEqual(suppliedToken, integrationToken)) {
    return send(res, 401, { ok: false, error: "unauthorized" });
  }

  const fields = [
    "id", "time", "name", "total", "delivery", "pickup_date", "arrival_date",
    "ship_date", "status", "payment_status", "paid_amount"
  ].join(",");
  const normalizedUrl = supabaseUrl.endsWith("/") ? supabaseUrl.slice(0, -1) : supabaseUrl;
  const endpoint = normalizedUrl +
    "/rest/v1/orders?select=" + encodeURIComponent(fields) +
    "&order=time.desc&limit=300";

  try {
    const response = await fetch(endpoint, {
      headers: {
        apikey: supabaseKey,
        Authorization: "Bearer " + supabaseKey,
        Accept: "application/json"
      }
    });
    if (!response.ok) {
      const detail = await response.text();
      console.error("Order summary query failed", response.status, detail.slice(0, 300));
      return send(res, 502, { ok: false, error: "order_query_failed" });
    }

    const orders = await response.json();
    const today = taipeiDate();
    const active = orders.filter(order => !isClosed(order));
    const enriched = active.map(order => {
      const dueDate = processDate(order);
      const shippingDate = shipDate(order);
      const dueInDays = daysBetween(order.delivery === "宅配" ? shippingDate : dueDate, today);
      const total = Number(order.total || 0);
      const paid = Number(order.paid_amount || 0);
      return {
        id: String(order.id || ""),
        name: String(order.name || "未填姓名").slice(0, 30),
        total,
        unpaid: Math.max(total - paid, 0),
        delivery: String(order.delivery || ""),
        processDate: dueDate,
        shipDate: shippingDate,
        status: String(order.status || "未完成"),
        paymentStatus: String(order.payment_status || "未收款"),
        dueInDays
      };
    });

    const priority = enriched
      .filter(order => order.dueInDays !== null)
      .sort((a, b) => a.dueInDays - b.dueInDays)
      .slice(0, 8);

    return send(res, 200, {
      ok: true,
      generatedAt: new Date().toISOString(),
      today,
      stats: {
        activeCount: active.length,
        todayCount: enriched.filter(order => order.dueInDays === 0).length,
        overdueCount: enriched.filter(order => order.dueInDays < 0).length,
        shippingCount: active.filter(order => order.delivery === "宅配").length,
        unpaidCount: enriched.filter(order => order.unpaid > 0).length,
        unpaidAmount: enriched.reduce((sum, order) => sum + order.unpaid, 0)
      },
      priority
    });
  } catch (error) {
    console.error("Order summary integration error", error);
    return send(res, 502, { ok: false, error: "integration_unavailable" });
  }
};