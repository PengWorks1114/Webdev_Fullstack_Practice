# 🔄 JavaScript — forEach() 方法

## 📌 專案簡介

此專案示範了 **`forEach()` 陣列方法** 的使用方式，並說明：

- 它作為 **Higher-Order Function** 的特性
- 如何傳入 **Arrow Function** 作為回呼函式（callback function）
- 參數的不同使用方式

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ `forEach()` 方法

- **用途**：對陣列中每一個元素執行指定的函式
- **特性**：

  - 是一個 **Higher-Order Function**
  - 需要傳入一個 **回呼函式**（通常是箭頭函式）

- **語法**：

```javascript
array.forEach(element => ...)
array.forEach((element, index) => ...)
array.forEach(callbackFn)
```

- **參數說明**：

  - `element`：當前元素
  - `index`（可選）：當前元素的索引值
  - `array`（可選）：原始陣列本身

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # forEach() 使用範例
└── note.txt     # 筆記，整理 forEach 方法語法
```

---

## 💻 程式碼解析

### 範例

```javascript
let NB = [1, 2, 3, 4, 5, 6, 7];

NB.forEach((n) => {
  console.log(n + 3);
});
```

- 陣列 `NB` 包含 1\~7
- `forEach()` 對每個元素 `n` 執行 `n + 3`，並將結果輸出
- 執行後輸出：

```
4
5
6
7
8
9
10
```

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 開啟開發者工具（F12 → Console）觀察輸出結果

---

## 🎯 學習重點

- `forEach()` 適合用於需要遍歷陣列但**不回傳新陣列**的情境
- 與 `map()` 不同，`forEach()` 的回呼函式**沒有 return 值**
- 可使用箭頭函式讓語法更簡潔
