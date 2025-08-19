function hello() {
  console.log("hello....");
  hello();
}

hello();

// 在程式設計中,如果有一個function執行自己這個function
// 這種情況被稱為遞迴(recursion)
// 就很容易發生stack overflow
