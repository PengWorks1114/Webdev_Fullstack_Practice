let button = document.querySelector("button");

button.addEventListener("click", () => {
  let form = document.querySelector("form");
  form.reset(); //form自己有的method
}); //只要按下這個button,就會自動執行他的callback fun

//簡單的繼承概念
