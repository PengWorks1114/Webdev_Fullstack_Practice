# JavaScript Constructor Function 繼承與 Prototype Inheritance

本專案示範 **Constructor Function 的繼承** 與 **Prototype Inheritance** 的原理與實作，說明如何讓一個建構函式 (Constructor Function) 繼承另一個函式的屬性與方法。

---

## 📂 檔案結構

```
├── app.js
├── app2.js
└── note.txt
```

---

## 📘 說明筆記整理（來源：`note.txt`）

### Constructor Function 的繼承方式

在 JavaScript 中，Constructor Function A 想要繼承 Constructor Function B 的屬性與方法，需透過兩個設定：

1. **在 A 的內部呼叫 B.call(this, ...args)**

   - 將 B 的屬性 (attributes) 直接套用到 A 之上。

2. **設定 A.prototype = Object.create(B.prototype)**

   - 透過 `Object.create()` 建立一個全新的物件，讓 A 繼承 B 的方法 (methods)。
   - 所有額外新增在 `A.prototype` 的方法，必須寫在這行程式碼之後。

⚠️ **避免使用 `A.prototype = B.prototype`**
因為 prototype 屬性是 reference type，若直接指定，兩個 constructor function 的 prototype 會共用同一個記憶體位置，導致相互影響。

---

## 📄 程式碼內容與解說

### `app.js` — 只有呼叫 `call`

```javascript
// Function Person()
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(this.name, "說你好");
};

// Function Student()
function Student(name, age, major, grade) {
  Person.call(this, name, age);
  this.major = major;
  this.grade = grade;
}

let mike = new Student("Mike", 26, "Chemistry", 3.5);
console.log(mike);
mike.sayHi(); // ❌ ReferenceError
```

👉 說明：

- `Student` 透過 `Person.call(this, ...)` 成功繼承了 `name` 與 `age` 屬性。
- 但由於沒有設定 `Student.prototype = Object.create(Person.prototype)`，因此 `mike` 無法使用 `sayHi` 方法。

---

### `app2.js` — call + Object.create

```javascript
// Function Person()
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHi = function () {
  console.log(this.name, "說你好");
};

// Function Student()
function Student(name, age, major, grade) {
  Person.call(this, name, age);
  this.major = major;
  this.grade = grade;
}

// Prototype 繼承
Student.prototype = Object.create(Person.prototype);

Student.prototype.study = function () {
  console.log(this.name + "正就讀" + this.major);
};

let mike = new Student("Mike", 26, "Chemistry", 3.5);
mike.sayHi(); // ✅ 可執行 (繼承自 Person.prototype)
mike.study(); // ✅ 可執行 (Student 自己的方法)
```

👉 說明：

- `Student.prototype = Object.create(Person.prototype)` 讓 `Student` 繼承了 `Person` 的方法。
- 因此 `mike` 可以使用 `sayHi()` (來自 `Person.prototype`) 與 `study()` (來自 `Student.prototype`)。

---

## 🚀 學習重點

1. **Constructor 繼承的兩步驟**

   - 使用 `B.call(this, args...)` 繼承屬性。
   - 使用 `A.prototype = Object.create(B.prototype)` 繼承方法。

2. **正確的 prototype 設定**

   - 額外新增的方法必須在 `Object.create()` 之後撰寫。
   - 切勿使用 `A.prototype = B.prototype`，避免共享記憶體問題。

3. **物件導向應用**

   - 可用於模擬類別繼承結構，例如「車子 → 越野車 / 休旅車 / 賽車」案例。

---

## 🛠️ 執行方式

使用 Node.js 或瀏覽器 Console 執行：

```bash
node app.js
node app2.js
```

---

## 📚 延伸閱讀

- [MDN - Object.create()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
- [MDN - Inheritance and the prototype chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
