console.log("這是app1.js文件");

// (function(exports, require, module, _filename, _dirname) {
//     console.log("這是app1.js文件");
// })(); // IIFE 實際在執行的時候應該會長這個樣子

require("./app2"); // 我想要連接到app2 他會被包在一個 module wrapper 裡面

let name = 30; // global variable
console.log(name);

// 1.讓使用這個module的文件中,所使用的global variable不會被module內部的變數影響.
// 2.讓module內部所定義的global variable變成function scope.