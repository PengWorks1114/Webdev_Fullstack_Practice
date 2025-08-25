// // Function Person()
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype.sayHi = function () {
//   console.log(this.name, "說你好");
// };

// // Function Student()
// function Student(name, age, major, grade) {
//   Person.call(this, name, age);
//   this.major = major;
//   this.grade = grade;
// }

// Student.prototype = Object.create(Person.prototype); // 要跟下面注意順序 不然會複寫!

// Student.prototype.study = function () {
//   console.log(this.name + "正就讀" + this.major);
// }; // 要跟上面注意順序 不然會複寫!

// // 設定 A.prototype = Object.created(B.prototype)。
// // Object.create() 可以創建一個全新的物件。
// // 這樣一來, 所有在 B.prototype 內部的 methods 都可以套用給 A.prototype。
// // 所有 A.prototype 所設定的額外 methods 都需要寫在 A.prototype = Object.create(B.prototype) 這行程式碼的下方。

// let mike = new Student("Mike", 26, "Chemistry", 3.5);
// mike.sayHi(); // 可執行 因為Student.prototype = Object.create(Person.prototype);
// mike.study(); // 可執行

function Student(name, age, major) {
  this.name = name;
  this.age = age;
  this.major = major;
}

Student.prototype.sayHi = function () {
  console.log(this.name + "說你好");
};

// 把它改成Class語法撰寫:

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
