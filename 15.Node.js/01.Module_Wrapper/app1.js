console.log("這是app1.js文件");

// (function(exports, require, module, _filename, _dirname) {
//     console.log("這是app1.js文件");
// })(); // IIFE 實際在執行的時候應該會長這個樣子

require("./app2"); // 我想要連接到app2
