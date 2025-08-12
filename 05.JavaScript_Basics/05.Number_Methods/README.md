# 📘 JavaScript 數據類型與轉換練習

本專案示範 JavaScript 中的**基本數據類型**、`typeof` 與數據轉換方法（`toString()`、`toFixed()`），並在瀏覽器控制台輸出驗證結果。

---

## 📂 專案結構

| 檔案名稱     | 說明                              |
| ------------ | --------------------------------- |
| `index.html` | 主頁面 HTML，僅載入 `app.js` 腳本 |
| `app.js`     | 範例 JavaScript 代碼              |
| `note.txt`   | 學習筆記，詳細解說 JS 數據類型    |

---

## 📝 JS 數據類型筆記

JavaScript 共有 **七種基本（原始）數據類型** 與 **一種非原始數據類型**：

1. **Number**

   - 表示整數與浮點數。
   - 範例：`10`、`-4`、`-3.14`

2. **BigInt**

   - 任意長度的整數。

3. **String**

   - 字串文字。

4. **Boolean**

   - `true` / `false`

5. **null**

   - 表示一個**故意不存在**的值。

6. **undefined**

   - 尚未被賦值的變數預設為 `undefined`。

7. **Symbol**

   - 唯一的識別符（unique identifier）。

---

### 🗂 第八種數據類型：Object（非原始類型）

- 包含 **Array**、**Object**、**Function** 等。
- 屬於 **non-primitive data type**。

---

## 💻 程式內容

```javascript
let age = 27;
console.log(age.toString() + 27); // 2727，String + Number
console.log(typeof age.toString()); // typeof 驗證: String

const pi = 3.14159266;
console.log(pi.toFixed(2)); // 3.14，但此處 return 的型別為 String
```

### 程式重點：

1. **`toString()`**

   - 將數字轉為字串。
   - 運算時若與數字相加，會進行字串串接。

2. **`typeof`**

   - 檢查變數型別。

3. **`toFixed(n)`**

   - 將數字四捨五入保留 `n` 位小數，並返回**字串**。

---

## 🚀 執行方式

1. 將 `index.html` 與 `app.js` 放於同一資料夾。
2. 使用瀏覽器打開 `index.html`。
3. 開啟開發者工具（F12）→ Console，檢視輸出結果。
