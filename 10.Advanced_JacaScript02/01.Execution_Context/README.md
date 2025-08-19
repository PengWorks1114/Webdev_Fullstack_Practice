# JavaScript Execution Context Example

本專案示範 JavaScript 執行環境 (Execution Context) 的運作方式，並透過程式碼範例與筆記進行解說。內容涵蓋 **全域執行環境 (Global Execution Context)** 與 **函式執行環境 (Function Execution Context)** 的建立流程，以及程式碼執行的先後順序。

---

## 📘 說明筆記整理（來源：`note.txt`）

當 JS 引擎執行程式碼 (script) 時，會建立 **Execution Contexts (執行環境)**，分為兩種：

1. **全域執行環境 (Global Execution Context)**
2. **函式執行環境 (Function Execution Context)**

### 全域執行環境

在初次執行一份 JS 程式碼時，會建立 Global Execution Context，並依序進行：

- **Creation Phase (創造階段)**

  1. 建立 global object（瀏覽器為 `window`，Node.js 為 `global`）
  2. 建立 scope
  3. 建立 `this`，並綁定至 global object
  4. 將 variables、class、function 分配至記憶體（hoisting 步驟）

- **Execution Phase (執行階段)**
  1. 逐行執行程式碼
  2. 遇到遞迴則透過 call stack 排定順序

### 函式執行環境

每次呼叫 function，都會建立一個新的 Function Execution Context，其流程與全域環境相似：

- **Creation Phase**

  1. 建立 arguments 物件（包含參數數值參照）
  2. 建立 scope（依照 closure 規則）
  3. 建立 `this`
  4. 將變數與函式配置到記憶體（hoisting）

- **Execution Phase**
  1. 逐行執行 function 內部程式
  2. 遇到遞迴則透過 call stack 處理

---

## 📂 檔案結構

```

├── app.js
├── app2.js
└── note.txt

```

---

## 📄 程式碼內容與解說

### `app.js`

```javascript
console.log(window); // 一定要在瀏覽器中才可以執行，指向 window 物件

// 1. 創建 global object (例: window or global)
// 2. 創建 scope
console.log(this); // 在 VSCode 執行為 {}，在瀏覽器執行則會綁定到 global object
// 3. 創建 this 關鍵字，並被綁定至 global object
```

此程式示範了 **全域執行環境** 的建立過程，並比較了在不同執行環境下 (`Node.js` vs 瀏覽器) 的 `this` 綁定行為。

---

### `app2.js`

```javascript
let a = 3;

function area(s) {
  return s * s;
}

// window.alert();
let result = area(a);
console.log(result);

// function area(s) {
//   return s * s;
// } // 即使移動 function 宣告到這裡，也不會出錯，因為 hoisting
```

#### 執行流程：

- **Creation Phase**

  - 建立 global object
  - 建立 scope
  - 建立 this
  - 宣告 `a` 與 `result`（初始化為 undefined）
  - 宣告 `area` 函式並放入記憶體（hoisting）

- **Execution Phase**

  - 指派 `a = 3`
  - 呼叫 `area(3)` → 回傳 `9`
  - 指派 `result = 9` 並輸出

此範例強調 **hoisting 機制**：即使函式宣告寫在呼叫之後，仍能正確執行。

---

### `note.txt`

該檔案提供了完整的 **Execution Context 筆記**，補充程式碼範例說明。
特別指出：

- JS 在執行程式碼時，會先建立 **Creation Phase** 再進入 **Execution Phase**
- **全域與函式執行環境** 都遵循相同的雙階段流程

---

## 🚀 學習重點

1. **全域環境初始化**：包含 global object、scope 與 this 的建立。
2. **Hoisting 機制**：變數與函式會先被配置記憶體，導致函式可在宣告之前呼叫。
3. **函式呼叫時新環境建立**：每次 function call 都會建立新的 Execution Context。
4. **Call Stack 運作**：控制函式遞迴與執行順序。

---

## 🛠️ 執行方式

在瀏覽器中打開 Console，或使用 Node.js 執行：

```bash
node app.js
node app2.js
```

- 瀏覽器中 `console.log(this)` 會輸出 `window`
- Node.js 中則會輸出 `{}`

---

## 📚 延伸閱讀

- [MDN Web Docs - Execution Context](https://developer.mozilla.org/en-US/docs/Glossary/Execution_context)
- [JavaScript Hoisting](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting)

```

```
