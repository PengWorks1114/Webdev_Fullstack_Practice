# 🎯 JavaScript Function 基礎練習

## 📌 專案簡介

此專案示範了 **JavaScript 函式（Function）** 的宣告與呼叫方式，包含：

- 無參數函式的定義與執行
- 帶參數函式的定義與執行
- 使用 `console.log()` 輸出訊息

---

## 📚 筆記整理（來自 `note.txt`）

在 JavaScript 中可以自訂函式（Function）：

```javascript
function name([param[, param]]) {
    statements
}
```

- **name**：函式名稱
- **param**：參數，可有多個，使用逗號分隔
- **statements**：函式內要執行的程式碼

---

## 💻 程式碼解析

### 1️⃣ 無參數函式

```javascript
// 宣告
function f() {
  console.log("這是我的第一個fun");
}

// 執行
f();
```

- **功能**：印出一段固定文字
- **呼叫方式**：直接輸入 `f();`

---

### 2️⃣ 帶參數函式

```javascript
function sayHi(name, age) {
  console.log("hi my name is " + name);
  console.log("I'm " + age + "years old");
}

sayHi("Mike", 33);
```

- **功能**：接收 `name` 與 `age` 兩個參數，並輸出自我介紹
- **呼叫方式**：`sayHi("Mike", 33);`
- **輸出結果**：

  ```
  hi my name is Mike
  I'm 33 years old
  ```

---

## 🚀 執行方式

1. 將專案下載至本地端：

   ```bash
   git clone <repository_url>
   ```

2. 開啟瀏覽器開發者工具（F12 → Console）。
3. 使用 `<script src="./app.js"></script>` 將 JS 檔案引入到 HTML，或直接在 Node.js 執行：

   ```bash
   node app.js
   ```

---

## 🎯 學習重點

- **函式宣告與命名規則**
- **參數傳遞與使用**
- **呼叫函式並檢視輸出結果**
