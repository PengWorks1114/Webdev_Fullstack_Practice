const http = require("http");
const fs = require("fs");

// request object, response object
const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  if (req.url == "/") {
    res.write("歡迎來到我的網頁");
    res.end();
  } else if (req.url == "/anotherPage") {
    res.write("這是另一個頁面");
    res.end();
  } else if (req.url == "/myfile") {
    fs.readFile("myfile.html", (e, data) => {
      if (e) {
        res.write("存取html文件錯誤");
        res.end();
      } else {
        res.write(data); //把我們在myFile裡面讀取到的data都寄出去
        res.end();
      }
    });
  } else {
    res.write("不存在的頁面");
    res.end();
  }
}); // 用http.createServer()這個method他就會去創建一個網頁伺服器
// 在裡面要給一個 call back function , 這個function會自動被node.js 執行 **裡面要有兩個參數
// call function with 2 parameters

server.listen(3000, () => {
  console.log("伺服器正在port3000上運行");
});
// 這個method會去監聽所有來自網頁端上面的請求
// (port, 要給他執行的arrow function)
