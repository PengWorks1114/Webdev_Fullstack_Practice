# 🎯 JavaScript — 終極密碼遊戲

## 📌 專案簡介

此專案實作了經典的 **終極密碼遊戲**（數字猜謎遊戲），玩家需在指定的範圍內不斷猜測秘密數字，程式會根據猜測結果動態縮小範圍，直到猜中為止。
重點在於：

- **亂數生成**
- **迴圈控制**
- **條件判斷與範圍更新**

---

## 📚 筆記整理（來自 `note.txt`）

- 核心概念：使用 **迴圈** 不斷讓玩家輸入數字，直到猜中秘密數字為止。
- 必要條件：

  1. 產生一個 0 \~ 99 之間的隨機數字作為答案。
  2. 使用變數紀錄目前可猜測的最小值與最大值。
  3. 玩家每次輸入後，根據結果縮小範圍。
  4. 無效輸入（超出範圍）需提示並重新輸入。

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # 核心遊戲邏輯
└── README.md    # 專案說明
```

---

## 💻 程式碼解析

### 1️⃣ 初始化與亂數生成

```javascript
let answer = Math.floor(Math.random() * 100);
let n1 = 0;
let n2 = 99;
```

- `Math.random()` 產生 0~~1 間的隨機小數，乘以 100 後取整數，即 0~~99。
- `n1` 與 `n2` 分別紀錄猜測範圍的上下界。

---

### 2️⃣ 遊戲主迴圈

```javascript
while (true) {
  let guess = Number(prompt("請輸入你的猜測(" + n1 + "~" + n2 + ")"));

  if (guess < n1 || guess > n2) {
    alert("無效猜測.請重新猜測一個數字");
    continue;
  }

  if (guess == answer) {
    alert("您猜對了! 秘密數字是 " + answer);
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
```

- **無效輸入處理**：超出範圍直接跳過本輪，重新輸入。
- **猜中答案**：使用 `break` 跳出迴圈結束遊戲。
- **縮小範圍**：

  - 猜太小 → 更新最小值 `n1`
  - 猜太大 → 更新最大值 `n2`

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 依照提示輸入數字，直到猜中為止

---

## 🎯 學習重點

- **Math.random** 與 **Math.floor** 生成亂數
- **while(true)** 搭配 `break` 與 `continue` 控制流程
- 範圍判斷與動態更新邏輯
