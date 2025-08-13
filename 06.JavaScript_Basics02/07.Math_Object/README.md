# 🔢 JavaScript — Math 物件常用方法

## 📌 專案簡介

此專案示範了 JavaScript **Math 物件** 的常用屬性與方法，並透過程式碼展示數學運算在開發中的應用。
Math 物件是 JavaScript 內建的靜態物件，提供數學常數與計算方法，不需要透過 `new` 建立即可直接使用。

---

## 📚 筆記整理（來自 `note.txt`）

常用的 **Math 物件屬性與方法**：

```javascript
Math.PI; // 圓周率 ≈ 3.141592653589793
Math.E; // 自然常數 e ≈ 2.718281828459045
Math.pow(x, y); // x 的 y 次方
Math.random(); // 回傳 0 ~ 1 之間的亂數（不包含 1）
Math.sqrt(x); // 開根號
Math.abs(x); // 絕對值
Math.floor(x); // 無條件捨去（向下取整）
Math.ceil(x); // 無條件進位（向上取整）
```

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # 範例程式碼，示範數學運算與迴圈
└── note.txt     # 筆記，整理 Math 物件方法
```

---

## 💻 程式碼解析

### 1️⃣ for 迴圈與 while 迴圈範例

```javascript
for (let i = 0; i < 11; i++) {
  console.log(i);
}
console.log("forloop執行完畢");

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}
```

- 先使用 `for` 從 0 數到 10
- 再使用 `while` 從 0 數到 9
- 搭配 `Math` 方法可延伸進行計算（如亂數、平方、開根號等）

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

- **Math 物件屬性與方法的使用方式**
- 不需建立實例即可直接呼叫（`Math.method()`）
- 搭配迴圈與條件判斷可製作隨機數字產生、數學運算功能
