//addEventListener(event, callbackFn)
let myButton = document.querySelector("#my-btn");

myButton.addEventListener("click", () => {
  alert("你點了botton");
});

// appendChild(element)
let body = document.querySelector("body");

// document object
let myH1 = document.createElement("h1");
// innerHTML, innerText
myH1.innerText = "這是我的h1";
// myH1.innerHTML = "<a>這是我的h1</a>";
body.appendChild(myH1);

console.log(body.children); //第一層
console.log(body.children[0].children[0]); //下一層

//parentElement
let firstP = document.querySelector("p");

console.log(firstP.parentElement.parentElement);
