let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

// [1, 2, 3, 4, 5, 6]
let result = num1 + num2;
console.log(typeof result); //String 這不是我們想要的結果

// 做法1
let result1 = num1.concat(num2);
console.log(result1);
