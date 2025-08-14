# Event Bubbling 與事件傳遞控制示例

示範事件冒泡 (Event Bubbling) 的機制，以及如何使用 `stopPropagation()` 阻止事件繼續向上傳遞。

---

## 📒 `note.txt` 重點整理

### Event Bubbling（事件冒泡）

- 當事件發生在一個元素上時：

  1. 先在該元素執行事件處理器。
  2. 再依序執行其父元素、祖先元素的事件處理器。

- 範例階層：

  ```
  <section>
    <div>
      <button>Click me</button>
    </div>
  </section>
  ```

  點擊 `<button>` 時，事件會依序觸發 `button` → `div` → `section` 的 `click` 事件。

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

- **結構**：

  - `.a`：紅色外框（300x300）。
  - `.b`：藍色內框（150x150），置於紅框內。

- 目的是模擬子元素與父元素的事件冒泡行為。

```html
<div class="a">
  <div class="b"></div>
</div>
```

---

### 2) `app.js`

```javascript
let a = document.querySelector(".a");
let b = document.querySelector(".b");

// 紅色框事件
a.addEventListener("click", () => {
  alert("紅色框的事件監聽器正在被執行");
});

// 藍色框事件（未阻止冒泡）
b.addEventListener("click", () => {
  alert("藍色框的事件監聽器正在被執行");
});

// 藍色框事件（阻止冒泡）
b.addEventListener("click", (e) => {
  e.stopPropagation(); // 阻止事件向父元素傳遞
  alert("藍色框的事件監聽器正在被執行");
});
```

**功能重點**：

1. 若藍色框的事件未使用 `stopPropagation()`，點擊藍色框會先執行藍色事件，再冒泡到紅色框觸發紅色事件。
2. 使用 `e.stopPropagation()` 後，點擊藍色框只會觸發藍色框事件，不會再冒泡到紅色框。

---

## 🔧 實務應用

- **事件委派 (Event Delegation)**：利用冒泡機制讓父層監聽子元素事件。
- **阻止冒泡**：避免不必要的事件觸發，常用於巢狀按鈕、彈窗等 UI 控制。
