for (let i = 0; i < 11; i++) {
  console.log(i);
}

console.log("forloop執行完畢");

// while ("true") {
//   console.log("這個程式碼正在被執行...")
// };
//無限迴圈

// 正確用法
// 宣告一個計數器
let i = 0;

while (i < 10) {
  console.log(i);
  i++; //這一步最重要,少了這裡他還是永遠會是0,就會變成無限迴圈
}

let k = 0;

do {
  console.log(k);
  k++;
} while (k < 10);
