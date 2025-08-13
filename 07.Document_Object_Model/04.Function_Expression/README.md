# ⚙️ JavaScript — Function Expression 與 Callback Function

## 📌 專案簡介

此專案示範了：

- **Function Expression（函式表達式）** 的寫法與特性
- 在物件中定義方法
- **Callback Function（回呼函式）** 與 `addEventListener` 的應用
- **this** 關鍵字在物件方法中的使用

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ 定義函式的兩種方式

1. **Function Declaration（函式宣告）**

   ```javascript
   function name(params) {
     statements;
   }
   ```

2. **Function Expression（函式表達式）**

   ```javascript
   let addition = function (a, b) {
     return a + b;
   };
   ```

   - 可省略名稱以建立匿名函式
   - 適合用於 callback function
   - 更有彈性，可作為變數傳遞或在運行時決定

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面
├── app.js       # Function expression、物件方法、事件綁定範例
└── note.txt     # 筆記，整理 Function expression 概念
```

---

## 💻 程式碼解析

### 1️⃣ Function Expression 範例

```javascript
let addition = function (a, b) {
  return a + b;
};
console.log(addition(10, 5)); // 15
```

- 使用變數儲存匿名函式
- 呼叫方式與一般函式相同

---

### 2️⃣ 物件中的方法

```javascript
let Wilson = {
  name: "Wilson",
  greet() {
    console.log(this.name + "打招呼");
  },
  walk: function () {
    console.log(this.name + "正在走路");
  },
};
Wilson.greet();
Wilson.walk();
```

- `this` 在方法中指向該物件本身

---

### 3️⃣ Callback Function 與事件監聽

```javascript
function react() {
  alert("有人正在點擊畫面");
}
window.addEventListener("click", react);
```

- `addEventListener` 是 **Higher-Order Function**
- `react` 是作為參數傳入的 **Callback Function**
- 可改用匿名函式：

```javascript
window.addEventListener("click", function () {
  alert("有人正在點擊畫面");
});
```

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 開啟 `index.html`
3. 點擊頁面，觀察彈出訊息

---

## 🎯 學習重點

- **Function Expression** 提供更高彈性，適合 callback
- 在物件方法中使用 **this** 指向該物件
- **事件監聽** 搭配 callback function 控制互動行為
