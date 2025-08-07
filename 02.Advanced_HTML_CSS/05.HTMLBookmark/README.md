
# HTML 書籤與平滑滾動功能練習

本專案示範了如何透過原生 HTML 與 CSS 實作 **頁面內部錨點跳轉**，並搭配 `scroll-behavior: smooth` 增加平滑滾動效果，提升使用者體驗。

---

## 🎯 實作目標

- 🔖 透過 `<a href="#id">` 實現網頁內部段落跳轉（又稱 Bookmark 書籤）。
- ✨ 使用 CSS 的 `scroll-behavior: smooth` 達到平滑滾動效果。

---

## 🧪 實作內容

### ✅ 頁面跳轉書籤設定

HTML 連結區：

```html
<a href="#first-p">第一個段落</a>
<a href="#second-p">第二個段落</a>
<a href="#third-p">第三個段落</a>
<a href="#four-p">第四個段落</a>
````

對應段落區（加上 `id`）：

```html
<h1 id="first-p">第一個段落</h1>
<h1 id="second-p">第二個段落</h1>
...
```

### ✅ 平滑滾動 CSS 設定

加入於 `<style>` 中：

```css
html {
  scroll-behavior: smooth;
}
```

效果：點選上方連結時，網頁會平滑地捲動至對應段落，而非瞬間跳躍。

---

## 📌 備註

* `scroll-behavior: smooth` 僅適用於**現代瀏覽器**（IE 不支援）。
* 如需更高階控制（例如滾動位置偏移、動畫加速），可考慮使用 JavaScript Scroll API 或第三方函式庫（如 `scrollIntoView` 或 jQuery Scroll）。

---

## 📁 檔案說明

| 檔案名稱         | 說明                     |
| ------------ | ---------------------- |
| `index.html` | 練習 HTML 書籤跳轉與 CSS 滑動效果 |

