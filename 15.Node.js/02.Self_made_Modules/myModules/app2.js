function morning() {
  console.log("早安你好");
}

function evening() {
  console.log("晚安你好");
}

module.exports.morning = morning;
exports.evening = evening; // 可以把module去掉
