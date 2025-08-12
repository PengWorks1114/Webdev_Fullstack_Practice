# 06.String_Operations

本專案示範 JavaScript 中常見的 **字串操作方法**，並結合基礎數據型別知識，適合作為初學者練習與筆記整理的範例。

## 📂 專案結構

| 檔案名稱     | 功能說明                                 |
| ------------ | ---------------------------------------- |
| `index.html` | HTML 主頁面，引用 `app.js` 執行 JS 邏輯  |
| `app.js`     | JavaScript 範例程式，展示字串相關操作    |
| `note.txt`   | 筆記，整理 JS 基本數據型別與 object 概念 |

---

## 📜 筆記整理（來自 `note.txt`）

### JavaScript 七種基本數據類型 (Primitive Types)

1. **Number**

   - 整數與小數數字
   - 範例：`10`、`-4`、`-3.14`

2. **BigInt**

   - 任意長度整數

3. **String**

   - 字串（文字資料）

4. **Boolean**

   - `true` / `false`

5. **null**

   - 表示一個「刻意不存在」的值

6. **undefined**

   - 尚未賦值的變數

7. **symbol**

   - 唯一識別符 (unique identifier)

### 第八種資料型態：**Object**

- 屬於 Non-Primitive Data Type
- 可能的型態：`Array`、`Object`、`Function` 等

---

## 💻 程式邏輯（來自 `app.js`）

```javascript
let str = "Wilson";

// 取得字串長度
console.log(str.length); // 6

// 取得第一個字
console.log(str[0]); // "W"

// 取得最後一個字
console.log(str[str.length - 1]); // "n"

// 字串切割（slice）
console.log(str.slice(3)); // "son" 從索引 3 開始到結尾
console.log(str.slice(0, 3)); // "Wil" 從索引 0 到 3 (不含 3)

// 查找字串位置
console.log(str.indexOf("W")); // 0

let sentence = "Today is a good day";

// 以空白拆分字串
let result = sentence.split(" ");
console.log(result); // ["Today", "is", "a", "good", "day"]

// 判斷開頭
console.log(sentence.startsWith("Today")); // true（大小寫敏感）

// 判斷是否包含
console.log(sentence.includes("Today")); // true

// 取得 UTF-16 編碼
console.log(sentence.charCodeAt(0)); // 84 (T 的編碼)
```

---

## 📝 學習重點

- `length`：取得字串長度
- 索引存取（`[index]`）：讀取字元
- `slice(start, end)`：擷取字串片段
- `indexOf(substr)`：尋找字串位置
- `split(delimiter)`：分割字串為陣列
- `startsWith(str)` / `includes(str)`：字串檢查
- `charCodeAt(index)`：取得字元的 UTF-16 編碼

---

## 🚀 後續可擴充方向

- 加入更多字串方法示範（`substring`、`substr`、`replace`、`match` 等）
- 補充 ES6+ 新增的字串方法（`startsWith`、`endsWith`、`includes`）
- 製作互動式範例（使用輸入框讓使用者體驗方法效果）
