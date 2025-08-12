# 🧩 JavaScript — Object 基礎與 Method 使用

## 📌 專案簡介

此專案示範了 JavaScript 物件（Object）的基本概念與應用，包括：

- 物件屬性（Properties）與方法（Methods）
- 使用 **dot notation** 與 **bracket notation** 存取屬性
- 方法中的 `this` 關鍵字
- 陣列與函式作為特殊類型物件的特性

---

## 📚 筆記整理（來自 `note.txt`）

1. **物件的組成**

   - 每個 JS 物件都有 **properties**（屬性）與 **methods**（方法）
   - 屬性以 **key-value pair**（鍵值對）儲存
   - 屬性值為函式時，稱為 **方法（method）**

2. **屬性存取方式**

   - Dot notation：`object.key`
   - Bracket notation：`object["key"]`

3. **this 關鍵字**

   - 在方法中，`this` 指向調用該方法的物件
   - 在獨立函式中，`this` 預設指向 `window`（瀏覽器環境）

4. **特殊物件類型**

   - `Array` 與 `Function` 皆屬於特殊的物件型別
   - `typeof` 陣列會回傳 `"object"`，`typeof` 函式會回傳 `"function"`

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # 核心程式碼（物件與方法示範）
└── note.txt     # 筆記，整理物件基礎概念
```

---

## 💻 程式碼解析

### 1️⃣ 建立物件與屬性 / 方法

```javascript
let Wilson = {
  first_name: "Wilson",
  last_name: "Ren",
  age: 26,
  is_married: true,
  spouse: "Grace",

  sayHi() {
    console.log("Wilson says hi");
  },
  walk() {
    console.log("Wilson is walking");
  },
  speak(words) {
    console.log("Wilson says " + words);
  },
  sayThis() {
    console.log(this);
  },
};
```

- `first_name`、`last_name`… → **properties**
- `sayHi`、`walk`、`speak`、`sayThis` → **methods**

---

### 2️⃣ 存取屬性

```javascript
console.log(Wilson.first_name); // Dot notation
console.log(Wilson["first_name"]); // Bracket notation
```

---

### 3️⃣ 呼叫方法與 `this`

```javascript
Wilson.sayHi(); // 輸出：Wilson says hi
Wilson.speak("今天心情不錯"); // 傳遞參數
Wilson.sayThis(); // 輸出整個物件本身
```

- 在 `sayThis` 中，`this` 指向 `Wilson` 物件

---

### 4️⃣ 陣列與函式的型別檢查

```javascript
let arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "object"

function hello() {
  console.log("hello world");
}
console.log(typeof hello); // "function"
```

- 陣列是特殊的物件 → 回傳 `"object"`
- 函式為特殊類型 → 回傳 `"function"`

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 開啟開發者工具（F12 → Console）觀察輸出結果

---

## 🎯 學習重點

- 物件的屬性與方法定義
- `this` 在不同情況下的指向
- Dot / Bracket notation 差異
- 陣列與函式作為特殊物件的型別辨識
