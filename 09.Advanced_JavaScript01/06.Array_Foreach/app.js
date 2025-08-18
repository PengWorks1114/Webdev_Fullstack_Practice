let arr = [1, 2, 3, 4, 5, 6, 7];

let newArr = arr.map((i) => i ** 2);
console.log(newArr); // 1, 4, 9..., 49

let newArr2 = arr.forEach((i) => {
  console.log(i ** 2);
});
console.log(newArr2); // 1 4 9...49 undefined
