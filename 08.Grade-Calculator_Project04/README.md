# 成績計算網站（GPA Calculator）

以多筆課程輸入、GPA 即時計算、開場動畫與排序為核心的前端示例，使用 GSAP、Font Awesome 與 SCSS/CSS 進行樣式與動態效果。 &#x20;

---

## 功能總覽

- 多筆課程輸入表單（預設 3 筆），含科目類別、課號、學分、成績下拉選單與刪除按鈕；提供 `datalist` 科目代碼選項；右下角「＋」可動態新增一筆輸入列。
- GPA 即時計算（依學分加權），變更學分或成績時自動更新結果；依成績自動切換選單背景色。
- 兩種排序按鈕：依成績由高到低（降序）與由低到高（昇序），使用合併排序實作並重建表單內容與事件監聽。
- 開場過場動畫（Hero/Slider 淡出），表單新增／刪除具放大縮小過場；圓形 GPA 結果框循環邊框色動畫。&#x20;

---

## 目錄結構

```
.
├── index.html
├── app.js
├── styles/
│   ├── style.css
│   └── style.css.map
└── style.scss  (原始 SCSS)
```

&#x20; &#x20;

---

## 安裝與執行

- 以瀏覽器開啟 `index.html`，頁面已透過 CDN 載入 Font Awesome 與 GSAP。

---

## 介面與標記（HTML）

- 導覽列與主內容區塊，主標題「Grade Input Form」。
- 排序按鈕：`.sort-descending`、`.sort-ascending`。
- 多筆表單 `.all-inputs > form > .grader`，每列包含：

  1. 類別輸入 `.class-type`（掛 `list="opt"`）
  2. 課號輸入（首列為 `.class-number`，第二、三列為 `.class-nmber`）
  3. 學分輸入 `.class-credit`（0–6）
  4. 成績下拉 `.select`（A–F）
  5. 刪除按鈕 `.trash-button`（Font Awesome 垃圾桶圖示）

- `datalist#opt` 收錄常見科目縮寫供自動完成。
- 開場動畫容器：`.animation-wrapper`、`.animation .hero` 與 `.slider`，Hero 內含示意圖片。

---

## 行為與邏輯（JavaScript）

### 動畫與互動初始化

- 使用 GSAP `TimelineMax` 依序：`hero` 高度 0%→100%、寬度 80%→100%、`slider` 由左滑入、最後將 `.animation-wrapper` 淡出至透明並移除指標事件以釋放互動。
- 全域禁止 Enter 送出（`keypress` 攔截 `Enter`）、所有 `button` 統一 `click` `preventDefault()`，避免誤觸提交。

### 成績顏色規則

- A/A-：綠底黑字；B/B-/B+：黃底黑字；C/C-/C+：橘底黑字；D/D-/D+：紅底黑字；F：灰底白字；未選：白底。變更 `<select>` 觸發 `changeColor`。

### GPA 轉換與計算

- 成績 → 分數映射：A=4.0、A-=3.7、B+=3.4、B=3.0、B-=2.7、C+=2.4、C=2.0、C-=1.7、D+=1.4、D=1.0、D-=0.7、F=0.0。
- 計算流程：累計 `sum = Σ(學分×分數)`、`creditSum = Σ學分`；若 `creditSum==0` 則結果 0.00，否則 `(sum/creditSum).toFixed(2)` 更新 `#result-gpa`。
- 學分 `.class-credit` 與成績 `.select` 的 `change` 事件皆會觸發 `setGPA()`。

### 動態新增與刪除

- 點擊 `.plus-btn` 以 DOM API 動態建立一整列輸入（含下拉所有 `option`），補掛 `change` 監聽並以 `scaleUp` 動畫呈現。
- 既有列的刪除：為 `.trash-button` 加上 `click` 事件，先套用 `.remove` 或 `scaleDown`，待 `transitionend/animationend` 後自 DOM 移除並重算 GPA。

### 排序（合併排序）

- 讀取每列 `.grader` 的四欄值，濾除全空列，將成績字串以 `convertor` 轉數字存到 `class_grade_number`。
- `mergeSort`→`merge` 產生升序陣列，如點降序則 `reverse()`；以模板字串重建 `.all-inputs` 內容後，重新掛載 `select/credit/trash` 事件並套用顏色。

---

## 樣式與動畫（CSS/SCSS）

- 全站深色主題、無序清單與按鈕基礎樣式。
- 開場遮罩 `.animation-wrapper` 置頂全螢幕、`slider` 線性漸層背景；Hero 圖片 `object-fit: cover`。
- 輸入列容器 `.all-inputs` 寬 80% 並統一欄位外觀；結果框 `.result` 為 200×200 圓形，套用 `border_color` 循環動畫。
- 動畫關鍵影格：`scaleUp`、`scaleDown`、`border_color`；刪除過場輔以 `.remove{ transform:scale(0); transition:.5s }`。
- SCSS 編譯來源與對應的 source map 已附於版本控制。

---
