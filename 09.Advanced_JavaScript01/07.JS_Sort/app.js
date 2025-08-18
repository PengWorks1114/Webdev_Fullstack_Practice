let myName = "Grace";
myName.toUpperCase(); // "GRACE"
console.log(myName); // Grace , 上面那行要改成存到某個值才可以return全部大寫

let myArr = [1, 5, 3, 2, 4, 7, 8, 0];
myArr.sort(); // 就地排序
console.log(myArr); // myArr的值已經被永久改變了

// 如果我希望保留未經過排序的arr的話,先製作一個複製品
let mySortedArr = [...myArr];
mySortedArr.sort();
console.log(mySortedArr); // 一個由小到大排序的arr 並且也保留遠本的
console.log(mySortedArr.reverse()); // 一個由大到小排序的arr
