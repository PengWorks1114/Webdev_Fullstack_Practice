function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

// 他本身就有prototype
console.log(Person.prototype); // {} 對於Person來說本身自己帶有prototype的屬性;prototype的屬性本身是空物件
// ***重要***
// 每個constructor function都可以設定prototype屬性
// (Prototype屬性本質上來說,就是一個empty object)。
// 所有從constructor function製作出來的物件,
// 其 __proto__屬性都是自動指向constructor function的prototype屬性。
// ***重要***

let chris = new Person("Chris", 27); // chris.__proto__ => Person.prototype
let mike = new Person("Mike", 26); // mile.__proto__ => Person.prototype
console.log(chiris.__proto__ == Person.prototype); // true
// 例如, constructor function A製作的物件obj,
// 如果檢查obj.__proto__ == A.prototype,
// 可以看到true。因為obj.__proto__以及A.prototype都是reference data type
console.log(chris.sayHi == mike.sayHi); //false
// 因為所有從constructor function製作出來的物件,
// 其__proto___屬性都是自動指向constructor function的prototype屬性,
// 所物件都會自動繼承所有在constructor function的prototype屬性內定義的 attributes and methods.
// 像這樣子從constructor function 的 prototype 屬性繼承的attributes and methods的原理,
// 就叫做"Prototype Inheritance"

// 我們可以根據這個特性,來節省記憶體空間.
// 若從constructor function製作出的每個物件都有相似的methods,
// 我們可以把methods全部移動到constructor function 屬性內部,
// 而不是在個別的物件中重複定義methods.
