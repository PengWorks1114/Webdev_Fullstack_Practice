function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

console.log(Person.prototype);

let chris = new Person("Chris", 27); // chris.__proto__ => Person.prototype
let mike = new Person("Mike", 26); // mile.__proto__ => Person.prototype
console.log(chiris.__proto__ == Person.prototype); // true
console.log(chris.sayHi == mike.sayHi); //false

Person.prototype.hello = function () {
  console.log(this.name + "說哈囉");
};

chris.hello(); //說哈囉 ; 是可以執行的 他的proto屬性有去繼承Person的prototype內部的method

console.log(chris.hello == mike.hello); // true **最重要的** 因為他是設置在Person()prototype裡面的

// Object-Oriented Programming
