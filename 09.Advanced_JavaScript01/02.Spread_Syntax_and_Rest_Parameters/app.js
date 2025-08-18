let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

// [1, 2, 3, 4, 5, 6]
let result = num1 + num2;
console.log(typeof result); //String 這不是我們想要的結果

// 做法
let result1 = num1.concat(num2);
console.log(result1);


const parts = ["肩膀", "膝蓋"];
const otherParts = ["頭", ...parts, "身體", "腳"];
console.log(otherParts); //合在一起

// 複製array
// 不是 copy by reference
const arr = [1, 2, 3];
const arr2 = [...arr];

arr2.push(4);

console.log(arr); //123
console.log(arr2); //1234

//array concat

let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];

console.log([...arr, ...arr2]);

