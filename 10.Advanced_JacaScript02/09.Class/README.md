# JavaScript Class 練習專案

本專案示範了如何將傳統的 JavaScript **constructor function 與 prototype** 撰寫方式，改寫為 **ES6 Class 語法**，並涵蓋以下主題：

- 基本 Class 撰寫
- 繼承 (Inheritance)
- Static 屬性與方法
- Prototype 與 Class 語法比較

---

## 📘 專案結構

- `note.txt`：專案重點筆記與語法說明
- `app.js`：Class 基本語法改寫練習
- `app2.js`：繼承 (extends) 改寫練習
- `app3.js`：Static 屬性與方法練習

---

## 📒 筆記整理 (note.txt)

- **Class 語法**：自 2015 年引入，用於取代傳統 constructor function。
- **本質**：Class 其實是基於現有的 prototype inheritance 的語法糖。
- **繼承 (extends)**：用於讓一個 class 繼承另一個 class 的方法與屬性。
- **static**：

  - 屬性與方法屬於 class 本身，不屬於每個 instance。
  - 可直接透過 `ClassName.method()` 或 `ClassName.property` 呼叫。
  - 適合放置共用常數或工具方法。

---

## 📂 程式碼內容與說明

### 1. `app.js`：基本 Class 語法

程式碼展示了如何將傳統 constructor function 改寫成 Class：

```javascript
// 傳統 Function + Prototype
function Student(name, age, major) {
  this.name = name;
  this.age = age;
  this.major = major;
}

Student.prototype.sayHi = function () {
  console.log(this.name + "說你好");
};

// Class 語法改寫
class Student {
  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  sayHi() {
    console.log(this.name + "說你好");
  }
}
```

重點：

- `constructor()` 用來取代 function 本身。
- 方法直接寫在 class 區塊中，會自動加到 prototype 上。

---

### 2. `app2.js`：繼承 (Inheritance)

程式碼展示了如何用 `extends` 與 `super` 來繼承父類別：

```javascript
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHi() {
    console.log(this.name + "說你好");
  }
}

class Student extends Person {
  constructor(name, age, major, grade) {
    super(name, age); // 呼叫父類別 constructor
    this.major = major;
    this.grade = grade;
  }

  study() {
    console.log(this.major + "正在讀" + this.major);
  }
}

let mike = new Student("Mike", 25, "Chemistry", 3.5);
mike.sayHi(); // 繼承 Person
mike.study(); // 自己的方法
```

重點：

- `extends` 關鍵字：用來繼承父類別。
- `super()`：在子類別 constructor 中必須呼叫，才能使用 `this`。

---

### 3. `app3.js`：Static 屬性與方法

程式碼展示了如何設定 static 變數與函式：

```javascript
class Student {
  static exampleProperty = 10;

  constructor(name, age, major) {
    this.name = name;
    this.age = age;
    this.major = major;
  }

  sayHi() {
    console.log(this.name + "說你好");
  }

  static exampleFunction() {
    console.log("這是一個沒有特別功能的function");
  }
}
```

使用方式：

```javascript
// Instance 方法
let s = new Student("John", 20, "Math");
s.sayHi(); // John說你好

// Static 方法與屬性
console.log(Student.exampleProperty); // 10
Student.exampleFunction(); // 這是一個沒有特別功能的function
```

重點：

- `static` 屬性與方法只能用 `ClassName` 呼叫，不能用 instance 呼叫。
- 適合放置共用工具或常數設定。

---

## 🚀 學習目標

1. 熟悉 **Class 語法** 與 **constructor function** 的差異。
2. 理解 **繼承 (extends, super)** 的使用方式。
3. 學會使用 **static 屬性與方法**，並理解其用途。
4. 透過範例練習，加深對 **prototype 與 class 的運作機制** 的理解。

---

## ✅ 結論

本專案透過三個檔案與筆記，完整示範了 JavaScript **Class 基本語法、繼承與 static** 的應用，並且保留了與傳統寫法的對照，方便理解與練習。
