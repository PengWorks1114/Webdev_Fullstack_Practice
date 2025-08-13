for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    console.log(j);
    if (j == 3) {
      break;
    }
  }
}
//0, 1, 2, 3, 0, 1, 2, 3....共100次0123循環,因為內圈在3的時候就會被break打斷

for (let k = 0; k < 10; k++) {
  if (k == 3) {
    continue;
  }
  console.log(k);
}
//0 , 1, 2, 4, 5, 6.....
//3會被跳過因為它符合continue所在迴圈的條件
//所以當運作到他的時候他會直接執行下次回圈

let arr = ["Mike", "Grace", "Jason", "Jared"];
//            0        1        2         3
//arr.length = 4

// console.log(arr[0]+ "is my friend.");
// console.log(arr[1]+ "is my friend.");
// console.log(arr[2]+ "is my friend.");
// console.log(arr[3]+ "is my friend.");

for (let p = 0; p < arr.length; p++) {
  console.log(arr[p] + " is my friend.");
}
