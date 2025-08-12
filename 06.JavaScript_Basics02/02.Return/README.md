# 🌡️ JavaScript Function — 圓面積計算與溫度轉換

## 📌 專案簡介

此專案示範了 **JavaScript 函式（Function）** 的定義與應用，包含：

1. **計算圓面積**
2. **攝氏轉華氏溫度轉換**

同時展示了：

- **函式回傳值**（`return`）
- **使用者輸入與輸出**（`prompt()` / `alert()`）
- **透過 `console.log()` 偵錯與查看結果**

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # 核心功能程式碼
└── styles/
    └── style.css  # 預留樣式檔（此範例未使用）
```

---

## 💻 程式碼解析

### 1️⃣ 計算圓面積函式

```javascript
function circle(r) {
  return 3.14 * r * r;
  // console.log("執行完畢"); // return 後的程式不會被執行
}
console.log(circle(10));
```

- **參數 `r`**：圓的半徑
- **回傳值**：圓面積公式 `πr²`（此處 π 取 3.14）
- **重點**：`return` 後的程式碼不會被執行

---

### 2️⃣ 攝氏轉華氏溫度函式

```javascript
function convertor(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入溫度: (攝氏)"));
let result = convertor(input);
alert("換算後的溫度為: " + result + "f 華氏溫度");
```

- **公式**：攝氏 × 1.8 + 32 = 華氏
- **`prompt()`**：取得使用者輸入（字串）
- **`Number()`**：轉換為數字避免型別錯誤
- **`alert()`**：顯示轉換後的溫度

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 在彈出輸入框輸入攝氏溫度
4. 查看轉換後的華氏溫度提示

---

## 🎯 學習重點

- 函式參數與回傳值的應用
- `return` 的執行特性（後續程式不會執行）
- 使用者輸入與型別轉換
- 基本數學公式在 JavaScript 中的實作
