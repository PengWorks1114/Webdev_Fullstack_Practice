# JavaScript 數值特例：NaN 與 Infinity

依 ECMA 規範由瀏覽器 JS 引擎實作；`NaN` 與 `Infinity` 同屬 `number` 型別。`NaN` 代表「非數字」，多見於無法計算出數值的運算；`Infinity`／`-Infinity` 代表正／負無窮，`Infinity` 大於任何有限數，任何有限數除以 `Infinity` 為 `0`。

---

## `note.txt` 重點整理

- JavaScript 由 ECMA 訂標準，瀏覽器內部 JS 引擎解讀與執行。
- `NaN`、`Infinity` 皆為 `number`。`NaN` 出現在以非數字進行數學運算且無法得到數值時。
- `Infinity`（正無窮）大於任何數值；`n * Infinity`（`n` 為正整數）仍為 `Infinity`；`x / Infinity`（有限 `x`）為 `0`。

---

## 檔案結構

```
.
├── app.js
└── note.txt
```

---

## 程式碼解說（`app.js`）

```js
console.log(typeof Infinity); // number
console.log(Infinity > 34982340); // true 任何數字都會比他小
```

- `typeof Infinity`：回傳 `number`，符合 `Infinity` 屬於數字型別的定義。&#x20;
- `Infinity > 34982340`：結果為 `true`，因 `Infinity` 大於任何有限數。&#x20;

---
