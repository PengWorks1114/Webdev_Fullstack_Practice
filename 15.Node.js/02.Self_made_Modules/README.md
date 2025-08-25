# Node.js Modules 練習專案

本專案示範了 Node.js **自製模組 (Self-made Modules)** 的用法，並結合 `require`、`module.exports`、`exports` 等方式，說明如何將多個模組組合成一個整合模組。

---

## 📘 專案結構

- `note.txt`：Node.js Modules 筆記與說明
- `myFile.js`：主程式，引用自製模組並執行
- `index.js`：模組整合器，匯出其他模組的方法
- `app1.js`：定義 `morning()` 與 `evening()`
- `app2.js`：定義 `lunch()`
- `app3.js`：預留擴充（示範多檔模組引用）

---

## 📒 筆記整理 (note.txt)

- **Node.js 模組種類**：

  1. **內建模組**：直接可用（例如 `fs`、`http`）。
  2. **自製模組**：由開發者自行撰寫。
  3. **第三方模組**：透過 `npm` 安裝使用。

- **Module Wrapper 提供的變數**：

  - `module`：包含 id、path、exports、parent、filename 等資訊。
  - `exports`：本質是 `module.exports` 的快捷方式，預設為空物件。
  - `require()`：讀取並執行指定 JS 檔案，回傳其 `exports` 物件。

- **require 資料夾**：若 `require('./myModules')` 指向資料夾，Node.js 會自動尋找該資料夾內的 `index.js` 並執行，最後回傳 `exports`。

---

## 📂 程式碼內容與說明

### 1. `myFile.js`：主程式

```javascript
let myModule = require("./myModules");

myModule.morning();
```

- 匯入 `./myModules`（實際對應 `index.js`）。
- 呼叫 `morning()` 函式。

---

### 2. `index.js`：模組整合器

```javascript
let app1 = require("./app1");
let app2 = require("./app2");
let app3 = require("./app3");

exports.morning = app2.morning;
```

- 將 `app1`、`app2`、`app3` 匯入。
- 最終只把 `app2.morning` 暴露出去。

---

### 3. `app1.js`：morning 與 evening

```javascript
function morning() {
  console.log("早安你好");
}

function evening() {
  console.log("晚安你好");
}

module.exports.morning = morning;
exports.evening = evening;
```

- 使用 `module.exports` 與 `exports` 兩種方式輸出函式。
- 可被 `require` 調用。

---

### 4. `app2.js`：午餐函式

```javascript
function lunch() {
  console.log("午餐時間");
}
```

- 定義 `lunch()`，但沒有輸出 `exports`，因此外部無法直接呼叫。

---

### 5. `app3.js`：示範引用

```javascript
// let app2 = require("./app2");
// let app3 = require("./app3");

// app2.morning();
// app3.lunch();
// app2.evening();
```

- 示範如何同時引入多個模組，並調用其方法。

---

## 🚀 學習目標

1. 熟悉 **`require`** 與 **`module.exports` / `exports`** 的差異。
2. 理解如何將多個模組整合至 `index.js`，並在主程式 (`myFile.js`) 使用。
3. 學會如何在 Node.js 專案中組織多檔模組。

---

## ✅ 結論

本專案透過 `myFile.js` 主程式與 `myModules` 資料夾，完整展示了 **Node.js 自製模組的撰寫、整合與調用流程**，並搭配筆記內容加深理解。
