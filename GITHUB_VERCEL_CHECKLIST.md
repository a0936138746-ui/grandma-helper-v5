# GitHub + Vercel 上線清單

## 1. 建立 GitHub repository

建議 repo 名稱：

```text
grandma-helper-v5
```

或如果要做多情境平台：

```text
ai-life-manager
```

## 2. 第一次上傳

在此資料夾執行：

```bash
git init
git add .
git commit -m "Initial v5 PWA prototype"
git branch -M main
git remote add origin <你的 GitHub repo URL>
git push -u origin main
```

## 3. Vercel 部署

1. 登入 Vercel
2. New Project
3. 選 GitHub repo
4. Framework Preset 選 Other
5. Build Command 留空
6. Output Directory 留空
7. Deploy

## 4. 部署後測試

開啟 Vercel HTTPS 網址，測：

- 首頁 `/` 是否進入 App
- `app.html` 是否可直接開
- 情境切換是否可用
- 家人管理是否可展開
- PWA 是否可加入主畫面
- 離線後是否仍可開頁面
- 手機麥克風是否會跳授權
- 資料是否能保存

## 5. 手機測試重點

Android Chrome：

- 加入主畫面
- 測語音
- 測離線
- 測通知權限

iPhone Safari：

- 分享 -> 加入主畫面
- 測 PWA 開啟
- 測語音支援狀況
- 測資料保存

## 6. 下一階段

部署成功後再做：

- Vercel API Routes
- LINE/webhook 真實通知
- IndexedDB
- 家人登入
- 多裝置同步
