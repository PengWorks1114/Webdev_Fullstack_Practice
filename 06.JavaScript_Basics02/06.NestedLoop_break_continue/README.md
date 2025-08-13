# 🔁 JavaScript — 巢狀迴圈（Nested Loop）、Break 與 Continue

## 📌 專案簡介

此專案示範了：

- **巢狀迴圈（Nested Loop）** 的運作方式
- **`break`** 與 **`continue`** 在迴圈中的應用
- 透過 `for` 迴圈搭配陣列輸出內容

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ 巢狀迴圈（Nested Loop）

- 定義：一個迴圈中再包含另一個迴圈
- 特點：**外圈每執行一次，內圈會完整執行一次**

### 2️⃣ `break` 關鍵字

- 用途：終止所在的迴圈
- 在巢狀迴圈中，`break` 只會終止包含它的那層迴圈
- 若要完全跳出所有迴圈，可使用 `return` 或額外邏輯控制

### 3️⃣ `continue` 關鍵字

- 用途：跳過當前迭代剩餘程式碼，直接進入下一次迭代
- 與 `break` 相反，不會終止迴圈

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js（可改引 app2.js 測試其他功能）
├── app.js       # 基本 for 與 while 迴圈範例
├── app2.js      # 巢狀迴圈、break、continue、陣列輸出範例
└── note.txt     # 筆記，整理語法與使用情境
```

---

## 💻 程式碼解析

### 1️⃣ 巢狀迴圈與 `break`

```javascript
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    console.log(j);
    if (j == 3) {
      break; // 只會跳出內層迴圈
    }
  }
}
```

- 內層 `j` 從 0\~3 後就被 `break` 終止
- 外層 `i` 依然會繼續到 100 次

---

### 2️⃣ `continue` 範例

```javascript
for (let k = 0; k < 10; k++) {
  if (k == 3) {
    continue; // 跳過 3
  }
  console.log(k);
}
```

- 當 `k` 為 3 時，直接進入下一次迴圈，跳過 `console.log()`

---

### 3️⃣ 陣列輸出

```javascript
let arr = ["Mike", "Grace", "Jason", "Jared"];
for (let p = 0; p < arr.length; p++) {
  console.log(arr[p] + " is my friend.");
}
```

- 使用 `arr.length` 控制迴圈範圍
- 動態遍歷陣列元素

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 開啟開發者工具（F12 → Console）觀察輸出結果
4. 可切換 `<script src="./app.js"></script>` 為 `app2.js` 測試不同範例

---

## 🎯 學習重點

- **巢狀迴圈** 的完整執行流程
- **`break`** 與 **`continue`** 的使用差異
- 陣列遍歷與 `arr.length` 的應用
