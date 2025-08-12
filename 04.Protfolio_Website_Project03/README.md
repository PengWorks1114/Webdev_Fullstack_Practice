
# 🌐 個人作品集網站（Portfolio Website）

本專案是一個以 HTML + SCSS/CSS 製作的個人作品集網站，展示開發者的履歷、技能與自我介紹，並強調響應式設計（RWD）與良好的使用者體驗。  
網站結合 **Flexbox**、**Media Query** 與簡單的 JavaScript 動態效果，讓版面在桌面與行動裝置上皆能流暢呈現。

---

## 🔧 使用技術與重點說明

### ✅ Flexbox 排版
- 全站主要排版結構皆使用 `flex` 與 `flex-wrap`：
  - 導覽列（Navigation Bar）
  - 主視覺區（Hero Section）
  - 自我介紹（About Me Section）
  - 履歷展示（Resume Section）
- 透過 `justify-content` 與 `align-items` 對齊，確保各裝置上內容能置中或等間距分布。
- 裝飾用藍色矩形（`blueRect` 系列）亦透過 `flex` 排列，並在小螢幕時自動隱藏以保持簡潔。

---

### ✅ RWD 響應式設計（Media Query）
- 採用 `@media screen` 針對不同螢幕寬度調整：
  - **≤ 800px**
    - 自我介紹區由 50% 寬改為 80%。
    - 履歷區允許橫向捲動（`overflow-x: auto;`）。
    - 裝飾用 `blueRect` 系列元素隱藏。
  - **≤ 500px**
    - 導覽列改為直向排列（column layout）。
    - 取消 `position: sticky` 改為靜態，以避免手機端佔據畫面空間。

---

### ✅ 導覽列互動效果
- CSS 設定 `nav ul li a:hover` 文字顏色變為藍色，提供互動提示。
- JavaScript 偵測滾動事件：
  - 頁面滾動時為導覽列添加陰影效果（`box-shadow`）。
  - 停留在頁面頂端時移除陰影。

```javascript
let nav = document.querySelector("nav");
window.addEventListener("scroll", () => {
  if (window.scrollY == 0) {
    nav.style.boxShadow = "";
  } else {
    nav.style.boxShadow = "0 10px 6px -6px #777";
  }
});
````

---

### ✅ CSS 動態與視覺效果

* 按鈕 hover 時放大與顏色變化。
* 表格列 hover 時背景高亮。
* 圓形圖片展示（`border-radius: 50%`），滑鼠懸停時增加紫色透明邊框。

---

## 📁 專案結構

```
/images              → 圖片資源
/styles
  ├─ style.scss      → SCSS 原始樣式檔
  ├─ style.css       → 編譯後 CSS
  └─ style.css.map   → SCSS 與 CSS 映射檔
bubble.css           → 額外特效樣式（泡泡動畫）
app.js               → 滾動偵測與導覽列陰影效果
index.html           → 首頁主檔案
```

---

## 📌 頁面一覽

| 檔案名稱            | 功能說明                 |
| --------------- | -------------------- |
| `index.html`    | 首頁（導覽列、主視覺、自我介紹、履歷區） |
| `app.js`        | 滾動事件監聽與導覽列陰影效果       |
| `style.scss`    | 全站 SCSS 樣式定義         |
| `bubble.css`    | 泡泡背景特效樣式             |
| `style.css`     | 編譯後 CSS              |
| `style.css.map` | CSS SourceMap        |

---

## 📱 響應式設計策略

1. **能用 Flexbox 處理就用 Flexbox**：保持彈性排版、減少過多 Media Query。
2. **必要時才用 Media Query**：針對特定螢幕寬度調整細節，例如隱藏裝飾元素、改變排版方向。
3. **圖片與元素自適應**：避免固定 `width: 300px`，改以 `max-width: 100%` 或 `flex` 來讓元素隨螢幕大小縮放。

---

## 🛠 開發工具建議

* **VSCode Snippet**：透過 User Snippet 設定常用 HTML/CSS 模板，提高開發效率。
* **Live Server**：即時預覽網頁變化。
* **Live Sass Compiler**：自動將 SCSS 編譯為 CSS。
* **FreeImage & Icon 資源**：

  * Unsplash / Pexels（免費圖片）
  * Font Awesome / Icons8（免費＋付費圖示）
* **Local Font 設定**：

  * 將字體檔放在專案根目錄並於 CSS `@font-face` 引用。

---

## 📚 待辦與擴充方向

* [ ] 完成作品集與聯絡我頁面設計。
* [ ] 加入 Light/Dark Mode。
* [ ] 串接後端 API（如 Node.js / Flask）取得作品與履歷資料。
* [ ] 加入動畫與滾動視差效果（Parallax）。
* [ ] 優化行動裝置的觸控體驗。

---

## 📸 預覽畫面

* 首頁示意圖
* 行動裝置版面預覽
* 導覽列滾動陰影效果截圖

---


