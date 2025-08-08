
# 🇯🇵 日本旅遊推薦網站（2025）

本專案為一個使用 HTML + SCSS 開發的日本旅遊推薦靜態網站，首頁已完成初步設計，未來將持續擴充會員系統、預約功能與後端邏輯。

> 🔧 狀態：目前僅完成首頁前端設計（2025-08 更新）

---

## 📸 頁面預覽

![首頁預覽](./images/富士山2.jpg)

---

## 📁 專案結構

```

/images          → 圖片資源
/icons           → 社群媒體圖示
/styles
├─ style.scss  → 原始 SCSS 檔（使用 SASS 撰寫）
├─ style.css   → 編譯後 CSS
└─ style.css.map → CSS SourceMap
index.html       → 首頁主檔案

```

---

## 🧱 使用技術與設計重點

### ✅ RWD 響應式設計（Media Query）
- 使用 `@media screen and (max-width: 700px)` 實作手機版版面調整。
- 搭配 `flexbox` 結構，讓圖片與區塊元素可彈性縮放。

### ✅ Flexbox 主架構
- Header、主內容（Main）、Footer 等皆以 `flex` 搭配 `flex-wrap` 處理。
- 介紹區塊（info-circles）與 Logo 區皆採彈性排列。

### ✅ 圓形圖片 hover 效果
- 使用 `border-radius: 50%` 製作圓圖。
- 滑鼠懸停時添加紫色透明邊框強化視覺互動。

### ✅ Google Maps 內嵌
- 使用 iframe 嵌入日本全圖，增加地理資訊輔助理解。

### ✅ Font Awesome 圖標整合
- 使用 CDN 匯入，結合導覽列與功能圖示。

---

## 🛠 開發與建議工具

- 建議使用 [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) 即時預覽
- SCSS 編譯工具如 VSCode 擴充套件：`Live Sass Compiler`
- 圖示來源：[Font Awesome CDN](https://cdnjs.com/)

---

## 📌 待辦清單（Roadmap）

- [ ] 建立登入／註冊頁面
- [ ] 製作「預約行程」表單
- [ ] 加入行程搜尋／篩選功能
- [ ] 後端串接（Flask or Node.js）
- [ ] 導入 RWD 手機排版優化（進一步 Media Query）

---

