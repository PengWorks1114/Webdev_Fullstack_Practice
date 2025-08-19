//call stack 觸發機制

function f1() {
  console.log("開始執行f1...");
  f2();
  console.log("結束執行f1...");
}

function f2() {
  console.log("開始執行f2...");
  console.log("結束執行f2...");
}

f1();

// 其機制為:
// 1. 當執行函式f1時, JS引擎將其添加到call stack中, 然後開始執行該函式.
// 2. 若該函式內部又調用其他函示f2, 則將函式f2添加到 call stack中, 然後開始執行該函式.
// 3. 當f2執行完畢後, JS引擎將其從call stack 中取出, 並且從f1停止的位置繼續執行.
// 4. 如果call stack 堆疊過高, 高出記憶體分配給call stack的最大空間, 則導致 "stack overflow"的問題.
