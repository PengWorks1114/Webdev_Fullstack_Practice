
# 圍棋資訊網專案說明

本專案為一個靜態網站，介紹東亞四地（中國、日本、韓國、台灣）的圍棋組織與歷史背景，並結合現代前端技術進行展示。專案頁面包含豐富的文字資料、表格、圖片與互動圖表，適合初學者練習 HTML、CSS 與基本 JS 套件應用。

## 🔧 使用技術與重點說明

### ✅ Flexbox 排版
- `style.css` 中大量使用 `flex` 與 `flex-wrap` 進行主內容的左右區塊排版（見 index.html 的 `<main>`）。
- 各棋院介紹也依據內容設計成彈性排版區塊，例如：
  - `div.japan`
  - `div.competition`
  - `main.no-flex`（特殊頁面如 korea.html）

### ✅ 導覽列滑鼠懸停變色效果
- CSS 設定 `nav ul li a:hover` 為黃色，提供互動提示。
- 透過 `.active` 類別標示目前所在頁面。

```css
nav ul li a:hover {
  color: yellow;
}
.active {
  color: yellow;
}
````

### ✅ Google Charts 圓餅圖（內嵌於 HTML）

* 日本棋院（`japan.html`）中嵌入了 Google Charts 的 Pie Chart。
* 圖表以日本七大頭銜棋戰的獎金金額為例。

引用與設定方式：

```html
<script src="https://www.gstatic.com/charts/loader.js"></script>
<script>
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([...]);
    var chart = new google.visualization.PieChart(document.getElementById("piechart"));
    chart.draw(data, options);
  }
</script>
```

### ✅ CSS 中配合 Google PieChart 設定樣式

* 透過 `#piechart` 加入 flex 設定與版面配置，使圖表可與文字同時並列顯示。

```css
#piechart {
  flex: 1 1 300px;
}
```

### ✅ canvas-nest.js 背景特效（星點流動）

* 所有 HTML 頁面皆透過 CDN 引入 canvas-nest.js，打造動態背景。
* 使用 `cdnjs.cloudflare.com` 提供的 CDN，無需本地安裝。

範例如下：

```html
<script
  type="text/javascript"
  color="0,0,0"
  opacity="0.3"
  zIndex="-2"
  count="99"
  src="https://cdnjs.cloudflare.com/ajax/libs/canvas-nest.js/2.0.4/canvas-nest.js"
  crossorigin="anonymous"
></script>
```

### ✅ cdnjs 使用方法

* 所有外部 JavaScript 特效（如 canvas-nest）皆透過 [cdnjs](https://cdnjs.com/) 引入，簡潔安全。
* 優點：不需本地下載，快速部署特效。

---

## 📁 頁面一覽

| 檔案名稱          | 功能說明        |
| ------------- | ----------- |
| `index.html`  | 首頁與圍棋總覽     |
| `china.html`  | 中國棋院介紹      |
| `japan.html`  | 日本棋院介紹（含圖表） |
| `korea.html`  | 韓國棋院介紹      |
| `taiwan.html` | 海峰棋院介紹      |
| `style.css`   | 所有頁面共用樣式表   |

---

## 📸 預覽畫面

首頁示意圖、Google PieChart 圓餅圖畫面、canvas-nest 背景等建議截圖備用。

---

## 📚 備註

* 本專案無 JavaScript 框架，純使用 HTML + CSS + CDN JS，適合作為新手靜態網站切版與動畫練習專案。
* 建議日後加入 RWD（Media Queries）以提升手機端瀏覽體驗。

---

## 🗂 日後可擴充方向

* 加入 Light/Dark Mode
* 使用 JSON 動態產生棋士資料
* 圖表資料改為後端提供（如 Flask + API）
* 加入搜尋棋士功能

