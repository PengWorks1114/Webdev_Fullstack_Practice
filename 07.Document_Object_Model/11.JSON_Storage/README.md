# Local Storage 與 Session Storage 示範

示範如何在瀏覽器端使用 `localStorage` 儲存與讀取資料，並對比 `sessionStorage` 的差異。

---

## 📒 `note.txt` 重點整理

### 基本概念

- **位置**：`localStorage` 與 `sessionStorage` 為 `window` 物件的屬性，本質皆為物件。
- **資料型態**：儲存的 key 與 value 必須是字串，非字串型態會被自動轉換成字串。
- **差異**：

  - **localStorage**：資料永久存在，關閉瀏覽器或關機後依然保留。
  - **sessionStorage**：資料只在當前瀏覽器分頁有效，關閉分頁即銷毀。

### 常用方法

| 方法                  | 說明                                   |
| --------------------- | -------------------------------------- |
| `setItem(key, value)` | 新增或更新一組 key-value               |
| `getItem(key)`        | 取得指定 key 的值，若不存在回傳 `null` |
| `removeItem(key)`     | 刪除指定 key-value                     |
| `clear()`             | 清除所有 key-value                     |

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

- 網頁主要內容為 `.a`（紅色方塊）與 `.b`（藍色方塊）的樣式示例，JS 功能與此結構無直接互動。
- 頁尾引入 `app.js`，用於執行儲存與讀取範例。

```html
<div class="a">
  <div class="b"></div>
</div>
```

---

### 2) `app.js`

```javascript
// 將資料存入 localStorage
window.localStorage.setItem("name", "Wilson"); // 可省略 window.
window.localStorage.setItem("age", "26"); // 整數會以字串儲存

// 嘗試讀取不存在的 key
console.log(localStorage.getItem("nnaammee")); // 回傳 null
```

**重點說明**：

1. `setItem` 儲存資料至 localStorage，可在瀏覽器開發者工具 → 應用程式 → 儲存空間中檢視。
2. 所有值均以字串形式儲存，例如 `26` 實際為 `"26"`。
3. 讀取不存在的 key 會回傳 `null`，不會拋出錯誤。

---

## 🔧 實務應用

- **localStorage**：適合長期保存的使用者設定、離線資料等。
- **sessionStorage**：適合短期保存的表單暫存、頁面狀態等。
