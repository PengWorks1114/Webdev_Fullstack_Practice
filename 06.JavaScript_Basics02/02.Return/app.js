//circle fun 的參數為一個半徑 功能是算出元的面積
function circle(r) {
  return 3.14 * r * r;
  //console.log("執行完畢"); 在return下方的程式碼不會執行
}
console.log(circle(10));

//練習題 攝氏溫度轉換華氏溫度 度C * 1.8 + 32

function convertor(c) {
  return c * 1.8 + 32;
}

let input = Number(prompt("請輸入溫度: (攝氏)"));
let result = convertor(input);
alert("換算後的溫度為: " + result + "f 華氏溫度");
