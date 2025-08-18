function sum(...theArgs) {
  console.log(theArgs); // [1,2,3,4,5,6,7]
  for (let i = 0; i < theArgs.length; i++) {
    total += theArgs[i];
  }
  return total;
}

sum(1, 2, 3, 4, 5, 6, 7);
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); //55
console.log(sum(1, 2, 3)); //6 只有三項也可以計算
//這種語法就是Rest Parameters
