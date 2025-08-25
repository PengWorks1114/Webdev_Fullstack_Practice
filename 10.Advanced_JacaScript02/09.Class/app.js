//Class改寫 練習

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
