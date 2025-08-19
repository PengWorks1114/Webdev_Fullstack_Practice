console.log(window); //一定要在瀏覽器中才可以執行 指向window object
//1.創建global object.(例:瀏覽器中的window object, 或Node.js中的global object).
// 2.創建scope.
console.log(this); // 在vscode執行會是{}, 但在瀏覽器執行就會綁訂到global object.
// 3.創建this 關鍵字, 並被綁定至 global object.
