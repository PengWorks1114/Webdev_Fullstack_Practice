# JavaScript 進階 Array Methods

---

## 說明整理（依 `note.txt`）

### 常見方法

- **`arr.map(callbackFn)`**
  建立新陣列，每個元素為原陣列元素執行 `callbackFn` 後的結果。

- **`arr.find(callbackFn)`**
  回傳第一個使 `callbackFn` 回傳 `true` 的元素；若無符合條件則回傳 `undefined`。

- **`arr.filter(callbackFn)`**
  過濾所有符合條件的元素，回傳新陣列（淺拷貝）。

- **`arr.some(callbackFn)`**
  判斷是否至少有一個元素符合條件，回傳布林值。

- **`arr.every(callbackFn)`**
  判斷是否所有元素都符合條件，回傳布林值。

---

## 專案結構

```
.
├── app.js   （map 範例）
├── app2.js  （find 與 filter 範例）
└── note.txt
```

---

## 程式碼與解說

### 1) `map`（`app.js`）

```js
let languages = ["Java", "C++", "Python", "JavaScript"];

// 將每個元素轉大寫
let result = languages.map(function (lang) {
  return lang.toUpperCase();
});
console.log(result); // ["JAVA", "C++", "PYTHON", "JAVASCRIPT"]

// 簡化寫法（箭頭函式）
let result2 = languages.map((lang) => lang.toUpperCase());
console.log(result2);

// 若 callbackFn 沒有 return，回傳的陣列元素將是 undefined
let result3 = languages.map((lang) => {
  lang.toUpperCase();
});
console.log(result3); // [undefined, undefined, undefined, undefined]

// map 也能處理物件陣列
const languages2 = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

let result4 = languages2.map((lang) => lang.name.toUpperCase());
console.log(result4); // ["PYTHON", "JAVA", "C++", "PHP", "JS"]
```

---

### 2) `find` 與 `filter`（`app2.js`）

```js
const languages = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

// find：回傳第一個符合條件的元素
let result = languages.find((lang) => lang.popularity > 9.6);
console.log(result); // { name: "Python", ... }

// 沒有符合時回傳 undefined
let result2 = languages.find((lang) => lang.popularity > 9.9);
console.log(result2); // undefined

// filter：回傳所有符合條件的元素
let result3 = languages.filter((lang) => lang.rating >= 9.2);
console.log(result3); // Python, Java, C++
```

---

## 實務要點

- **map**：適合做資料轉換（如字串大小寫、物件取值）。
- **find**：取得第一個符合條件的元素即可時使用。
- **filter**：需要取得所有符合條件元素。
- **some / every**：用於條件驗證（是否至少一個 / 是否全部符合）。
