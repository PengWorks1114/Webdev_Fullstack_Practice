# 🔄 JavaScript — For Loop 與 While Loop 基礎練習

## 📌 專案簡介

此專案示範了 **JavaScript 迴圈（Loop）** 的兩種常用形式：

1. `for` 迴圈 — 適合已知執行次數的情境
2. `while` 迴圈 — 適合需持續檢查條件的情境

並說明了 **無限迴圈** 的風險與避免方法。

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ For Loop

- 語法：

```javascript
for (initialization; condition; final expression) {
    statement
}
```

- **initialization**：迴圈開始前的變數宣告與初始值
- **condition**：每次迭代前評估的條件，為假則結束迴圈
- **final expression**：每次迴圈結束後執行的表達式（通常用來更新計數器）
- 適用情境：已知需要執行的次數

---

### 2️⃣ While Loop

- 語法：

```javascript
while (condition) {
  statement;
}
```

- 條件為真時重複執行，條件為假時停止
- 常見陷阱：忘記更新計數器 → 造成 **無限迴圈**
- 適用情境：不確定迴圈執行次數，需要根據條件決定

---

### 3️⃣ Do While Loop

- 語法：

```javascript
do {
  statement;
} while (condition);
```

- 特點：**先執行一次**再檢查條件
- 與 `while` 差異：`while` 是先檢查再執行

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # 迴圈示範程式碼
└── note.txt     # 筆記，整理三種迴圈差異與語法
```

---

## 💻 程式碼解析

### 1️⃣ for 迴圈範例

```javascript
for (let i = 0; i < 11; i++) {
  console.log(i);
}
console.log("forloop執行完畢");
```

- 從 0 執行到 10，共輸出 11 次
- `i++` 每次增加 1

---

### 2️⃣ while 迴圈範例

```javascript
let i = 0;
while (i < 10) {
  console.log(i);
  i++; // 防止無限迴圈
}
```

- 當 `i < 10` 時持續執行
- 更新計數器 `i++` 是關鍵步驟

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

- `for` 適合已知次數的迴圈
- `while` 適合不確定次數、根據條件執行的迴圈
- 小心無限迴圈對 CPU 的影響
- `do while` 與 `while` 的主要差異在於檢查條件的時機
