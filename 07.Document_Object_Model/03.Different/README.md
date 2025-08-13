# 🌳 JavaScript — DOM Tree 與子節點存取

## 📌 專案簡介

此專案示範了：

- **DOM Tree** 節點的種類與結構
- 使用 `childNodes` 與 `children` 存取子節點的差異
- HTMLCollection 與 NodeList 的比較

---

## 📚 筆記整理（來自 `note.txt`）

### 1️⃣ DOM Tree 三種節點類型

1. **Element object**（元素節點）
2. **Text**（文字節點）
3. **Comment**（註解節點）

> 以上三者都是物件（object）。

---

### 2️⃣ 子節點存取屬性

- **`childNodes`**

  - 可取得 **所有節點**（包含文字與註解）
  - 回傳 **NodeList**

- **`children`**

  - 只能取得 **元素節點**
  - 回傳 **HTMLCollection**
  - 只有 Element object 可使用 `children`，其他節點使用時會是 `undefined`

---

### 3️⃣ 常見 DOM 查詢方法比較

| 方法                                | 回傳型別       | 內容                                 | 動態 / 靜態 |
| ----------------------------------- | -------------- | ------------------------------------ | ----------- |
| `getElementById(id)`                | Element object | 指定 ID 的第一個元素                 | —           |
| `getElementsByClassName(className)` | HTMLCollection | 指定 class 的元素（Element objects） | 動態        |
| `querySelector(selector)`           | Element object | 第一個符合選擇器的元素               | —           |
| `querySelectorAll(selector)`        | NodeList       | 所有符合選擇器的節點（Nodes）        | 靜態        |

---

### 4️⃣ HTMLCollection vs NodeList

| 特性     | NodeList                 | HTMLCollection           |
| -------- | ------------------------ | ------------------------ |
| 資料型態 | 類陣列物件（Array-like） | 類陣列物件（Array-like） |
| 方法支援 | 可使用 `forEach`         | 不支援 `forEach`         |
| 動態更新 | 靜態                     | 動態                     |
| 內容     | 可包含任何節點           | 只包含元素節點           |

---

## 📂 專案檔案結構

```
.
├── index.html   # 主頁面，含多個段落與 class
├── app.js       # DOM Tree 子節點查詢範例
└── note.txt     # 筆記，整理節點類型與集合差異
```

---

## 💻 程式碼解析

```javascript
let body = document.querySelector("body"); // 取得 body 元素

console.log(body.childNodes); // 所有子節點（NodeList）
console.log(body.children); // 所有子元素（HTMLCollection）
```

- **`childNodes`** 會包含 `h1`、`p`、`a` 元素，以及文字節點
- **`children`** 只會包含 `h1`、`p`、`a` 等元素節點

---

## 🚀 執行方式

1. 下載或 clone 專案：

   ```bash
   git clone <repository_url>
   ```

2. 使用瀏覽器開啟 `index.html`
3. 開啟開發者工具（F12 → Console）觀察輸出結果

---

## 🎯 學習重點

- 熟悉 **DOM Tree 節點結構**
- 理解 **childNodes 與 children 的差異**
- 分辨 **HTMLCollection 與 NodeList** 的特性與使用時機
