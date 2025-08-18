# JavaScript Primitive vs Reference Data Types 與 Wrapper Object

---

## 說明整理（依 `note.txt`）

### Primitive Data Types（基本型別）

- **不是物件**，變數直接存放數值。
- 沒有屬性與方法。
- 常見型別：`string`、`number`、`boolean`、`null`、`undefined`、`symbol`、`bigint`。

### Reference Data Types（參考型別）

- 包含 `Object`、`Array` 等。
- 變數儲存的是 **記憶體位址（reference）**，指向真正的資料。

### Primitive Coercion（自動裝箱）

- 雖然 primitive 本身沒有屬性與方法，但 JS 會自動把 primitive 值暫時包裝成 **對應的 wrapper object**，並呼叫其原型上的方法。
- 例：`"foo".includes("f")` → JS 內部會轉為 `new String("foo")`，再調用 `String.prototype.includes()`。
- 自動裝箱過程不可見，屬語言內部機制。

### Wrapper Object

- 可手動用 `new String("...")` 建立，但效能差且浪費記憶體，不建議使用（MDN 亦強烈反對）。

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
// Primitive string
let myName = "Jacob"; // String primitive data type
console.log(typeof myName); // "string"

// Wrapper object
let myName2 = new String("Jacob"); // wrapper object
console.log(typeof myName2); // "object"
```

### 重點

1. `myName` 是 primitive，`typeof` 回傳 `"string"`。
2. `myName2` 是用 `new String()` 建立的物件，`typeof` 回傳 `"object"`。
3. 雖然兩者看似相同，`myName === myName2` 會是 `false`，因為前者是值比較、後者是物件參考。
4. 使用 `new String()` 建立 wrapper object，會造成：

   - 記憶體額外消耗。
   - 建立速度慢於 primitive。
   - 邏輯比較上容易混淆。
