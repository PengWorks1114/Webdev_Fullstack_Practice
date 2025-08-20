let chris = {
  name: "Chris",
  sayHi() {
    console.log("你好");
  },
};

let mike = {
  __proto__: chris, // Chris
};

console.log(mike.name);
mike.sayHi(); // 你好

// Inheritance and the Prototype Chain:
// 在JS中,美個物件都有一個private attribute叫做__proto__。
// __proto__屬性存放的值是另一個物件。若物件A的__proto__屬性的值是設定成另一個物件B,
// 則物件A就繼承了物件B的所有attributes以及methods。
