let Grace = {
  name: "Grace",
  age: 26,
};

function getAge() {
  return this.age; // 只有這裡的話consoloe.log()會變成 undefined
}

let newFunction = getAge.bind(Grace); // 這樣this.age 就會綁定到 Grace的 age 上面了
console.log(newFunction());

// 1. function.bind(obj) - 將function的this 關鍵字綁定(bind) 為obj
