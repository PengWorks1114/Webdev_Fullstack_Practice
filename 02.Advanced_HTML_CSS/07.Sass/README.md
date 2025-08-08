
# Sass 常見功能與實作整理

本專案使用 Sass（SCSS 語法）進行樣式撰寫，並透過編譯產出 `style.css`。以下整理本專案中所使用的 Sass 常見功能與語法範例。

---

## ✅ 1. 巢狀語法（Nested CSS）

可在父選擇器中直接撰寫子選擇器，讓層級邏輯更清晰：

```scss
header {
  nav {
    ul {
      display: flex;
      li {
        list-style: none;
        a {
          color: red;
          text-decoration: none;
          &:hover {
            color: blue;
          }
        }
      }
    }
  }
}
````

---

## ✅ 2. 變數設定（Variables）

可集中定義顏色、尺寸等重複使用的設定：

```scss
$theme-color: red;
$hover-color: blue;

h1 {
  color: $theme-color;
}
a:hover {
  color: $hover-color;
}
```

---

## ✅ 3. Self Ampersand（&）

代表當前選擇器，常用於偽類或 BEM 命名法：

```scss
.btn {
  &--primary {
    background: blue;
  }
  &:hover {
    background: darkblue;
  }
}
```

---

## ✅ 4. Import 模組化

可將樣式切分成多個檔案以便管理與重用。

步驟：

1. 建立以底線 `_` 開頭的 SCSS 模組檔案，例如：`_header.scss`
2. 在主 SCSS 檔（如 `style.scss`）中使用 `@import` 引入：

```scss
@import "header"; // 不需加底線與副檔名
```

⚠️ 註：若使用 Sass 的新版本，建議改用 `@use` 或 `@forward`（需配合模組系統）

---

## ✅ 5. Mixin（樣式函式）

可重複使用的樣式區塊，類似方法（function）：

```scss
@mixin title-style {
  font-size: 2rem;
  color: $theme-color;
}

h1 {
  @include title-style;
}
```

---

## 🔧 編譯方式

請使用 Sass CLI、VSCode 插件（如 Live Sass Compiler）或其他建構工具（如 Webpack、Vite）將 `style.scss` 編譯為 `style.css`。

範例（終端機指令）：

```bash
sass style.scss style.css
```

---

## 📁 專案結構簡介

```
/專案資料夾
├── index.html            # 主頁面
├── style.scss            # 主 SCSS 檔
├── _header.scss          # SCSS 模組
├── style.css             # 編譯後的 CSS
├── style.css.map         # 對應來源 map（方便除錯）
```

---

## 🔗 HTML 引入說明

HTML 中只需引入編譯後的 CSS 檔案：

```html
<link rel="stylesheet" href="./styles/style.css" />
```

⚠️ 不可直接引入 `.scss` 檔案。

