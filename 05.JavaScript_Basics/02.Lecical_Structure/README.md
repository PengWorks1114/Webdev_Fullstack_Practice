

# 📝 JavaScript 詞彙結構（Lexical Structure）示範

本專案用簡單的 JavaScript 範例程式，說明 **Lexical Structure（詞彙結構）** 的基本概念與程式撰寫規則，並示範常用的輸入與輸出函數。

---

## 🎯 專案目標

* 瞭解 **JavaScript 的語法結構與保留字**。
* 熟悉 **大小寫敏感 (Case Sensitive)**、**變數命名規則** 與 **註解寫法**。
* 學習 **`console.log()`、`window.alert()`、`window.prompt()`** 的基礎應用。

---

## 📂 專案結構

| 檔案名稱         | 說明                            |
| ------------ | ----------------------------- |
| `index.html` | 主頁面，透過 `<script>` 引入 `app.js` |
| `app.js`     | JavaScript 程式，示範輸入與輸出函數       |
| `note.txt`   | Lexical Structure 筆記與語法規則說明   |

---

## 💻 範例程式碼

`app.js` 主要內容：

```javascript
console.log("Hello World");
let user_name = window.prompt("請輸入你的姓名: ");
window.alert("歡迎來到此網站" + user_name);
```

* `console.log()`：將訊息輸出到瀏覽器控制台。
* `window.prompt()`：顯示輸入對話框，讓使用者輸入文字。
* `window.alert()`：顯示提示訊息對話框。

---

## 📌 Lexical Structure 基本規則（摘錄自 note.txt）

1. **大小寫敏感**（`Case Sensitive`）
2. 空白鍵與換行會被忽略（壓縮程式碼時會移除）
3. 註解：

   * 單行註解：`//`
   * 多行註解：`/* ... */`
4. 變數名稱必須以字母、底線 `_` 或 `$` 開頭
5. 保留字（如 `null`、`if`、`for`、`const`、`var` 等）不能用作變數名稱
6. JS 採用 Unicode 字元集，字串可包含任何 Unicode 文字
7. 分號（`;`）可用於分隔語句，為可選（Optional）

---

## 🚀 執行方式

1. 將專案下載到本地
2. 使用瀏覽器打開 `index.html`
3. 頁面會先在控制台輸出 `"Hello World"`
4. 會跳出輸入框讓你輸入姓名，並以 `alert` 顯示歡迎訊息

---

## 📚 延伸練習

* 嘗試在 `app.js` 中加入其他保留字並觀察錯誤訊息
* 測試單行與多行註解的使用
* 練習不同的變數命名方式（合法與不合法）

