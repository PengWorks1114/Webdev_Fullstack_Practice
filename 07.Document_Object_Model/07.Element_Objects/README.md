```markdown
# DOM Element Objects 教學示例

本專案示範了 JavaScript 操作 DOM（文件物件模型）中 **Element Objects** 的常用屬性與方法，包含事件監聽、節點操作、屬性存取與節點移除等。

## 📒 說明整理（依據 note.txt）

### 事件與節點操作

- `addEventListener(event, callbackFn)`：註冊事件監聽器
- `appendChild(element)`：將節點加入為子元素
- `children`：僅包含子元素的 HTMLCollection
- `childNodes`：包含子節點（包括文字節點、註解等）的 NodeList
- `parentElement`：父元素

### CSS 與類別操作

- `classList`：操作元素的 class（`add()`、`remove()`、`toggle()`、`contains()`）
- `style`：修改元素的 inline style（camelCase）

### 屬性與內容存取

- `getAttribute(attributeName)`：取得屬性值
- `innerHTML`：取得/設定 HTML 內容
- `innerText`：取得/設定文字內容

### 選擇器

- `querySelector(selector)`：回傳第一個符合的元素
- `querySelectorAll(selector)`：回傳所有符合的元素（NodeList）

### 節點移除

- `remove()`：刪除元素本身

## 📂 專案檔案結構
```

.
├── index.html
├── app.js
├── note.txt
└── styles/
└── style.css

````

## 📄 程式碼解說

### index.html
```html
<button class="my-btn">按我一下</button>
<div>
  <p class="hello">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
  <p class="hello">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
</div>
````

按鈕作為事件觸發器，段落元素用於測試 `parentElement` 與節點選擇。

### app.js

```javascript
let myButton = document.querySelector("#my-btn");
myButton.addEventListener("click", () => {
  alert("你點了botton");
});

let body = document.querySelector("body");
let myH1 = document.createElement("h1");
myH1.innerText = "這是我的h1";
body.appendChild(myH1);

console.log(body.children);
console.log(body.children[0].children[0]);

let firstP = document.querySelector("p");
console.log(firstP.parentElement.parentElement);
```

示範事件監聽、動態新增元素、查看子元素與父元素。

## 🚀 使用方式

1. 將檔案放置同一資料夾
2. 開啟 `index.html`
3. 點擊按鈕觸發提示，於 Console 查看輸出

## 🛠 注意事項

- HTML 按鈕使用 `class="my-btn"`，JS 中為 `#my-btn`，需統一
- 確保 `app.js` 引用位置正確

```

```
