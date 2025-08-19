// constructor function
// 在JavaScript當中 constructor function以大寫開頭

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

let chris = new Person("Chris", 27);
let mike = new Person("Mike", 26);
let grace = new Person("Grace", 25);
grace.sayHi();

console.log(chris);
console.log(mike);
console.log(grace);
