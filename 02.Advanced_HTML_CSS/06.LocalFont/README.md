
# Local Font（本地字體）設定說明

當我們使用的字體在訪客的電腦上不存在時，**需將字體檔案打包在專案中**，並透過 CSS `@font-face` 將其註冊為自定義字體，確保所有使用者皆可正常顯示。

---

## 📦 設定步驟

### 1️⃣ 將字體檔案放入專案資料夾中

範例位置：  
```

/my-project/
│
├── index.html
├── style.css
└── myFont.ttf （或 .woff, .otf 等格式）

````

### 2️⃣ 在 CSS 中引入字體

在 `style.css` 最上方加入以下程式碼：

```css
@font-face {
  font-family: "myFont";
  src: url("./myFont.ttf"); /* 實際檔名與路徑需對應 */
}
````

### 3️⃣ 設定為全站字體（可加備援字體）

```css
* {
  font-family: "myFont", DFkai-sb, sans-serif;
}
```

這表示優先使用 `"myFont"`，若無法載入，則退回 `DFkai-sb`，再退回 `sans-serif`。

---

## 💡 格式支援建議

為確保跨瀏覽器支援性，建議同時準備多種字體格式：

```css
@font-face {
  font-family: "myFont";
  src: url("myFont.woff2") format("woff2"),
       url("myFont.woff") format("woff"),
       url("myFont.ttf") format("truetype");
}
```

---

## ✅ 小提醒

* 字體檔案應具備合法授權（商用或開源）。
* `woff2` 是現代瀏覽器優先推薦的格式，壓縮率高、載入快。
* 不建議使用過大的字體檔案，會影響載入速度，可用字體子集工具壓縮（如 Google Fonts 或 Font Squirrel）。

---

## 📁 檔案說明

| 檔案名稱         | 說明                        |
| ------------ | ------------------------- |
| `style.css`  | 包含 `@font-face` 設定與全域字體應用 |
| `myFont.ttf` | 實際字體檔案（須自行放入）             |


