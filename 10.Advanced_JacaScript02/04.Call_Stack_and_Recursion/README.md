# JavaScript Call Stack 與 Recursion

本專案示範 **Call Stack（呼叫堆疊）** 與 **Recursion（遞迴）** 在 JavaScript 中的運作方式，並透過程式碼與筆記解說 **基底條件 (Base Case)** 與 **Stack Overflow** 的產生原因。

---

## 📂 檔案結構

```

├── basecase.js
├── callstack.js
├── overflow\.js
└── note.txt

```

---

## 📘 說明筆記整理（來源：`note.txt`）

### Call Stack（呼叫堆疊）

- Call Stack 是一種 **後進先出 (LIFO)** 的資料結構，用於追蹤程式中函式的呼叫狀態。
- 機制:contentReference[oaicite:0]{index=0}：
  1. 當函式被呼叫時，JS 引擎會將該函式加入 **Call Stack**。
  2. 若函式內部呼叫其他函式，新的函式會被推入堆疊並執行。
  3. 當函式執行完畢，會被移出堆疊，並回到前一個函式繼續執行。
  4. 若堆疊超出最大記憶體空間，會發生 **Stack Overflow**。

### Recursion（遞迴）

- 遞迴演算法是函式呼叫自身的情況:contentReference[oaicite:1]{index=1}。
- 例如數列 `S(n)` 定義：

  1. Base Case：`S(1) = 2`
  2. 遞迴關係：`S(n) = 2 * S(n - 1)`，n ≥ 2  
     ⇒ 結果為等比數列：2, 4, 8, 16, 32, ...

- **必須設定 Base Case**，否則會陷入無限遞迴並造成 **Stack Overflow**。

---

## 📄 程式碼內容與解說

### `basecase.js`

```javascript
function s(n) {
  if (n == 1) {
    return 2; // base case
  }
  return 2 * s(n - 1);
}

s(10);
```

👉 說明：
此程式透過 **Base Case** 避免無窮遞迴。
`S(10)` 的計算過程為：
2 → 4 → 8 → ... → 1024。

---

### `callstack.js`

```javascript
function f1() {
  console.log("開始執行f1...");
  f2();
  console.log("結束執行f1...");
}

function f2() {
  console.log("開始執行f2...");
  console.log("結束執行f2...");
}

f1();
```

執行順序為：

1. 呼叫 `f1()` → 推入 Call Stack。
2. 進入 `f1` 內部呼叫 `f2()` → 推入 Call Stack。
3. `f2` 執行完畢後彈出，回到 `f1` 繼續執行。
4. `f1` 結束後彈出 Call Stack。

輸出結果：

```
開始執行f1...
開始執行f2...
結束執行f2...
結束執行f1...
```

---

### `overflow.js`

```javascript
function hello() {
  console.log("hello....");
  hello(); // 函式呼叫自己
}

hello();
```

👉 說明：
此程式沒有 **Base Case**，`hello()` 會無限呼叫自己，導致 **Stack Overflow**。

---

## 🚀 學習重點

1. **Call Stack**

   - 遵循 LIFO 原則
   - 控制函式呼叫與返回的流程

2. **Recursion**

   - 函式呼叫自身的演算法模式
   - 必須設置 **Base Case**，避免無限遞迴

3. **Stack Overflow**

   - 遞迴未終止或呼叫過深，會超出記憶體上限
   - 解決方式：設置正確的遞迴終止條件，或改用迴圈

---

## 🛠️ 執行方式

使用 Node.js 執行：

```bash
node basecase.js
node callstack.js
node overflow.js
```

---

## 📚 延伸閱讀

- [MDN - Call Stack](https://developer.mozilla.org/en-US/docs/Glossary/Call_stack)
- [MDN - Recursion](https://developer.mozilla.org/en-US/docs/Glossary/Recursion)

```

```
