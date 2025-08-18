# JavaScript `sort()` 方法

---

## 說明整理（依 `note.txt`）

### 基本概念

- **`sort()`** 用於對陣列進行就地排序（in-place sort），會永久改變原陣列。
- 多數 JS 內建方法（如 `String.toUpperCase()`）不會改變原值，但 `sort()` 例外。
- 若要保留原始資料，需先製作複製品再排序。

### 語法

```js
arr.sort();
arr.sort(compareFn);
```

- **compareFn(a, b)**：自訂比較函式，決定排序順序。

  - `> 0` → a 在 b 後
  - `< 0` → a 在 b 前
  - `= 0` → 順序不變

### 內建 vs 自訂

- 內建排序適合一般使用。
- 若有大量資料（上千萬筆），可自行最佳化排序演算法提升效能。

---

## 專案結構

```
.
├── app.js   （升冪與降冪排序）
├── app2.js  （字串方法 + 排序範例）
└── note.txt
```

---

## 程式碼與解說

### 1) 升冪與降冪（`app.js`）

```js
let num = [9, 4, 3, 5, 6, 1, 0];
num.sort((a, b) => a - b);
console.log(num); // [0, 1, 3, 4, 5, 6, 9] 小到大

let num2 = [9, 4, 3, 5, 6, 1, 0];
num2.sort((a, b) => b - a);
console.log(num2); // [9, 6, 5, 4, 3, 1, 0] 大到小
```

### 2) 字串方法與排序（`app2.js`）

```js
let myName = "Grace";
myName.toUpperCase();
console.log(myName); // "Grace" -> 原值不變
// 正確寫法
let upperName = myName.toUpperCase();
console.log(upperName); // "GRACE"

let myArr = [1, 5, 3, 2, 4, 7, 8, 0];
myArr.sort();
console.log(myArr); // 已被永久改變

// 保留原始陣列
let mySortedArr = [...myArr];
mySortedArr.sort();
console.log(mySortedArr); // 升冪
console.log(mySortedArr.reverse()); // 降冪
```

---

## 實務要點

- `sort()` 預設依 **字串 Unicode 編碼順序** 排序 → 需搭配 `compareFn` 才能正確排序數字。
- 保留原陣列時建議用展開運算子 `[...]` 建立複製。
- 字串方法如 `toUpperCase()` 不會改變原始字串，需重新賦值。
