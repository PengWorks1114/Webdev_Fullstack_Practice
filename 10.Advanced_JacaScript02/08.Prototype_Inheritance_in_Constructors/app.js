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
  Person.call(this, name, age); // 用this指定 將Student的 name, age 丟到 Person() 裡面去執行
  this.major = major;
  this.grade = grade;
}

let mike = new Student("Mike", 26, "Chemistry", 3.5);
console.log(mike); // Student { name: 'Mike', age: 26, major: 'Chemistry', grade: 3.5 }
mike.sayHi(); //ReferenceError: mike is not defined
// 這是因為Sturdent只有去用到Psrson,call 來去讓Student 去擁有 name, age 這兩個屬性

// 1. 在 constructor function A 的內部執行B.call(this, args1, ..., argsN)。我們可以透過這段程式碼直接將 B 所設定的屬性套給 A 做使用。
