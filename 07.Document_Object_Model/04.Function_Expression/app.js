let addition = function (a, b) {
  return a + b;
}; //先做一個沒有名稱的fun再把它放到一個變數裡面;這樣更有彈性

console.log(addition(10, 5));

let Wilson = {
  name: "Wilson",
  greet() {
    console.log(this.name + "打招呼");
  },
  walk: function () {
    console.log(this.name + "正在走路");
  },
};

Wilson.greet();
Wilson.walk();

//first parameter event?
//事件發生後,我們要執行的function?

function react() {
  alert("有人正在點擊畫面");
}

// addEventListener本身是一個higher order function
// recat是一個callback function
window.addEventListener("click", react);

//也等於下面

// window.addEventListener("click", function () {
//     alert("有人正在點擊畫面");
// });
// //Function expression

//好處:
//1. 如果我們在程式碼中有許多callback function都是採用function declaration
//命名變數的時候,都需要避開function declaration
//2. callback function名稱其實沒有意義
//3. 程式碼變乾淨
