// Static

function Student(name, age, major) {
  this.name = name;
  this.age = age;
  this.major = major;
}

Student.exampleProperty = 10;
Student.exampleFunction = function () {
  console.log("這是一個沒有特別功能的function");
};

Student.prototype.sayHi = function () {
  console.log(this.name + "說你好");
};

// Class寫法改寫

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
