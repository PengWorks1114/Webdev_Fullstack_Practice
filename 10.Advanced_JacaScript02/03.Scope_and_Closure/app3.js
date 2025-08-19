function sayHi() {
  console.log("hello");

  // function declaration もfunction scopeをもってる
  function sayHi2() {
    console.log("hello2");
  }
}

sayHi2(); // error, function scope の範囲以外
