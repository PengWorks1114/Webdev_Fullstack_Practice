// hoisting 會把下面的拉上來
// function hello() {...}
// var x;
// let y;
// const z;
//但是要小心, 這個功能只對function declaration 有用

var x = 5;

hello();

function hello() {
  console.log("hello");
}

let y = 10;
const z = 6;

//這樣就不行 因為後面還沒有initialize
myFunction();
let myFunction = () => {
  console.log("this is my function");
};
