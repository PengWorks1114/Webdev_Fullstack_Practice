# 買票練習題 (Ticket Purchase Practice)

## 專案簡介

此專案為一個簡單的 JavaScript 練習，透過使用者輸入年齡來判斷票種與票價，並彈出對應訊息。程式示範了 **條件判斷 (if / else if / else)** 的使用方式，適合作為 JavaScript 初學者的條件判斷練習。

---

## 功能說明

- **使用者輸入年齡**
  透過 `prompt()` 彈出輸入框，讓使用者輸入年齡。
- **年齡轉換為數字**
  使用 `Number()` 將字串轉為數字，避免型別比對錯誤。
- **條件判斷票價**

  - 0–12 歲 → **兒童票 100 元**
  - 13–65 歲 → **成人票 250 元**
  - 66–125 歲 → **敬老票 150 元**

---

## `note.txt` 條件判斷語法整理

根據 `note.txt`，專案使用了以下常見的 **if 條件結構**：

```javascript
// 單一條件
if (狀況) 執行1;

// if / else 結構
if (狀況) {
  執行1;
} else {
  執行2;
}

// if / else if / else 多條件結構
if (狀況1) {
  執行1;
} else if (狀況2) {
  執行2;
} else {
  狀況n; // 上面條件都不符合時執行
}
```

此專案採用第三種結構進行票種分類。

---

## 檔案結構

```
.
├── index.html   # 頁面主結構，引用 app.js
├── app.js       # 核心票價判斷邏輯
├── note.txt     # 條件判斷語法筆記
└── styles/
    └── style.css # 預留樣式檔（此專案未使用）
```

---

## 代碼解析

### 1. index.html【[檔案內容](index.html)】

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>網站名稱</title>
    <link rel="stylesheet" href="./styles/style.css" />
  </head>
  <body>
    <script src="./app.js"></script>
  </body>
</html>
```

- 採用 HTML5 語法
- `lang="zh-Hant"` 指定繁體中文
- 引入 `app.js`，讓頁面載入時即執行 JavaScript

---

### 2. app.js【[檔案內容](app.js)】

```javascript
// 買票練習題

let age = prompt("請輸入你的年齡: ");

age = Number(age); // 將輸入轉為數字

console.log(age);

if (age >= 0 && age <= 12) {
  alert("您的兒童票一張100元");
} else if (age > 12 && age <= 65) {
  alert("您的成人票一張250元");
} else if (age > 65 && age <= 125) {
  alert("您的敬老票一張150元");
}
```

- **prompt()** → 取得輸入
- **Number()** → 型別轉換，避免 `"10" > 65` 這類錯誤
- **if / else if** → 判斷票種與金額
- **alert()** → 彈出對應票價

---

## 執行方式

1. 將專案下載至本地端

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器直接開啟 `index.html`
3. 在彈出的輸入框中輸入年齡，查看票價提示。

---

## 學習重點

- **條件判斷結構的使用**
- **型別轉換的重要性**
- **基本的瀏覽器輸入與輸出**
