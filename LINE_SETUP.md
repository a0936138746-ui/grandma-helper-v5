# LINE 智能管家串接設定

這一階段只啟用 LINE Messaging API 的文字規則測試，不使用付費 AI、語音轉文字或自動交易。

## 1. 建立 LINE 官方帳號

1. 到 LINE Official Account Manager 建立官方帳號。
2. 在 LINE Developers Console 建立 Provider。
3. 為官方帳號啟用 Messaging API。
4. 在 Messaging API 分頁取得 Channel secret。
5. 建立 Channel access token（建議使用可撤銷的長效 token）。

## 2. 設定 Vercel 環境變數

在 `grandma-helper-v5` 專案的 Settings > Environment Variables 新增：

| 名稱 | 用途 | 必填 |
| --- | --- | --- |
| `LINE_CHANNEL_SECRET` | 驗證 LINE Webhook 簽章 | 是 |
| `LINE_CHANNEL_ACCESS_TOKEN` | 回覆及推播 LINE 訊息 | 是 |
| `LINE_ADMIN_TOKEN` | 保護測試推播 API；自行產生長隨機字串 | 測試推播時 |
| `LINE_TEST_USER_ID` | 接收測試推播的 LINE userId | 測試推播時 |
| `LINE_APP_URL` | 管家網址，預設為正式 Vercel 網址 | 否 |
| `LINE_ALERTS_ENABLED` | 緊急通知開關，初期必須保持 `false` | 否 |
| `LINE_FAMILY_USER_IDS` | 家人 userId，多人使用逗號分隔 | 正式警示時 |

金鑰只能放在 Vercel Environment Variables，不可放入 GitHub、網頁程式或聊天訊息。

## 3. 設定 Webhook

1. 重新部署 Vercel。
2. 在瀏覽器開啟 `https://grandma-helper-v5.vercel.app/api/line-webhook`。
3. 確認回傳中的 `configured` 為 `true`。
4. 在 LINE Developers Console 將 Webhook URL 設為：

   `https://grandma-helper-v5.vercel.app/api/line-webhook`

5. 按 Verify，成功後開啟 Use webhook。
6. 建議開啟 Webhook redelivery。
7. 關閉 LINE Official Account Manager 內建的自動回覆，避免一次收到兩個回答。

## 4. 第一階段測試

加入官方帳號好友後依序傳送：

- `怎麼用`
- `開啟管家`
- `血壓 135/82`
- `明天早上提醒我拿藥`
- 一段 LINE 語音

提醒句只會確認 LINE 已收到，不會宣稱背景提醒已建立。資料庫與排程完成前，不可用它取代醫療或緊急聯絡安排。

## 5. 測試主動推播

以具備 `LINE_ADMIN_TOKEN` 的管理工具向下列 API 發出 POST：

`https://grandma-helper-v5.vercel.app/api/line-push`

Headers：

- `Authorization: Bearer <LINE_ADMIN_TOKEN>`
- `Content-Type: application/json`

Body：

```json
{
  "text": "智能管家 LINE 測試成功。"
}
```

此端點只會推送到環境變數 `LINE_TEST_USER_ID`，不能由請求指定其他收件人。

## 6. 尚未啟用

- 語音轉文字與 AI 回覆
- Supabase 使用者、任務及健康資料表
- Vercel Cron 背景排程
- 正式家人緊急通知
- LIFF 身分綁定與管理頁

以上功能可能涉及訊息額度、資料隱私或 API 費用，必須逐項測試並取得同意後才啟用。
