# 📦 JavaScript — Primitive vs Reference Data Type

## 📌 專案簡介

此專案示範了 **JavaScript 資料型別的複製行為**，包含：

- **原始型別（Primitive Data Type）** — 按值複製 (Copy by Value)
- **參考型別（Reference Data Type）** — 按參考複製 (Copy by Reference)

程式透過 `console.log()` 比較陣列與數字在複製與修改後的不同結果。

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ 原始型別（Primitive Data Type）

- 常見類型：`number`、`string`、`boolean`、`null`、`undefined`、`symbol`、`bigint`
- **特性**：複製時會建立新值（互不影響）

```javascript
let deposit = 500;
let another = deposit;
another = 600;
// deposit 與 another 分別持有不同的值
```

### 2️⃣ 參考型別（Reference Data Type）

- 常見類型：`object`、`array`、`function`
- **特性**：複製時是指向同一個記憶體位址（互相影響）

```javascript
let friends = ["a", "b", "c"];
let another = friends;
another[0] = "d";
// friends 與 another 指向同一個陣列
```

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # 核心程式碼（示範 Copy by Value / Copy by Reference）
└── note.txt     # 筆記，整理兩種資料型別差異
```

---

## 💻 程式碼解析

### 1️⃣ Copy by Reference（陣列）

```javascript
let friends = ["Grce", "Mike", "Spencer", "Esther", "Slade", "Wilson"];
let anotherVariable = friends;
anotherVariable[0] = "Michael";

console.log("firends arry變成是: ");
console.log(friends);
console.log("anotherVariable array變成是:");
console.log(anotherVariable);
```

- 修改 `anotherVariable` 會直接影響 `friends`
- 適用於陣列與物件

---

### 2️⃣ Copy by Value（數字）

```javascript
let deposit = 500;
let anotherDeposit = deposit;
anotherDeposit = 600;

console.log("deposi 為:", deposit, "anotherDeposit為:", anotherDeposit);
```

- 修改 `anotherDeposit` **不會影響** `deposit`
- 適用於原始型別

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

- 原始型別與參考型別的本質差異
- 陣列與物件在複製時會指向相同記憶體位址
- 避免意外修改資料的方法（如使用展開運算子 `[...]` 或 `Object.assign()`）
