
# RWD 練習專案簡介

本專案為一個練習響應式設計（Responsive Web Design, RWD）的靜態網頁示例，核心目標為：在能使用 Flexbox 解決排版問題時盡量使用 Flexbox，必要時輔以 Media Query 製作不同裝置下的樣式調整。

## 📐 設計理念

- ✅ **優先使用 Flexbox**：畫面主要排版問題應以 `flex` 處理，具備彈性且可延展。
- ✅ **Media Query 為輔助工具**：當 Flexbox 無法解決如字級、圖片比例、單列排列等問題時，再使用 `@media` 調整。

## 🎯 實作重點

### 圖片與元素自適應大小

- 不硬編 `width: 300px` 等固定尺寸。
- 改為使用 `%`、`max-width` 或 `flex-basis`，讓圖片與區塊能根據螢幕大小自動伸縮。

### Media Query 寫法示例

```css
@media screen and (max-width: 800px) {
  h1 {
    background-color: red;
  }
}
````

### 建議做法

| 項目       | 建議方式                              |
| -------- | --------------------------------- |
| 圖片寬度     | `width: 100%` 或 `max-width: 100%` |
| 排版       | 使用 `display: flex` + `flex-wrap`  |
| 不可用 flex | 補上 `@media` 控制排版或字體大小             |

---

## 🧪 範例說明

當視窗寬度小於 800px 時，`h1` 背景顏色會變成紅色，示意 Media Query 生效。

```html
<style>
  h1 {
    background-color: aqua;
  }

  @media screen and (max-width: 800px) {
    h1 {
      background-color: red;
    }
  }
</style>
```

---

## 📌 小結

* 能用 Flexbox 解決就不要寫 Media Query。
* 畫面不應依賴硬編大小（如 `width: 300px`），應隨裝置寬度自動調整。
* Media Query 僅在 Flexbox 無法滿足需求時使用。


