# 📝 JavaScript 基礎 - 變數與賦值（Variable & Assignment）

本專案示範 JavaScript 中 **變數（Variable）** 與 **賦值（Assignment）** 的基礎用法，並比較 `let` 與 `const` 的使用情境與差異。

---

## 🎯 學習目標

1. 瞭解變數的宣告與賦值方式。
2. 認識 `let` 與 `const` 的差異與使用情境。
3. 理解變數的可變性與常數的不可變性。
4. 瞭解語法糖（Syntax Sugar）在賦值中的應用。

---

## 📂 專案結構

| 檔案名稱     | 功能說明                                 |
| ------------ | ---------------------------------------- |
| `index.html` | 主頁面，引用 `app.js`                    |
| `app.js`     | JS 實作範例：變數宣告、賦值、常數宣告    |
| `note.txt`   | 學習筆記，包含變數與賦值的詳細解說與規則 |

---

## 📝 主要程式碼

```javascript
let x; // 宣告變數（未賦值，值為 undefined）
x = 10; // 賦值

console.log(x); // 輸出 x 的值

const y = 2; // const 宣告常數，必須立即賦值
```

【出處：`app.js`】

---

## 📚 筆記整理（來自 `note.txt`）

### 1. 基本定義

- **變數 (Variable / 変数)**
  可以儲存值的容器，內部的值可以變動，因此稱為「變數」。
  若值不可變動，則稱為「常數 (Constant)」。
- **賦值 (Assignment / 代入)**
  將值賦予變數的過程，例如：

  ```javascript
  x = 5;
  x = x + 1; // 結果 x = 6
  ```

  JavaScript 支援**語法糖（Syntax Sugar）**：

  ```javascript
  x += 1; // 等同於 x = x + 1
  ```

---

### 2. 變數宣告規則

1. **依值是否會變動來選擇關鍵字**

   - 若值會變動 → 使用 `let` 宣告。
   - 若值不會變動 → 使用 `const` 宣告（常數）。
   - **不要使用 `var`**（作用域與提升問題較多）。

2. **賦值規則**

   - `const` 宣告時**必須立即賦予初始值** (initializer)。
   - `let` 可以只宣告不賦值，未賦值時預設為 `undefined`。

3. **重複宣告與賦值**

   - `const` 與 `let` 宣告的變數**不可重複宣告**（redeclaration not allowed）。

     ```javascript
     let x = 10;
     let x = 5; // ❌ Error: 重複宣告
     ```

   - `let` 允許重新賦值：

     ```javascript
     let x = 10;
     x = 5; // ✅ OK
     ```

   - `const` 不允許重新賦值（reassignment not allowed）：

     ```javascript
     const y = 2;
     y = 5; // ❌ Error: 不能重新賦值
     ```

---

### 3. 常見錯誤示例

```javascript
const a; // ❌ Error: const 必須初始化
let b;   // ✅ OK，值為 undefined

let c = 1;
let c = 2; // ❌ Error: 重複宣告
c = 2;     // ✅ OK

const d = 10;
d = 20;    // ❌ Error: const 不能重新賦值
```

---

## 🚀 延伸練習

- 建立一個 `score` 變數，使用 `let` 宣告並多次更新值。
- 將 `score` 改為 `const`，觀察重新賦值時的錯誤訊息。
- 練習使用語法糖（`+=`, `-=`, `*=`, `/=`）。
