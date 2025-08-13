# 📄 JavaScript — DOM 節點與元素查詢

## 📌 專案簡介

此專案示範了：

- DOM 節點類型與特性
- 多種 **DOM 查詢方法**（`getElementsByClassName`、`querySelector`、`querySelectorAll` 等）
- **HTMLCollection（動態）** 與 **NodeList（靜態）** 的差異
- 使用 `createElement` 動態新增元素並觀察集合長度變化

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ DOM 節點類型

- **HTML 元素節點**（Element nodes / Element objects）
- **文字節點**（Text nodes）
- **註解節點**（Comment nodes）

### 2️⃣ 節點集合類型

- **HTMLCollection**：動態（Dynamic）
- **NodeList**：靜態（Static）

> 兩者都是類陣列（array-like objects），但不是真正的 Array。

### 3️⃣ 常用 DOM 操作方法

```javascript
document.getElementById(id); // 取得對應 ID 的第一個元素
document.getElementsByClassName(name); // 動態 HTMLCollection
document.querySelector(selector); // 符合選擇器的第一個元素（深度優先搜尋）
document.querySelectorAll(selector); // 符合選擇器的靜態 NodeList
document.createElement(tagName); // 創建新元素
```

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，含多個 p 與 class 樣本
├── app.js       # DOM 查詢與元素新增範例
└── note.txt     # 筆記，整理 DOM 與節點集合差異
```

---

## 💻 程式碼解析

### 1️⃣ 創建元素

```javascript
let myH1 = document.createElement("h1");
console.log(myH1); // <h1>
```

### 2️⃣ 查詢元素

```javascript
let first_found = document.querySelector(".my-p");
console.log(first_found); // 第一個符合 .my-p 的元素

let found_elements = document.querySelectorAll(".my-p");
console.log(found_elements); // 靜態 NodeList

let hellos = document.getElementsByClassName("hello"); // 動態
let helloss = document.querySelectorAll(".hello"); // 靜態
console.log(hellos.length); // 2
console.log(helloss.length); // 2
```

### 3️⃣ 新增元素並觀察集合變化

```javascript
let body = document.querySelector("body");
let p = document.createElement("p");
p.innerText = "this is a new p";
p.classList.add("hello");
body.appendChild(p);

console.log("改變dom之後...");
console.log(hellos.length); // 3（動態更新）
console.log(helloss.length); // 2（靜態不變）
```

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 開啟開發者工具（F12 → Console）觀察輸出

---

## 🎯 學習重點

- 動態 **HTMLCollection** 與靜態 **NodeList** 的差異
- `querySelector` 與 `querySelectorAll` 的使用時機
- 如何透過 `createElement` 與 `appendChild` 動態操作 DOM
