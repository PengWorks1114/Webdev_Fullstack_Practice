# 表單重置與繼承概念示例

示範 HTML `<form>` 元素內建的 `reset()` 方法，並補充物件導向中的繼承（Inheritance）觀念，說明 HTML 元素與 Element Object 的關係。

---

## 📒 `note.txt` 重點整理

### 繼承 (Inheritance)

- **定義**：將屬性 (attributes) 和方法 (methods) 從一個 class 繼承到另一個 class。
- **Subclass / Child Class**：繼承自另一個 class 的類別。
- **Superclass / Parent Class**：被繼承的類別。

### 範例

**Human 類別**
屬性：`name`、`age`、`gender`
方法：`walk()`、`eat()`、`sleep()`

**四個子類別繼承 Human 並加上自己的方法**：

- A: `read()`
- B: `jump()`
- C: `play()`
- D: `run()`

**優點**：

- 優化程式碼維護。
- 降低記憶體使用量。

---

## 📒 HTML 元素的繼承關係

- 所有 HTML 元素都繼承自 **Element Object**。
- 除了繼承來的屬性與方法，不同元素有自己的專屬屬性與方法。

### 範例：

| 元素      | 專屬方法/屬性       |
| --------- | ------------------- |
| `<form>`  | `reset()`           |
| `<video>` | `play()`、`pause()` |
| `<input>` | `value`             |

---

## 📂 專案結構

```
.
├── index.html
├── app.js
├── note.txt
└── styles/
    └── style.css
```

---

## 🧩 原始碼與行為說明

### 1) `index.html`

- **按鈕**：單純 `<button>`，用來觸發 JS 重置表單。
- **表單 `<form>`**：

  - 包含 `Name`（文字輸入）與 `Age`（數字輸入）兩欄位。
  - 沒有設定 `action` 屬性，僅作為前端示例使用。

- 載入 `app.js` 於頁尾，確保 DOM 元素已建立。

```html
<button>重製表單</button>
<form action="">
  <label>Name:</label>
  <input type="text" />
  <label>Age:</label>
  <input type="number" />
</form>
```

---

### 2) `app.js`

```javascript
// 選取按鈕
let button = document.querySelector("button");

button.addEventListener("click", () => {
  // 選取表單元素
  let form = document.querySelector("form");
  // 呼叫 <form> 專屬方法 reset()：清空所有欄位
  form.reset();
});
```

**功能重點**：

- `querySelector("button")` 與 `querySelector("form")` 分別取得按鈕與表單元素。
- `addEventListener("click", callback)` 綁定點擊事件。
- `<form>` 元素的 `reset()` 方法會將表單欄位恢復成初始值（此處等於清空）。

---

## 🔧 實務應用

- `reset()` 適用於快速清空表單資料，不需逐一將各輸入欄位設為空字串。
- 繼承觀念在 HTML DOM API 中很常見，例如 `<form>`、`<video>`、`<input>` 都是從 `Element` 繼承而來，並加上自己的專屬方法。
