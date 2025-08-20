let Grace = {
  name: "Grace",
  age: 26,
};

function getAge(country, height) {
  console.log(this.name + "來自" + country + ", 身高為" + height + "cm");
  return this.age;
}

getAge.call(Grace, "台灣", 160); // Grace 會被放到第一個參數 (this,name 不是this.age 我們可以自己決定)
// 2. function.call(obj, arg1, /* ..,*/ argN) - 使用給定的obj當作this值來調用函數。arg1, /* ..,*/ argN為optional.

getAge.call(Grace, ["台灣", 160]);
// 3. function.apply(obj, argsArray) - 與call 相同, 但 Argument 是使用 Argument array.
