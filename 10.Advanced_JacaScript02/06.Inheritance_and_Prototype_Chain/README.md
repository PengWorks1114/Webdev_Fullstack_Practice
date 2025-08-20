# JavaScript Prototype 與 Inheritance

本專案示範 **Prototype (原型)** 與 **Prototype Chain (原型鏈)** 在 JavaScript 中的運作方式，並搭配程式碼範例與筆記整理，解釋物件繼承與記憶體節省的原理。

---

## 📂 檔案結構

```
├── app.js
├── app2.js
├── app3.js
└── test.txt
```

---

## 📘 說明筆記整理（來源：`test.txt`）

### Inheritance and Prototype Chain

- 在 JavaScript 中，每個物件都有一個私有屬性 `__proto__`。
- `__proto__` 的值是一個物件，若物件 A 的 `__proto__` 指向物件 B，則物件 A 繼承了物件 B 的屬性與方法。
- 每個 Constructor Function 都有一個 **prototype 屬性**，本質上是一個空物件。

  - 透過 `new` 建立的物件，其 `__proto__` 屬性會自動指向 Constructor Function 的 `prototype`。

- 若物件沒有該屬性或方法，會沿著 Prototype Chain 向上尋找，直到 `Object.prototype`，它是所有物件的終點。

### 使用 Constructor Function 的好處

1. **程式碼維護性佳**：可透過 Constructor Function 大量建立物件。
2. **節省記憶體空間**：多個物件可共用同一個方法，而不是在每個物件中重複定義。

範例：

- `Array.prototype` 繼承自 `Object.prototype`，因此陣列也可使用物件的方法。
- 所有物件最終都會指向 `Object.prototype` 作為 Prototype Chain 的終點。

---

## 📄 程式碼內容與解說

### `app.js`

```javascript
let chris = {
  name: "Chris",
  sayHi() {
    console.log("你好");
  },
};

let mike = {
  __proto__: chris, // 繼承自 chris
};

console.log(mike.name); // "Chris"
mike.sayHi(); // "你好"
```

👉 說明：

- `mike` 的 `__proto__` 指向 `chris`，因此繼承了 `chris` 的屬性與方法。

---

### `app2.js`

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

console.log(Person.prototype); // {}

let chris = new Person("Chris", 27);
let mike = new Person("Mike", 26);

console.log(chris.__proto__ == Person.prototype); // true
console.log(chris.sayHi == mike.sayHi); // false
```

👉 說明：

- `Person` Constructor Function 本身帶有 `prototype`。
- 每個由 `new Person()` 建立的物件，`__proto__` 都會自動指向 `Person.prototype`。
- 每個物件的 `sayHi` 是獨立的函式，因此 `chris.sayHi != mike.sayHi`。

---

### `app3.js`

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

console.log(Person.prototype);

let chris = new Person("Chris", 27);
let mike = new Person("Mike", 26);

console.log(chris.__proto__ == Person.prototype); // true
console.log(chris.sayHi == mike.sayHi); // false

// 在 prototype 上新增方法
Person.prototype.hello = function () {
  console.log(this.name + "說哈囉");
};

chris.hello(); // Chris說哈囉
console.log(chris.hello == mike.hello); // true
```

👉 說明：

- `Person.prototype.hello` 被新增後，所有由 `new Person()` 建立的物件都能存取。
- 此時 `chris.hello == mike.hello`，因為兩者指向相同的記憶體位置。
- 這就是 **Prototype Inheritance** 的核心概念：共用方法以節省記憶體。

---

## 🚀 學習重點

1. \***\*proto** 與 prototype\*\*

   - `__proto__`：物件的內部屬性，用來指向父層。
   - `prototype`：Constructor Function 的屬性，建立物件時會被指向。

2. **Prototype Inheritance**

   - 建立的物件會繼承 Constructor Function 的 prototype。
   - 可將共用方法寫入 prototype，以節省記憶體。

3. **Prototype Chain**

   - 物件會依序往上尋找方法，直到 `Object.prototype`。
   - 所有物件的終點都是 `Object.prototype`。

---

## 🛠️ 執行方式

使用 Node.js 或瀏覽器 Console 執行：

```bash
node app.js
node app2.js
node app3.js
```

---

## 📚 延伸閱讀

- [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [MDN - Object.prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)
