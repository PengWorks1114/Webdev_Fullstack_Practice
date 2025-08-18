# Spread Syntax 與 Rest Parameters 教學範例

## 說明整理（依 `note.txt`）

- **Spread Syntax**：在需要零個或多個參數（函式呼叫）或元素（陣列/可迭代物件）處，展開可迭代物件內容，例如：`myFn(a, ...iterable, b)`、`[1, ...iterable, '4', 'five', 6]`。
- **Rest Parameters**：語法與 Spread 近似，但語意相反，用於函式宣告收集剩餘參數並壓成陣列，例如：`function f(a, b, ...theArgs) {}`；`...theArgs` 必須置於參數列最後。

> 提示：`note.txt` 內文多處將 _iterable_ 誤寫為 _interable_，屬拼寫問題，不影響概念理解。

---

## 專案結構

```
.
├── app.js
├── app2.js
├── app3.js
└── note.txt
```

---

## 程式碼與解說

### 1) 陣列合併與 `+` 的陷阱（`app.js`）

```js
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

// 錯誤期待：得到 [1,2,3,4,5,6]
let result = num1 + num2;
console.log(typeof result); // "string"：陣列被轉字串後再字串相加
// 正確作法
let result1 = num1.concat(num2); // [1,2,3,4,5,6]
```

- `+` 會觸發兩邊陣列的 `toString()`，結果為字串相加；需用 `Array.prototype.concat` 或展開運算子：`const result2 = [...num1, ...num2]`。

---

### 2) 呼叫時的展開（`app2.js`）

```js
function sum(x, y, z) {
  return x + y + z;
}
let arr = [1, 2, 3];

console.log(sum(arr[0], arr[1], arr[2])); // 舊法
console.log(sum(...arr)); // 展開陣列為三個實參
```

- 展開可與一般實參混用：

```js
console.log(sum(10, ...arr, 5));
```

- 但此例 `sum` 僅接三參，實際僅取 `10、1、2`，忽略多餘的 `3、5`；若要全數相加，應改用能接五參數的函式或使用 **Rest Parameters**：

  - 使用五參函式：`function sum2(a,b,c,d,e){...}` → `sum2(10, ...arr, 5)`。
  - 或以 Rest 收參：`function sumAll(...xs){ return xs.reduce((t,v)=>t+v,0); }`。

---

### 3) 以 Rest Parameters 收集不定參數（`app3.js`）

```js
function sum(...theArgs) {
  console.log(theArgs); // 例如 [1,2,3,4,5,6,7]
  for (let i = 0; i < theArgs.length; i++) {
    total += theArgs[i]; // ← 這裡的 total 未宣告且未初始化
  }
  return total;
}
```

- 程式缺陷：`total` 未宣告與初始化，會拋 `ReferenceError` 或汙染全域。正確寫法：

```js
function sum(...theArgs) {
  let total = 0;
  for (let i = 0; i < theArgs.length; i++) total += theArgs[i];
  return total;
}

sum(1, 2, 3, 4, 5, 6, 7); // 28
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)); // 55
console.log(sum(1, 2, 3)); // 6
```

- 重點：`...theArgs` 於宣告端收集參數為陣列；與呼叫端 `fn(...arr)` 的展開語意相反但語法相似。

---

## 實務要點

- 合併陣列：優先使用 `concat` 或 `[...]`；避免 `+`。
- 混用展開與實參時，確認目標函式參數個數，避免多餘實參被忽略。
- 使用 Rest 時務必放在參數列最後，並於函式內安全地初始化累加器等變數。
