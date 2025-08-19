// global scope
let myName = "Chris"; // 全域變數

function sayHi() {
  sessionStorage(myName + "說你好");

  function sayHi2() {
    console.log(myName + "說你好2"); // 在裡面還是抓的到外面的全域變數
  }

  sayHi2();
}

say();

// 不論variable是用 var let const去宣告 他本身都會有global scope

// Module scope 後端使用 目前略過

// Function scope **
function hello() {
  let myName3 = "Andy"; // Function Scope 只有在這個 Function Scope範圍可以訪問
}

console.log(myName3); // 錯誤
