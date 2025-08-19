```markdown
# JavaScript Scope 與 Closure

本專案整理了 JavaScript **變數作用域 (Scope)** 與 **閉包 (Closure)** 的觀念，並搭配程式碼範例與筆記進行解說。

---

## 📂 檔案結構
```

├── app.js
├── app2.js
├── app3.js
├── colsure.js
└── note.txt

````

---

## 📘 說明筆記整理（來源：`note.txt`）

### Scope（作用域）
Scope 是指在當前 **Execution Context** 中，變數的可訪問性 (Accessibility)。
主要分類如下:contentReference[oaicite:0]{index=0}：

- **Global Scope**：所有程式碼的預設作用域。
- **Module Scope**：在 ES Module 模式下的作用域。
- **Function Scope**：由函式建立的作用域。
- **Block Scope**：由 `{}` 所形成的區塊作用域，例如在 `if`、`for` 中。
  > 只有 `let` 與 `const` 具有 block scope，`var` 不具此特性。

### Closure（閉包）
Closure 指函式與其外部狀態的組合。當函式在其作用域內找不到變數時，會依照以下規則逐層往外尋找:contentReference[oaicite:1]{index=1}：

1. 先從 Arguments Object 與 Local Variables 中尋找。
2. 若未找到，則從函式在記憶體中的定義位置尋找。
3. 若仍找不到，則往外層 Execution Context，直至 Global Scope。

---

## 📄 程式碼內容與解說

### `app.js`

```javascript
// global scope
let myName = "Chris"; // 全域變數

function sayHi() {
  sessionStorage(myName + "說你好");

  function sayHi2() {
    console.log(myName + "說你好2");
    // 在裡面依然能訪問外部的全域變數
  }

  sayHi2();
}

say();

// 不論 var / let / const 宣告的變數，都可能具有 global scope

// Function Scope 範例
function hello() {
  let myName3 = "Andy";
  // 只在此 function 內可使用
}

console.log(myName3); // 錯誤，超出作用域
````

👉 說明：

- 全域變數 `myName` 可被函式內部存取。
- 使用 `let` 在函式中宣告的 `myName3` 只能在該函式內部訪問。

---

### `app2.js`

```javascript
// Block Scope：let / const 才有
if (true) {
  let x = 10;
}
console.log(x); // ❌ ReferenceError

for (let i = 0; i < 20; i++) {}
console.log(i); // ❌ ReferenceError

if (true) {
  var y = 10;
}
console.log(y); // ✅ 10, var 無 block scope

var z = 100;
for (var z = 0; z < 10; z++) {}
console.log(z); // 10
```

👉 說明：

- `let` 與 `const` 有 **Block Scope**，變數僅限於 `{}` 區塊內。
- `var` 無 Block Scope，會洩漏到外部，造成預期外的結果。

---

### `app3.js`

```javascript
function sayHi() {
  console.log("hello");

  function sayHi2() {
    console.log("hello2");
  }
}

sayHi2(); // ❌ 錯誤, function scope 以外無法訪問
```

👉 說明：
函式 `sayHi2` 屬於 `sayHi` 的 **Function Scope**，因此外部無法直接呼叫。

---

### `colsure.js`

```javascript
let c = 100;

function add(a, b) {
  return a + b + c;
  // 在此函式找不到 c，因此往外層 Global Scope 尋找
}
add(3, 4); // 107

// 狀況 2：內外同名變數
let myName = "小華";

function sayHi() {
  let myName = "小明";
  console.log(myName + "說你好"); // 小明說你好
  sayHi2();
}

function sayHi2() {
  console.log(myName + "說你好"); // 小華說你好
}
sayHi();
```

👉 說明：

- `add` 函式內找不到 `c`，會向外層尋找，最後使用全域變數 `c`。
- 當內部與外部有同名變數時，內部優先使用自己的變數，但呼叫其他函式時，則依該函式的定義位置來決定變數來源。

---

## 🚀 學習重點

1. **Scope 類型**

   - Global, Module, Function, Block
   - `let` / `const` 支援 Block Scope，`var` 無

2. **Closure 運作**

   - 函式會記住其定義時的環境
   - 變數解析順序：Arguments → Local → Outer Scope → Global

3. **最佳實務**

   - 避免使用 `var`，以 `let` / `const` 確保作用域安全
   - 善用閉包保留狀態，避免全域污染

---

## 🛠️ 執行方式

使用 Node.js 或瀏覽器 Console 執行：

```bash
node app.js
node app2.js
node app3.js
node colsure.js
```

---

## 📚 延伸閱讀

- [MDN - Scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope)
- [MDN - Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

```

```
