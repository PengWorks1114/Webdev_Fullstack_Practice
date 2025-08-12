let Wilson = {
  //properties (key-value pair), methods
  first_name: "Wilson",
  last_name: "Ren",
  age: 26,
  is_married: true,
  spouse: "Grace",

  sayHi() {
    console.log("Wilson says hi");
  },
  walk() {
    console.log("Wilson is walking");
  },
  speak(words) {
    console.log("Wilson says " + words);
  },
  sayThis() {
    console.log(this);
  },
};

console.log(Wilson.first_name); //獲取物件 方法一
console.log(Wilson[first_name]); //方法二

Wilson.sayHi();
Wilson.speak("今天心情不錯");

Wilson.sayThis(this.first_name + "say hi"); //指的是Wilson這個物件

let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); //不行直接檢查 會顯示object

function hello() {
  console.log("hello world");
}

console.log(typeof hello); //function

//function, array are both special types of object
