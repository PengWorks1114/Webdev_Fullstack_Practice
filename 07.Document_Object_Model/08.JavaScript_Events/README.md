# JavaScript 事件監聽與事件物件示例

示範 `addEventListener` 在不同 DOM 元素上掛載事件，並使用事件物件 (`Event Object`) 的屬性與方法，包含 `target` 與 `preventDefault()`。

---

## 📒 `note.txt` 重點整理

### JavaScript Events

- **事件 (Event)**：在 DOM 物件上發生的行為，通常由使用者操作觸發。
- **事件監聽器 (Event Listener)**：

  - 使用 `addEventListener(type, listener)` 掛載。
  - **type**：事件類型（如 `click`、`resize`）。
  - **listener**：回呼函式，可為一般函式或箭頭函式。

- **callback function 執行流程**：

  - 當事件發生於 HTML 元素上，JS 會自動執行該 callback function。
  - callback function 的第一個參數會自動接收 **事件物件 (event object)**。

### 常用屬性與方法

- **`target`**：指向最初觸發事件的 DOM 物件。
- **`preventDefault()`**：取消事件的預設行為（不影響事件傳遞）。
- **`stopPropagation()`**：阻止事件在事件冒泡 (bubbling) 階段繼續傳遞。

---

## 📂 專案結構

```
.
├── index.html
├── app.js
├── note.txt
└── styles/
    └── style.css
```

---

## 🧩 原始碼與行為說明

### 1) `index.html`

- **表單 `<form>`**：包含文字輸入與數字輸入欄位（數字欄位限制 `0`\~`10`）。
- **送出按鈕 `<button>`**：位於 `<form>` 之外，需自行監聽點擊事件。

```html
<form action="">
  <input type="text" />
  <input type="number" min="0" max="10" />
</form>
<button>送出表單</button>
```

---

### 2) `app.js`

```javascript
// 取得按鈕並監聽 click 事件
let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log(e.target); // 輸出觸發事件的元素 (button)
});

// 取得表單並監聽 submit 事件
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault(); // 阻止表單提交的預設行為
});
```

**功能重點**：

1. **事件物件的 `target` 屬性**：

   - 在 `button` 的 click 事件中，`e.target` 會是該按鈕元素本身。

2. **`preventDefault()`**：

   - 在 `form` 的 submit 事件中阻止表單送出（預設行為）。
   - 常用於自訂表單驗證或 AJAX 提交場景。

---

## 🔧 實務應用

- 在多個元素共用一個事件監聽時，可透過 `e.target` 判斷是誰觸發事件。
- 使用 `preventDefault()` 可避免頁面跳轉或預設行為，特別適用於表單處理、連結點擊等場景。
