# 乖孫管家 v5 部署與測試清單

## 目前檔案

- `index.html`：部署首頁，會自動進入正式 App
- `app.html`：v5 多情境正式版入口
- `styles.css`：畫面樣式
- `storage.js`：資料讀寫包裝層
- `app.js`：主要功能邏輯
- `grandma-helper-v5-singlefile-backup.html`：拆分前的單檔備份
- `grandma-helper-v5.html`：v5 單檔版本，保留備查
- `manifest.json`：PWA 安裝設定
- `sw.js`：Service Worker 離線快取
- `README.md`：專案說明
- `.gitignore`：Git 版本控管忽略清單
- `icons/`：PWA 圖示
- `v5-multi-profile-plan.md`：多情境產品規劃

## 本機測試

直接開 HTML 可測大部分功能：

- 情境切換
- 阿嬤使用 / 家人管理
- 生活任務卡
- 健康紀錄
- 心情紀錄
- 藥物設定
- 家人週報
- 資料備份

注意：

- `file://` 模式下 Service Worker 不會啟動。
- `file://` 模式下麥克風、通知、PWA 安裝不一定可用。

## HTTPS 測試建議

PWA、通知、手機麥克風請用 HTTPS 測。

建議流程：

1. 建立 GitHub repository
2. 放入目前資料夾檔案
3. 連接 Vercel
4. Vercel 自動部署
5. 用手機打開 Vercel HTTPS 網址
6. 測試加入主畫面、麥克風、通知授權

## Vercel 設定

目前是純靜態頁面，不需要 build command。

建議設定：

- Framework Preset: Other
- Build Command: 留空
- Output Directory: 留空或 `.`
- Install Command: 留空

入口網址：

- `/`
- `/app.html`
- `/grandma-helper-v5.html`（備查）

建議正式分享時使用 `/`。

## PWA 測試清單

在 HTTPS 環境測：

- 瀏覽器是否讀到 `manifest.json`
- 是否可加入手機主畫面
- 離線後是否仍能開啟頁面
- Service Worker 是否已註冊
- PWA 圖示是否正確顯示
- 手機麥克風是否會跳權限
- 通知 API 是否可要求權限

## 功能測試清單

### 情境切換

- 切到長者照護，按鈕應顯示量測、吃藥、影片、不舒服
- 切到學生，按鈕應顯示作業、考試、完成、壓力
- 切到老師，按鈕應顯示班務、批改、聯絡、會議
- 切到家庭，按鈕應顯示採買、家務、繳費、接送
- 切到小商家，按鈕應顯示訂單、出貨、收款、庫存

### 健康

- 輸入 `血壓 128/75 血糖 110`
- 應建立健康紀錄
- 高於警戒值應建立健康警示

### 生活任務

- 輸入 `今天去菜市場買菜`
- 輸入 `還要買豆腐`
- 應整合在同一張任務卡

### 藥物

- 家人管理新增藥物
- 阿嬤端按 `我吃這個藥了`
- 剩餘數量應減少

### 關鍵字

- 家人管理新增關鍵字 `頭暈`
- 輸入包含頭暈的句子
- 應觸發指定回覆

## 後續升級

下一階段建議：

- 新增 icons
- 加入 Notification API 權限流程
- Vercel API Routes 作為 LINE/webhook 通知中繼
