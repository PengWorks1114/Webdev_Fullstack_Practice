# JavaScript `for...of` vs `for...in`

---

## 說明整理（依 `note.txt`）

### `for...of`

- 用於 **可迭代對象 (iterable)**：`string`、`array`、`array-like object`（如 `NodeList`、`HTMLCollection`）、`typedArray`、`Map`、`Set` 以及自定義 iterable。
- 語法：

  ```js
  for (element of iterable) {
    // element 為每次迭代的值
  }
  ```

- **注意**：一般物件（`object`）不是 iterable，不能直接用 `for...of`。

### `for...in`

- 用於 **物件的可枚舉屬性 (enumerable properties)**。
- 對於不同資料型態：

  - **object** → 迭代 keys。
  - **array** → 迭代索引值（indices）。
  - **string** → 迭代索引值。

---

## 專案結構

```
.
├── app.js
└── note.txt
```

---

## 程式碼與解說（`app.js`）

```js
let numbers = [10, 20, 30];

// for loop
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]); // 10, 20, 30
}

// forEach
numbers.forEach((n) => {
  console.log(n); // 10, 20, 30
});

// for...of：直接取值
for (let n of numbers) {
  console.log(n); // 10, 20, 30
}

// for...of 也能跑字串
let myString = "Grace";
for (let i of myString) {
  console.log(i); // G r a c e
}

// for...in：取 key (屬性名 / 索引)
let Wilson = {
  name: "Wilson Ren",
  age: 26,
};

for (let property in Wilson) {
  console.log(property); // name, age
  console.log(Wilson.property); // undefined (取不到，因為 property 是字串)
  console.log(Wilson[property]); // "Wilson Ren", 26
}

let num = [100, 44, 22];
for (let i in num) {
  console.log(i); // 0, 1, 2
  console.log(num[i]); // 100, 44, 22
}
```

---

## 實務要點

- **遍歷陣列值**：優先用 `for...of` 或 `forEach`。
- **遍歷物件屬性**：用 `for...in`，搭配 bracket notation (`obj[key]`) 取得值。
- **遍歷字串**：用 `for...of` 取字元，用 `for...in` 則會取索引。
