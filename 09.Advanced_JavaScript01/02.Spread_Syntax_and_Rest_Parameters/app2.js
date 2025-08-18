function sum(x, y, z) {
  return x + y + z;
}

let arr = [1, 2, 3];

//舊方法
console.log(sum(arr[0], arr[1], arr[2]));
//用擴展
console.log(sum(...arr)); // 他就會自動套入

function sum2(a, b, c, d, e) {
  return a + b + c + d + e;
}

let arr2 = [1, 2, 3];
//部分擴展
console.log(sum(10, ...arr, 5)); // [10, 1, 2, 3, 5]
