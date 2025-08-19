// Block Scope 注意 let const 有block scope
// 最常見在兩種: loop, if statement

if (true) {
  let x = 10;
} // 可訪問範圍只有在這個block中

console.log(x);
//錯誤 x is not defined

for (let i = 0; i < 20; i++) {
  //空轉二十次
}

console.log(i); // 錯誤 不可訪問i 不是在括號範圍中

if (true) {
  var y = 10;
}

console.log(y); // varで宣言した変数は全領域利用できる
var z = 100;
// var: redeclaration, reassignment できる
for (var z = 0; x < 10; x++) {}
console.log(z); // 10

// varを利用しない　色々な状況があるから
