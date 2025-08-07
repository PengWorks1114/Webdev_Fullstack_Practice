
# User Snippet 使用說明（VSCode 程式碼片段）

## ✨ 功能簡介

User Snippet 是 Visual Studio Code 的一項強大功能，能讓我們自訂常用的程式碼片段。  
舉例來說：輸入 `!zh`，即可快速展開成一個 HTML 繁體中文頁面的基本架構，大幅提升開發效率。

---

## 🧩 Snippet 結構說明

```json
{
  "繁體中文html的snippet": {
    "prefix": "!zh", // trigger：輸入此文字即會展開片段
    "body": [
      "<!DOCTYPE html>",
      "<html lang=\"zh-Hant\">",
      "  <head>",
      "    <meta charset=\"UTF-8\" />",
      "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />",
      "    <title>網站名稱</title>",
      "  </head>",
      "  <body></body>",
      "</html>"
    ],
    "description": "繁體中文html的snippet"
  }
}
````

---

## 🛠 設定流程

1. 前往 [Snippet Generator 網站](https://snippet-generator.app/) 製作片段內容。
2. 開啟 VSCode，點選左下角齒輪 → `Configure User Snippets`。
3. 選擇對應語言（如 `html`）。
4. 貼上產出的 JSON 片段到打開的設定檔中（例如 `html.json`）。
5. 存檔後即可使用，例如輸入 `!zh` 後按下 `Tab` 展開片段。

---

## ✅ 實際範例結果

當輸入 `!zh` 並展開後，將會自動產出以下 HTML 基本骨架：

```html
<!DOCTYPE html>
<html lang="zh-Hant">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>網站名稱</title>
  </head>
  <body></body>
</html>
```

---

## 📌 小提醒

* `prefix` 可自訂成任何你習慣的縮寫（如 `!zh`、`html5`、`boilerplate` 等）。
* 一個程式語言可定義多個 Snippet，方便應對不同需求。
* JSON 檔案中每個片段皆為獨立物件，注意語法正確性（逗號、引號等）。


