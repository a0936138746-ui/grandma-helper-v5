# 肉粽訂單唯讀連接設定

此功能只讀取訂單摘要，不修改訂單。

## Vercel 環境變數

在 grandma-helper-v5 的 Vercel Project Settings > Environment Variables 新增：

- ORDER_SUPABASE_URL：肉粽訂單系統的 Supabase Project URL
- ORDER_SUPABASE_ANON_KEY：肉粽訂單系統目前使用的 publishable/anon key
- BUTLER_ORDER_TOKEN：自行建立至少 20 個字元的連接密碼

三個變數建議套用 Production、Preview、Development，設定後重新部署。

## 管家端設定

1. 開啟部署後的智能管家。
2. 切到「家人管理」。
3. 找到「陳媽媽肉粽訂單連接」。
4. 輸入與 BUTLER_ORDER_TOKEN 完全相同的密碼。
5. 按「儲存連接密碼」。
6. 畫面出現今日、逾期與未收款統計即完成。

## 安全界線

- API 僅接受 GET。
- 回傳資料不包含電話、地址、備註與品項。
- Service Worker 不快取 /api/。
- Supabase 必須保留適當 RLS；不要把 service role key 放進前端。