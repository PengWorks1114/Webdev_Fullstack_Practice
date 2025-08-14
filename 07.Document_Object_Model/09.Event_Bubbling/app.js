let a = document.querySelector(".a");
let b = document.querySelector(".b");

a.addEventListener("click", () => {
  alert("紅色框的事件監聽器正在被執行");
});

b.addEventListener("click", () => {
  alert("藍色框的事件監聽器正在被執行");
});

//eventbubbling示範
//我按下藍色事件監聽器(child)結束後,紅色也會被執行

//要怎麼避免
b.addEventListener("click", (e) => {
  e.stopPropagation(); //就會執行這裡
  alert("藍色框的事件監聽器正在被執行");
});
