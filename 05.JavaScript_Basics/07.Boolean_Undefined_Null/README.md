# 07.Boolean_Undefined_Null

本專案為 JavaScript 基礎教學範例，示範 **Boolean**、**undefined** 與 **null** 三種資料型態的基本使用方式與差異。
適合初學者快速理解 JavaScript 基本數據類型的特性。

---

## 📚 專案說明

JavaScript 中共有 **七種基本數據類型 (Primitive Data Types)**：

1. **Number**：整數與小數，例如 `10`、`-4`、`-3.14`
2. **BigInt**：可表示任意長度整數
3. **String**：字串，例如 `"Hello"`
4. **Boolean**：布林值，只有 `true` 或 `false`
5. **null**：代表「故意不存在」的值
6. **undefined**：變數已宣告但尚未被賦值
7. **Symbol**：唯一識別符（unique identifier）

> 除此之外，JavaScript 的第八種資料型態為 **Object**（非原始型別），可為陣列、物件或函式等。

---

## 🖥 範例程式碼

**檔案：`app.js`**

```javascript
console.log(!true); // 反轉布林值，結果為 false
console.log(typeof true); // 顯示 boolean

let x;
console.log(x); // undefined，尚未賦值

let y = null;
console.log(y); // null，代表刻意設定為「空值」
```

---

## 💡 重點說明

### 1. Boolean

- 只有 `true` 與 `false`
- 可用 `!` 反轉布林值

### 2. undefined

- 變數已宣告但尚未賦值的預設值
- 系統自動賦予

### 3. null

- 由開發者手動指定的「空值」
- 表示該變數目前沒有值，但預期之後會有

---

## 📂 專案結構

```
07.Boolean_Undefined_Null/
│── index.html   # HTML 主檔案，引用 app.js
│── app.js       # JavaScript 範例程式
└── note.txt     # 筆記與理論說明
```

---

## 🚀 執行方式

1. 下載專案
2. 使用瀏覽器開啟 `index.html`
3. 開啟瀏覽器開發者工具 (F12) → Console 查看輸出結果
