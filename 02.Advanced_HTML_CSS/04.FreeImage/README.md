
# Free Image & Icon 資源整理

在進行網站製作、UI 設計或前端開發時，**圖片與圖示的版權問題**務必注意。以下整理了可合法使用的免費資源平台與使用方式。

---

## 🖼️ 免費圖片資源（Free Images）

### 1️⃣ Google 圖片搜尋
- 在 Google 圖片中輸入關鍵字。
- 點選上方 `工具（Tools）` → `使用權限（Usage Rights）` → 選擇 `Commercial & other licenses`。
- 僅顯示可商業使用的圖片。

### 2️⃣ [Unsplash](https://unsplash.com/)
- 高畫質免費圖庫。
- 所有圖片皆可免費使用（包含商業用途），不需標示出處（但鼓勵標示攝影師名稱）。

### 3️⃣ [Pexels](https://www.pexels.com/)
- 提供影片與圖片下載，皆為 CC0 授權。
- 可商業使用、無需署名。

### 4️⃣ [iStock](https://www.istockphoto.com/)
- 付費圖片庫，由 Getty Images 經營。
- 適用於商業專案，但需購買授權。

---

## 🎨 免費圖示資源（Free Icons / Vectors）

### 1️⃣ [Icons8](https://icons8.com/)
- 提供 PNG、SVG、Lottie 等格式。
- **免費用需標示來源連結**，付費則無此限制。

### 2️⃣ [Font Awesome](https://fontawesome.com/)
- 提供免費與付費圖示。
- 使用方式：
  1. 到 [cdnjs](https://cdnjs.com/) 搜尋 Font Awesome CDN 並貼到 HTML 中。
  2. 直接複製 icon 對應標籤，貼到程式中即可使用。

  例如：

  ```html
  <script src="https://kit.fontawesome.com/yourkit.js" crossorigin="anonymous"></script>
  <i class="fa-solid fa-house"></i>
````

---

### 3️⃣ [unDraw](https://undraw.co/illustrations)

* 提供免費、可自訂顏色的 SVG 插圖。
* 無需註冊即可下載使用，適用於網頁與簡報。
* 可用於商業用途。

---

## ✅ 小提醒

| 資源              | 商業使用 | 是否需註明來源      | 格式           |
| --------------- | ---- | ------------ | ------------ |
| Google 圖片（工具篩選） | ✅    | 視來源而定        | PNG / JPG    |
| Unsplash        | ✅    | ❌（建議標示）      | JPG          |
| Pexels          | ✅    | ❌            | JPG / MP4    |
| iStock          | ✅    | ✅（付費授權）      | 多種格式         |
| Icons8          | ✅    | ✅（免費需附連結）    | PNG / SVG    |
| Font Awesome    | ✅    | ❌（使用 CDN 即可） | 字型 / HTML 標籤 |
| unDraw          | ✅    | ❌            | SVG          |

---

## 📌 建議做法

* 商業專案一律使用授權明確的圖片（Unsplash、Pexels、unDraw）。
* 使用 Icons8 時記得附上出處連結。
* 若網站部署到正式環境，**避免直接從 Google 複製圖片**，請確認授權或使用圖庫來源。


