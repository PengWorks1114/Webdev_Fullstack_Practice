let c = 100;

function add(a, b) {
  // argument object a = 3, b = 4
  return a + b + c; // 在這裡他不知道c是什麼東西 所以現在裡面找 接著往外找 把外層的c也包近來
} // 這樣子一連串操作的組合就叫做 closure

add(3, 4);

// Closure的規則是:
// 1.從Argument Object 以及 local variable 去尋找.
// 2.若1找不到, 則從記憶體被分配給函數的位置開始尋找.
// 3.若在目前的 execution context 找不到, 就繼續往外層,往全域一層一層的去找.

// 狀況2  的例子 在記憶體
let myName = "小華";

function sayHi() {
  let myName = "小明";
  console.log(myName + "說你好"); // 小明說你好
  sayHi2(); // 小明? 小華? => 小華 因為我們往下看sayHi2 在這個sayHi(){}scope外頭 且hoisting的時候 在最外面定義了小華
}

function sayHi2() {
  console.log(myName + "說你好");
}
sayHi();
