let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

//parameter1 是要控制的對象
//parameter2 是duration
//parameter3 是控制對象的原始狀態
//parameter4 是控制對象的動畫結束的狀態
//parameter5 提早幾秒
time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 }); //從1到0代表整個畫面消失在眼前顯示我們的網站

window.setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500); //1 + 1.2 + 0.3 秒 總花費動畫時間長度
//這樣就可以把整個動畫遮罩隱藏起來

//我們想要禁止使用者用Enter鍵 這樣可以預防他們誤觸發送資料給後台
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//垃圾桶icon的button我們也想要防止使用者發送(防止form內部的button交出表單)
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//想要讓最後一個選擇成績的地方 可以對應選擇的成績改變顏色
//(選擇select內的option之後,要改變相對應的顏色)

let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA(); //在成績發生變化的時候要去設置監聽
    changeColor(e.target); //e.target就是<select>
  });
});

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "green";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "gray";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length; //每一個橫排都是一個formLength
  let credits = document.querySelectorAll(".class-credit"); //學分數
  let selects = document.querySelectorAll(".select"); //成績
  //接著來計算gpa
  let sum = 0; // GPA計算用分子
  let creditSum = 0; // GPA計算用分母

  for (let i = 0; i < credits.length; i++) {
    creditSum += credits[i].valuesAsNumber; //從f12找來的對應select成績屬性
  }
}
