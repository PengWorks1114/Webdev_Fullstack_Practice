# 🌐 JavaScript — Window Object 與物件屬性引用

## 📌 專案簡介

此專案示範了：

- **Window Object** 的常見方法與屬性
- 使用 `setInterval` 與 `clearInterval` 控制定時任務
- **物件屬性為另一個物件** 的物件導向程式設計概念

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ Document Object Model（DOM）

- DOM 允許 JavaScript 操作 HTML 元素。
- 若無法存取 DOM，JS 與一般程式語言無異。

### 2️⃣ Window Object 常見方法

```javascript
window.alert(); // 顯示警示對話框
window.addEventListener(); // 綁定事件監聽
window.clearInterval(); // 停止 setInterval 設定的循環
window.prompt(); // 取得使用者輸入
window.setInterval(); // 每隔固定時間執行一次函數
```

### 3️⃣ 常見屬性

```javascript
window.console; // 例：console.log(), console.error()
window.document; // HTML 文件的 DOM 物件
window.localStorage; // 本地儲存（持久）
window.sessionStorage; // 工作階段儲存（瀏覽器關閉即失效）
```

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，引用 app.js
├── app.js       # 範例程式碼
└── note.txt     # 筆記，整理 Window Object 與物件屬性概念
```

---

## 💻 程式碼解析

### 1️⃣ `setInterval` 與 `clearInterval`

```javascript
function sayhi() {
  alert("3秒過了...");
}

let interval = window.setInterval(sayhi, 3000); // 每 3 秒執行一次
window.clearInterval(interval); // 立即停止
```

- `setInterval`：重複執行
- `clearInterval`：停止對應的 `setInterval`

---

### 2️⃣ 物件屬性引用另一個物件

```javascript
let Grace = {
  name: "Grace",
  age: 26,
};

let Wilson = {
  name: "Wilson",
  age: 26,
  spouse: Grace, // spouse 屬性指向 Grace 物件
};

console.log(Wilson.spouse.age); // 26
```

- `Wilson.spouse` 直接指向 `Grace` 物件
- **物件導向概念**：物件的屬性可以是另一個物件

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 觀察：

   - 每 3 秒跳出提示（隨後立即停止）
   - Console 中印出物件屬性內容

---

## 🎯 學習重點

- **Window Object** 提供瀏覽器全域操作能力
- `setInterval` / `clearInterval` 控制定時任務
- 物件可透過屬性引用其他物件，形成物件關聯關係
