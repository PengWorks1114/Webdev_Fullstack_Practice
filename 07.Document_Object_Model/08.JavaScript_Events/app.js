let button = document.querySelector("button");

button.addEventListener("click", (e) => {
  console.log(e.target); //e.target指這個事件最初所發生的對象是誰
});

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
});
