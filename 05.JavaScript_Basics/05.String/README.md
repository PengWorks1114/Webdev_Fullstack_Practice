# 📝 JavaScript 基礎 - 資料型別與運算符（Data Types & Operators）

本專案示範 JavaScript 的 **八大資料型別** 以及基本 **數學運算符** 的使用方式，幫助初學者快速掌握 JS 基礎語法。

---

## 🎯 學習目標

1. 理解 JavaScript 中的七種 **原始資料型別（Primitive Data Types）** 與一種 **非原始資料型別（Non-Primitive Data Type）**。
2. 熟悉加減乘除、取餘數（mod）、指數運算等數學運算符。
3. 瞭解遞增運算（`++`）與簡寫賦值（`+=`）的差異與應用。

---

## 📂 專案結構

| 檔案名稱     | 功能說明                                                       |
| ------------ | -------------------------------------------------------------- |
| `index.html` | 主頁面，引用 `app.js`，執行 JS 程式碼 【出處：`index.html`】   |
| `app.js`     | JavaScript 範例：變數宣告與基本運算符示範 【出處：`app.js`】   |
| `note.txt`   | 學習筆記：JavaScript 八大資料型別詳細解說 【出處：`note.txt`】 |

---

## 📚 筆記整理 - JavaScript 八大資料型別

### **七種原始資料型別（Primitive Data Types）**

1. **Number**

   - 表示整數或浮點數。
   - 範例：

     ```javascript
     let a = 10;
     let b = -4;
     let c = -3.14;
     ```

2. **BigInt**

   - 表示任意長度的整數。
   - 範例：

     ```javascript
     let big = 1234567890123456789012345678901234567890n;
     ```

3. **String**

   - 表示字串文字。
   - 範例：

     ```javascript
     let name = "Hello World";
     ```

4. **Boolean**

   - 表示邏輯值 `true` 或 `false`。
   - 範例：

     ```javascript
     let isActive = true;
     ```

5. **null**

   - 表示一個「刻意不存在」的值。
   - 範例：

     ```javascript
     let emptyValue = null;
     ```

6. **undefined**

   - 表示變數已宣告但尚未賦值。
   - 範例：

     ```javascript
     let notAssigned;
     console.log(notAssigned); // undefined
     ```

7. **Symbol**

   - 表示唯一的識別符（unique identifier）。
   - 範例：

     ```javascript
     let sym = Symbol("id");
     ```

---

### **第八種資料型別（Non-Primitive Data Type）**

8. **Object**

   - 可以是陣列（array）、物件（object）、函式（function）等複合型資料。
   - 範例：

     ```javascript
     let obj = { name: "Alice", age: 25 };
     let arr = [1, 2, 3];
     function greet() {
       console.log("Hello");
     }
     ```

---

## 🔢 程式範例 - 基本數學運算

【出處：`app.js`】

```javascript
let x = 100;
let y = 50;

console.log(100 + 50); // 加法
console.log(100 - 50); // 減法
console.log(100 * 50); // 乘法
console.log(100 / 50); // 除法
console.log(100 % 50); // 取餘數（mod）
console.log(100 ** 50); // 指數運算（100 的 50 次方）

// 遞增運算
// x = x + 1;  等同於 x++; 也等同於 x += 1;
```

---

## 🚀 後續練習

1. 嘗試建立不同資料型別的變數，並用 `typeof` 檢查型別。
2. 練習將 `x` 與 `y` 的值換成不同數字，觀察運算結果變化。
3. 嘗試將 `BigInt` 與普通數字相加，觀察錯誤訊息。
