# 乖孫管家 v5

多情境智能管家原型，從「長者照護」出發，延伸到學生、老師、家庭與小商家情境。

## 目前狀態

這是可部署的前端 PWA 原型。

主要入口：

- `index.html`：首頁導向
- `app.html`：正式 App 畫面
- `app.js`：主要互動邏輯
- `storage.js`：資料讀寫包裝層
- `styles.css`：畫面樣式
- `manifest.json`：PWA 設定
- `sw.js`：離線快取 Service Worker

## 核心功能

- 多情境切換：長者、學生、老師、家庭、小商家
- 長者照護：血壓血糖、吃藥、看診摘要、家人通知
- 生活任務卡：同一件事可持續追加項目
- 主動關懷：依時間與待辦狀態產生提示
- 關鍵字規則：家人可設定觸發詞與回覆
- 藥物管理：藥名、服藥時間、剩餘數量
- 心情記錄：近 7 次心情趨勢
- 習慣雷達：常見任務統計
- 家人週報：可複製給家人
- 資料備份：匯出與匯入本地資料
- 內建瀏覽器提醒：偵測 LINE/FB/IG 等內建瀏覽器，提示改用 Chrome/Safari

## 本機使用

直接開啟：

```text
index.html
```

或：

```text
app.html
```

注意：

- `file://` 模式下可測多數功能。
- PWA、Service Worker、手機麥克風、通知權限需要 HTTPS 或 localhost。

## 部署建議

建議使用：

- GitHub：版本管理
- Vercel：HTTPS 部署與未來 API/webhook

Vercel 可用靜態部署，不需要 build command。

更多細節請看：

```text
DEPLOYMENT.md
```

## 後續方向

- 拆分資料層與設定層
- 接 Vercel API Routes
- 接 LINE / SMS / Web Push 通知
- 增加登入與家人管理後台
- 使用 IndexedDB 取代部分 localStorage
- 建立正式資料庫與多使用者架構
