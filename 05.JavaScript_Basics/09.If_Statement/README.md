## 📚 專案說明

JavaScript 中共有 **七種基本數據類型 (Primitive Data Types)**：我明白了，你是要我把 `note.txt` 中的 **`||`（邏輯 OR）** 部分完整寫入到 README，而不是像我剛剛那樣只是放在真值表中一帶而過。
我會重新整理，把 `||` 的解釋與細節也完整加進去。

---

# Comparison Operators 專案說明

本專案為 JavaScript 基礎練習之一，示範\*\*比較運算子（Comparison Operators）**與**邏輯運算子（Logical Operators）\*\*的使用方式，並在瀏覽器主控台輸出運算結果，幫助初學者理解不同運算子的差異與應用場景。

---

## 📂 專案結構

| 檔案名稱     | 功能說明                                     |
| ------------ | -------------------------------------------- |
| `index.html` | 基本 HTML 結構，載入 `app.js` 執行範例程式碼 |
| `app.js`     | 比較運算子與邏輯運算子範例程式碼             |
| `note.txt`   | 學習筆記，整理比較與邏輯運算子的語法與真值表 |

---

## 📝 筆記整理

### 1. 比較運算子（Comparison Operators）

比較運算子的運算元可以是**任意資料型態**，最終運算結果為 **Boolean 值（true/false）**。

| 運算子 | 說明                                              |
| ------ | ------------------------------------------------- |
| `==`   | 若兩者相等（會進行型態轉換）則回傳 `true`         |
| `!=`   | 若兩者不相等（會進行型態轉換）則回傳 `true`       |
| `===`  | 若兩者相等且**型態相同**則回傳 `true`             |
| `!==`  | 若兩者不相等或型態不同，任一條件成立則回傳 `true` |
| `>`    | 大於                                              |
| `<`    | 小於                                              |
| `>=`   | 大於等於                                          |
| `<=`   | 小於等於                                          |

---

### 2. 邏輯運算子（Logical Operators）

#### `&&`（AND，且）

- 當左右兩側的條件都為 `true` 時，結果才會是 `true`
- 若任一條件為 `false`，結果為 `false`
- 常用於同時滿足多個條件的判斷

#### `||`（OR，或）

- 只要左右兩側的條件有**任一為 `true`**，結果就是 `true`
- 只有當兩邊都是 `false`，結果才是 `false`
- 常用於只需滿足其中一個條件即可的情境，例如登入驗證（帳號正確 **或** 信用代碼正確）

---

#### 真值表（`&&` 與 `||`）

| A   | B   | `A && B` | `A \|\| B` |
| --- | --- | -------- | ---------- |
| t   | t   | t        | t          |
| t   | f   | f        | t          |
| f   | t   | f        | t          |
| f   | f   | f        | f          |

---

## 💻 範例程式碼

**`app.js` 範例：**

```javascript
console.log(3 == "3"); // true，值相等（型態自動轉換）
console.log(3 === "3"); // false，型態不同
console.log(3 !== "3"); // true，型態不同
console.log(5 > 3 && 100 > 99); // true，兩邊條件都成立
console.log(5 > 3 || 100 < 50); // true，左邊條件成立即可
console.log(1 === 2 || 2 === 3); // false，兩邊都不成立
```

---

## 🚀 執行方式

1. 將 `index.html` 與 `app.js` 放在同一資料夾中
2. 使用瀏覽器開啟 `index.html`
3. 按下 **F12** 開啟開發者工具 → Console，即可查看輸出結果

---

如果你要的話，我可以把這份 **`Comparison_Operators` README** 跟你前面所有 JS 基礎章節的 README 一起整合成一份有**目錄索引**的完整 GitHub 教學文件，讓你點一下就能跳轉到對應章節。

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
