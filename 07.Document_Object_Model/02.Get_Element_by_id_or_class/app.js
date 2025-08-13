let myH1 = document.createElement("h1"); //創建一個物件myH1他是對應到h1

console.log(myH1); //<h1>

let first_fond = document.querySelector(".my-p");
console.log(first_fond); //第一個.my-p就會被找到

let found_elements = document.querySelectorAll(".my-p"); //找所有.my-p
//return 長度為4的NodeList
console.log(found_elements);

let hellos = document.getElementsByClassName("hello"); //動態
let helloss = document.querySelectorAll(".hello"); //靜態
console.log(hellos.length); //2
console.log(helloss.length); //2

let body = document.querySelector("body");
let p = document.createElement("p");
p.innerText = "this is a new p";
p.classList.add("hello");
body.appendChild(p);

console.log("改變dom之後...");
console.log(hellos.length); //3
console.log(helloss.length); //2
