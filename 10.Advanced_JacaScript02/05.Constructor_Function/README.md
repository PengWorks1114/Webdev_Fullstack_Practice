# JavaScript Constructor Function 與 this 關鍵字

本專案示範 **Constructor Function** 與 **this 關鍵字** 在 JavaScript 中的運作方式，並提供程式碼範例與筆記整理。

---

## 📂 檔案結構

```

├── constructorfun.js
├── this.js
└── note.txt

```

---

## 📘 說明筆記整理（來源：`note.txt`）

### Constructor Function

- 當函式搭配 `new` 關鍵字呼叫時，會被視為 **Constructor Function (建構函式)**:contentReference[oaicite:0]{index=0}。
- `this` 關鍵字會指向一個新建立的物件，並自動 return 該物件。
- 可用來大量製作屬性 (attributes) 與方法 (methods) 相似的物件，類似於 Java 的 `constructor`。
- 每個物件實例都是獨立的，會分別佔據記憶體位置。

### this 關鍵字

- `this` 的指向取決於函式的呼叫方式，而非函式定義的位置。
- 當方法透過物件呼叫時，`this` 指向該物件:contentReference[oaicite:1]{index=1}。
- 當在 Constructor Function 內使用時，`this` 指向新建立的物件。

---

## 📄 程式碼內容與解說

### `constructorfun.js`

```javascript
// constructor function
// 在 JavaScript 當中 constructor function 以大寫開頭

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function () {
    console.log(this.name + "說你好");
  };
}

let chris = new Person("Chris", 27);
let mike = new Person("Mike", 26);
let grace = new Person("Grace", 25);
grace.sayHi();

console.log(chris);
console.log(mike);
console.log(grace);
```

👉 說明：

- `Person` 是一個 Constructor Function，搭配 `new` 建立物件。
- `this` 在此指向新物件 (`chris`, `mike`, `grace`)。
- 每個物件擁有獨立的屬性與方法。

---

### `this.js`

```javascript
let Chris = {
  name: "Chris",
  sayHi() {
    console.log(this.name + "說你好");
    // this 會在 Chris.sayHi() 呼叫時綁定
  },
};

Chris.sayHi();
```

👉 說明：

- 此處的 `this` 指向物件 `Chris`。
- 在 `Chris.sayHi()` 執行時，`this` 代表呼叫該方法的物件。
- 若函式被抽離後獨立呼叫，`this` 可能會變成 `undefined` 或指向全域物件 (取決於嚴格模式)。

---

## 🚀 學習重點

1. **Constructor Function**

   - 搭配 `new` 使用，建立新物件。
   - `this` 指向新建立的物件並自動回傳。
   - 每個實例是獨立的。

2. **this 關鍵字**

   - 決定於函式的呼叫方式。
   - 物件方法中，`this` 指向該物件。
   - 建構函式中，`this` 指向新物件。

3. **最佳實務**

   - Constructor Function 命名需大寫開頭 (慣例)。
   - 儘量避免過度依賴 `this`，建議搭配箭頭函式與 `bind` 處理。

---

## 🛠️ 執行方式

使用 Node.js 或瀏覽器 Console 執行：

```bash
node constructorfun.js
node this.js
```

---

## 📚 延伸閱讀

- [MDN - this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [MDN - Constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)

```

```
