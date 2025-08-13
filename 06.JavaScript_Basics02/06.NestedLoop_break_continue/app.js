function print100() {
  //一個想印出100次的fun
  for (let i = 1; i <= 100; i++) {
    console.log(i); //1, 2, 3, 4, 5
    if (i == 5) {
      return; //不返回任何東西.return會讓迴圈停在這
    }
  }
}

print100();

for (let k = 0; k < 3; k++) {
  for (let j = 10; j < 15; j++) {
    console.log(j);
  }
}
//k = 0, j = 10, 11, 12, 13, 14
//k = 1, j = 10, 11, 12, 13, 14
//k = 2, j = 10, 11, 12, 13, 14 這就是巢狀迴圈

let counter = 0;

for (let p = 0; p < 100; p++) {
  for (let u = 0; u < 500; u++) {
    counter++;
  }
}
//總共會執行100x500=50000次
console.log(counter); //50000
