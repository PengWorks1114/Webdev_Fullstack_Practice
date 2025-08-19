let Chris = {
  name: "Chris",
  sayHi() {
    console.log(this.name + "說你好");
    // 這裡的this是在下面這Chris.sayHi()被執行前的 execution context就會創建這個this關鍵字
    // 這個this關鍵字就是指正在執行sayHi這個function的物件, 這個物件就是Chris, 然後他有一個.name的屬性
  },
};

Chris.sayHi();
