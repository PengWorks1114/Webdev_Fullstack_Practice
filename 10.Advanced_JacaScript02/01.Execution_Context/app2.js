let a = 3;

function area(s) {
  return s * s;
}

// window.alert();
let result = area(a);
console.log(result);

// function area(s) {
//   return s * s;
// } // 我如果把上面的程式碼移動到這裡也不會有錯誤 原因參照下面執行順序

// 執行步驟:
// 1. creation phase
// 1.1 global object 製作完成
// 1.2 建立scope (忽略)
// 1.3 this keyword
// 1.4 a undefined, result undefined, area is a function

// 2. execution phase(執行階段)
// a = 3
// result = 9
