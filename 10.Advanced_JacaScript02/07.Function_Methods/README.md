# JavaScript Function Methods：bind / call / apply

本專案示範 **function 的三大方法** —— `bind()`、`call()` 與 `apply()`，並搭配程式碼與筆記解說 **this 綁定機制**。

---

## 📂 檔案結構

```
├── app.js
├── app2.js
└── note.txt
```

---

## 📘 說明筆記整理（來源：`note.txt`）

在 JavaScript 中，**function 也是一種物件**，並且繼承自 `Object.prototype`。
因此，function 具備以下三種常用方法：

1. **function.bind(obj)**

   - 建立一個新函式，並將 `this` 永久綁定為指定的物件。

2. **function.call(obj, arg1, ..., argN)**

   - 以指定的物件作為 `this`，並立即執行該函式。
   - 參數以逗號分隔逐一傳入。

3. **function.apply(obj, argsArray)**

   - 與 `call` 相同，但參數以 **陣列** 形式傳入。

---

## 📄 程式碼內容與解說

### `app.js` — bind()

```javascript
let Grace = {
  name: "Grace",
  age: 26,
};

function getAge() {
  return this.age; // 若直接呼叫會是 undefined
}

let newFunction = getAge.bind(Grace);
console.log(newFunction()); // 26
```

👉 說明：

- `bind()` 回傳一個新函式，`this` 永久綁定到 `Grace`。
- 因此 `this.age` 取值為 `26`。

---

### `app2.js` — call() / apply()

```javascript
let Grace = {
  name: "Grace",
  age: 26,
};

function getAge(country, height) {
  console.log(this.name + "來自" + country + ", 身高為" + height + "cm");
  return this.age;
}

// 使用 call
getAge.call(Grace, "台灣", 160);
// Grace來自台灣, 身高為160cm → 26

// 使用 apply
getAge.apply(Grace, ["台灣", 160]);
```

👉 說明：

- `call()` 直接執行函式，並以逐一列舉方式傳參。
- `apply()` 與 `call()` 功能相同，但需要以陣列傳入參數。

---

## 🚀 學習重點

1. **bind**

   - 回傳新函式，不會立即執行。
   - 常用於事件處理或 callback 中確保 `this` 綁定正確。

2. **call**

   - 立即執行函式，參數逐一列舉。
   - 適用於單次執行並指定 `this`。

3. **apply**

   - 與 `call` 相同，但參數必須以陣列傳遞。
   - 適合於不確定參數數量時（例如 `Math.max.apply(null, arr)`）。

---

## 🛠️ 執行方式

使用 Node.js 或瀏覽器 Console 執行：

```bash
node app.js
node app2.js
```

---

## 📚 延伸閱讀

- [MDN - Function.prototype.bind()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/bind)
- [MDN - Function.prototype.call()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/call)
- [MDN - Function.prototype.apply()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Function/apply)
