let str = "Wilson";

console.log(str.length); //6個字
console.log(str[0]); //第一個字是w
console.log(str[str.length - 1]); //可以得到最後一個字

console.log(str.slice(3)); //切3開始到後面到底 son
console.log(str.slice(0, 3)); //切到3不含3 Wil

console.log(str.indexOf("W")); //0 第一位

let sentence = "Today is a good day";
//假設我想把他們分開拆出
let result = sentence.split(" "); //遇到空白就切一刀
console.log(result); //這樣就把他們都拆開來了

console.log(sentence.startsWith("Today")); //true 以Today作為開頭,大小寫敏感

console.log(sentence.includes("Today")); //true 包含Today字串

console.log(sentence.charCodeAt(0)); //84 在utf16裡面顯示
