let NB = [1, 2, 3, 4, 5, 6];

localStorage.setItem("myNB", JSON.stringify(NB)); //將上面的NB轉成JSON 並存入]

//儲存之後...

let myArr = JSON.parse(localStorage.getItem("myNB"));

myArr.forEach((n) => {
  console.log(n);
});
