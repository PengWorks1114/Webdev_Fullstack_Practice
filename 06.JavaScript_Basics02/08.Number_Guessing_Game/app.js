// import(i);
// if ((i = answer)) {
//   alert("恭喜您答對!");
//   return;
// } else if (i > amswer) {
//   alert("答案為: " + "0 到 " + i + "之間");
// } else if (i < answer) {
//   alert("答案為: " + i + "到 " + "100之間");
// }我的答案是錯的 下面是對的寫法

let amswer = Math.floor(Math.random() * 100);
let n1 = 0;
let m2 = 99;

while (true) {
  let guess = Number(prompt("請輸入你的猜測(" + n1 + "~" + n2 + ")"));

  if (guess < n1 || guess > n2) {
    alert("無效猜測.請重新猜測一個數字");
    continue;
  } //無效猜測的處理,輸入超過範圍的數字

  if (guess == answer) {
    alert("您猜對了!秘密數字是" + answer);
    break;
  } else if (guess < answer) {
    n1 = guess;
  } else if (guess > answer) {
    n2 = guess;
  }
}
