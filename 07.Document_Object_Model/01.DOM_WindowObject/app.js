function sayhi() {
  alert("3秒過了...");
}

let interval = window.setInterval(sayhi, 3000); //每3秒跳出對話框一次

window.clearInterval(interval);

let Grace = {
  name: "Grace",
  age: 26,
};

let Wilson = {
  name: "Wilson",
  age: 26,
  spouse: Grace, //他的spouse指向Grace物件
};

console.log(Wilson.spouse.age); //26, Wilson的屬性spouse是一個物件,他又指向Grace這個物件的age屬性
// 物件導向程式概念: 一個Object可以是另一個Object的attribute.例如,人的配偶也是一個人.
