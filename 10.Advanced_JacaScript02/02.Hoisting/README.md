# JavaScript Hoisting Example

本專案示範 **Hoisting (提升機制)** 在 JavaScript 中的運作方式，並提供完整的程式碼範例與筆記說明。重點在於 **函式宣告 (Function Declaration)** 與 **變數宣告 (var / let / const)** 在執行階段的差異。

---

## 📘 說明筆記整理（來源：`note.txt`）

### Hoisting 定義

Hoisting 是指 JS 引擎在執行程式碼前，會先將 **函式、變數、class 的宣告 (declaration)** 移動到其作用域頂部的過程:contentReference[oaicite:0]{index=0}。

- **優點**：允許在程式碼中於宣告之前就使用函式。
- **限制**：只對 **Function Declaration** 有效，**Function Expression** 與 **Arrow Function** 不適用。
- **變數部分**：只會提升 **宣告 (declaration)**，不會提升 **初始化 (initialization)**。  
  例如：
  ```javascript
  let x = 10;
  ```

````

在 hoisting 過程中只會將 `let x;` 提升到頂端，而不包含賦值 `= 10`。

---

## 📂 檔案結構

```
├── app.js
└── note.txt
```

---

## 📄 程式碼內容與解說

### `app.js`

```javascript
// hoisting 會把下面的拉上來
// function hello() {...}
// var x;
// let y;
// const z;
// 但是要小心, 這個功能只對 function declaration 有用

var x = 5;

hello();

function hello() {
  console.log("hello");
}

let y = 10;
const z = 6;

// 這樣就不行，因為後面還沒有 initialize
myFunction();
let myFunction = () => {
  console.log("this is my function");
};
```

#### 程式解說：

1. **函式宣告提升 (Function Declaration Hoisting)**

   ```javascript
   hello(); // ✅ 可以執行
   function hello() {
     console.log("hello");
   }
   ```

   因為 `function hello()` 屬於函式宣告，會在程式執行前被提升到作用域頂端，因此可在宣告之前呼叫。

2. **變數提升 (Variable Hoisting)**

   ```javascript
   var x = 5;
   ```

   在 hoisting 過程中，JS 引擎會先提升 `var x;`，但 `x = 5` 的初始化動作會留在原本的位置。因此在 `x` 賦值前若存取會得到 `undefined`。

   ```javascript
   let y = 10;
   const z = 6;
   ```

   使用 `let` 與 `const` 宣告的變數同樣會被提升，但在正式初始化之前，屬於 **Temporal Dead Zone (TDZ)**，若在初始化前存取會觸發 `ReferenceError`。

3. **函式表達式與箭頭函式 (Function Expression / Arrow Function)**

   ```javascript
   myFunction(); // ❌ ReferenceError
   let myFunction = () => {
     console.log("this is my function");
   };
   ```

   這類型屬於 **變數宣告 + 賦值**，只有變數本身被 hoisting，但函式內容不會被提升，因此在初始化前呼叫會發生錯誤。

---

## 🚀 學習重點

1. **Function Declaration** 會完整提升，可在宣告之前呼叫。
2. **Function Expression / Arrow Function** 僅提升變數宣告，初始化不會提升，因此無法在宣告前使用。
3. **var** 宣告的變數在初始化前會得到 `undefined`。
4. **let / const** 宣告的變數在初始化前處於 **TDZ**，若存取會報錯。

---

## 🛠️ 執行方式

使用 Node.js 或瀏覽器 Console 執行：

```bash
node app.js
```

* 可在輸出中看到 `hello` 正確被呼叫。
* 呼叫 `myFunction()` 則會觸發錯誤，因為尚未初始化。

---

## 📚 延伸閱讀

* [MDN - Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)
* [JavaScript Variables - var, let, const](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let)

```

````
