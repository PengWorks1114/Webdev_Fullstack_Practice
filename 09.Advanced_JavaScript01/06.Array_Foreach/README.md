# JavaScript `map()` vs `forEach()`

---

## 說明整理（依 `note.txt`）

### `forEach()`

- 用途：遍歷陣列，對每個元素執行一次 callback。
- **回傳值**：`undefined`。
- 適合只做副作用操作（如 `console.log`、DOM 操作）。

### `map()`

- 用途：建立新陣列，元素為 callback 執行後的結果。
- **回傳值**：新陣列。
- 適合需要轉換並回傳新資料的場景。

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
let arr = [1, 2, 3, 4, 5, 6, 7];

// 使用 map：回傳平方值的新陣列
let newArr = arr.map((i) => i ** 2);
console.log(newArr); // [1, 4, 9, 16, 25, 36, 49]

// 使用 forEach：僅輸出平方值，不產生新陣列
let newArr2 = arr.forEach((i) => {
  console.log(i ** 2);
});
console.log(newArr2); // undefined
```

### 解釋

1. `map()`：將 `[1,2,...,7]` 轉換成平方值陣列，回傳 `[1,4,...,49]`。
2. `forEach()`：逐一輸出平方值，但回傳值永遠是 `undefined`，因此 `newArr2` 為 `undefined`。

---

## 實務要點

- **需要結果** → 用 `map()`。
- **只做副作用**（例如 console.log、修改外部變數）→ 用 `forEach()`。
