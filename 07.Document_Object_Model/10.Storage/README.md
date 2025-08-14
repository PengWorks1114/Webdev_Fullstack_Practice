# Local Storage 與 Session Storage 示範

示範如何在瀏覽器端使用 `localStorage` 儲存與讀取資料，並對比 `sessionStorage` 的差異。

---

## 📒 `note.txt` 重點整理

### 基本概念

- **位置**：`localStorage` 與 `sessionStorage` 是 `window` 物件下的兩個屬性，本質都是物件。
- **資料型態**：儲存的 **key** 與 **value** 全部都是 **字串**。若傳入非字串，會先被自動轉成字串再儲存。
- **差異**：

  - **localStorage**：資料永久儲存在瀏覽器中，即使關閉瀏覽器或關機仍會保留。
  - **sessionStorage**：資料僅在當前瀏覽器分頁存在，關閉分頁即被銷毀。

### 常用方法

| 方法                  | 說明                                       |
| --------------------- | ------------------------------------------ |
| `setItem(key, value)` | 新增或更新一組 key-value                   |
| `getItem(key)`        | 取得指定 key 的 value，若不存在回傳 `null` |
| `removeItem(key)`     | 刪除指定 key-value                         |
| `clear()`             | 清除所有 key-value                         |

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

- 此 HTML 僅載入 `app.js`，主要用於示範 JS 中的 `localStorage` 操作。
- `body` 中的 `.a` 與 `.b` 區塊屬於樣式示例，與儲存功能無直接關聯。

```html
<div class="a">
  <div class="b"></div>
</div>
```

---

### 2) `app.js`

```javascript
// 將資料存入 localStorage
window.localStorage.setItem("name", "Wilson"); // "window." 可省略
window.localStorage.setItem("age", "26"); // 整數也會以字串儲存

// 嘗試取得不存在的 key
console.log(localStorage.getItem("nnaammee")); // null
```

**功能重點**：

1. `setItem` 會在瀏覽器的 **應用程式 → 儲存空間 → 本機儲存空間 (Local Storage)** 中新增資料。
2. 存入的所有值會被轉成字串儲存，例如 `26` 實際儲存為 `"26"`。
3. `getItem` 若查詢不存在的 key，會回傳 `null`。

---

## 🔧 實務應用

- **localStorage**：適合儲存使用者偏好設定、離線資料快取等需長期保存的資訊。
- **sessionStorage**：適合儲存單次瀏覽會話的暫時資料，如表單填寫進度、分頁狀態等。
