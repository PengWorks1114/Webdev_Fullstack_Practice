
本專案透過引入 [Bootstrap 5](https://getbootstrap.com/) 框架，快速實作具有 RWD（響應式網頁設計）特性的表單畫面。使用 Bootstrap 能有效減少手動撰寫 CSS 的工作量，提升開發效率。

---

## 🚀 Bootstrap 是什麼？

- Bootstrap 是一種「前端開發框架」，由 Twitter 推出。
- 提供大量現成的 CSS 樣式與 JavaScript 元件。
- 可大幅縮減處理 RWD（Responsive Web Design）的開發時間。

---

## 📦 使用方法

### ✅ 引入 Bootstrap CDN

在 `<head>` 區塊貼上：

```html
<!-- Bootstrap CSS -->
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/css/bootstrap.min.css"
  rel="stylesheet"
/>
````

在 `<body>` 結尾貼上：

```html
<!-- Bootstrap JS -->
<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"
></script>
```

---

## 🧪 範例內容說明

本專案示範了 Bootstrap 表單元件的使用：

* `.form-control`：自動調整輸入框樣式與寬度
* `.form-label`：標籤樣式
* `.form-text`：輔助說明文字
* `.form-check`：複選框區塊
* `.btn`、`.btn-primary`：按鈕樣式

完整表單範例如下：

```html
<form>
  <div class="mb-3">
    <label for="email" class="form-label">Email address</label>
    <input type="email" class="form-control" id="email" />
    <div class="form-text">We'll never share your email.</div>
  </div>
  <div class="mb-3">
    <label for="password" class="form-label">Password</label>
    <input type="password" class="form-control" id="password" />
  </div>
  <div class="form-check mb-3">
    <input type="checkbox" class="form-check-input" id="check" />
    <label class="form-check-label" for="check">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
```

---

## 🧰 優點整理

| 功能           | 是否需要手動 CSS？            |
| ------------ | ---------------------- |
| RWD 響應式排版    | ❌ 不需自行處理               |
| 表單樣式（輸入框、標籤） | ❌ 自動生成                 |
| 排版格線系統（Grid） | ❌ 直接使用 `.row` + `.col` |
| 按鈕樣式         | ❌ 只需套用 `.btn` 類別       |

---

## 📌 小結

* Bootstrap 可快速套用現成的樣式與排版。
* 非常適合用於簡報 Demo、內部系統雛型開發、RWD 實作練習。
* 後續可學習自定義樣式、元件擴充與與 JavaScript 插件整合。

