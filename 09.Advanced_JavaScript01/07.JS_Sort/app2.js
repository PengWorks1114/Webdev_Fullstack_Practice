let num = [9, 4, 3, 5, 6, 1, 0];
num.sort((a, b) => {
  return a - b;
});

console.log(num); // return 小到大排序結果

let num2 = [9, 4, 3, 5, 6, 1, 0];
num.sort((a, b) => {
  return b - a;
});

console.log(num2); // return 大到小排序結果
