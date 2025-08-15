let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

//parameter1 是要控制的對象
//parameter2 是duration
//parameter3 是控制對象的原始狀態
//parameter4 是控制對象的動畫結束的狀態
//parameter5 提早幾秒
time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 }); //從1到0代表整個畫面消失在眼前顯示我們的網站

window.setTimeout(() => {
  animation.style.pointerEvents = "none";
}, 2500); //1 + 1.2 + 0.3 秒 總花費動畫時間長度
//這樣就可以把整個動畫遮罩隱藏起來

//我們想要禁止使用者用Enter鍵 這樣可以預防他們誤觸發送資料給後台
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//垃圾桶icon的button我們也想要防止使用者發送(防止form內部的button交出表單)
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

//想要讓最後一個選擇成績的地方 可以對應選擇的成績改變顏色
//(選擇select內的option之後,要改變相對應的顏色)

let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA(); //在成績發生變化的時候要去設置監聽
    changeColor(e.target); //e.target就是<select>
  });
});

//改變credit之後,gpa也要更新
let credits = document.querySelectorAll(".class-credit");
credits.forEach((credit) => {
  credit.addEventListener("change", () => {
    setGPA(); //當credit發生變化時也會執行setGPA();
  });
});

function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "green";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "gray";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
  }
}

//各項成績對應數值;
function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length; //每一個橫排都是一個formLength
  let credits = document.querySelectorAll(".class-credit"); //學分數
  let selects = document.querySelectorAll(".select"); //成績
  //接著來計算gpa
  let sum = 0; // GPA計算用分子
  let creditSum = 0; // GPA計算用分母

  for (let i = 0; i < credits.length; i++) {
    if (!isNaN(credits[i].valueAsNumber)) {
      //檢查是不是nan = 沒有值 js check nan 確認他是不是沒有值(沒有選)
      creditSum += credits[i].valueAsNumber; //從f12找來的對應select成績屬性
    }
  }

  //從convertor找出對應成績分數 再從form裡面找

  for (let i = 0; i < formLength; i++) {
    // i < formLength 只要有成績就要拿出來計算
    if (!isNaN(credits[i].valueAsNumber)) {
      sum += credits[i].valueAsNumber * convertor(selects[i].value); //要讓他們成績相乘 credits[i]等於第n項
    }
  }

  //gpa的計算結果
  let result;
  if (creditSum == 0) {
    result = (0.0).toFixed(2); // 這裡要先去看計算出來的分母是不是0,如果是的話要直接跳到結果讓他等於0.0,不然會出現NaN,因為分母不能放0做計算
  } else {
    result = (sum / creditSum).toFixed(2); // 只計算到小數點第二位
  }
  document.getElementById("result-gpa").innerText = result;
}

//接下來進行按下 + button就會執行一次新增
let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  // 設定監聽器,當按下新增button後執行動作
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div"); // 製作出new form後要到index查看form裡面有什麼 也要建立相對物件
  newDiv.classList.add("grader");

  // 製作五個小元素
  let newInput1 = document.createElement("input");
  newInput1.setAttribute("type", "text");
  newInput1.setAttribute("list", "opt");
  newInput1.classList.add("class-type");

  let newInput2 = document.createElement("input");
  newInput2.setAttribute("type", "text");
  newInput2.classList.add("class-number");

  let newInput3 = document.createElement("input");
  newInput3.setAttribute("type", "number");
  newInput3.setAttribute("min", "0");
  newInput3.setAttribute("max", "6");
  newInput3.classList.add("class-credit");
  newInput3.addEventListener("change", () => {
    setGPA(); //這邊新增的 也要記得去觸發setGPA()
  });

  // here is the select tag
  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  //製作垃圾桶
  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  let newItag = document.createElement("i");
  newItag.classList.add("fas");
  newItag.classList.add("fa-trash");
  newButton.appendChild(newItag);

  //   //以下不知道哪裡有問題 我全部註解掉 重新寫一次
  //   //防止按下trash-button後頁面重整怪怪的
  //   newButton.addEventListener("click", (e) => {
  //     //設置點擊監聽事件
  //     e.preventDefault(); // 避免交出整個表單
  //     e.target.parentElement.parentElement.style.animation =
  //       "scaleDown 0.5s ease forwards";
  //     // 下面新增一個"animationend"監聽事件 為了在動畫結束後執行動作
  //     e.target.parentElement.parentElement.addEventListener(
  //       "animationend",
  //       (e) => {
  //         e.target.remove(); // 這個form
  //         setGPA();
  //       }
  //     );
  //   });
  //   //以上不知道哪裡有問題 我全部註解掉 重新寫一次

  newButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.5s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  newDiv.appendChild(newInput1);
  newDiv.appendChild(newInput2);
  newDiv.appendChild(newInput3);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);

  newForm.appendChild(newDiv);
  document.querySelector(".all-inputs").appendChild(newForm);

  //接下來我想新增動畫 當我按下加號新增物件的時候 我希望能有動畫
  newForm.style.animation = "scaleUp 0.5s ease forwards";
});

// //以下不知道哪裡有問題 我全部註解掉 重新寫一次
// let allTrash = document.querySelectorAll(".trash-button"); // 找到所有 class 為 trash-button 的元素，回傳 NodeList
// allTrash.forEach((trash) => {
//   // forEach 逐一處理 NodeList 中的每個元素，變數名稱 trash 是你自己命名的
//   trash.addEventListener("click", (e) => {
//     // 對每個 trash-button 元素加上點擊事件監聽器
//     e.target.parentElement.parentElement.classList.add("remove"); // 加入remove動畫,但實際還佔用class位置
//     // e.target.parentElement.parentElement.remove();
//     // e.target = 觸發事件的實際 DOM 元素
//     // .parentElement.parentElement = 往上找兩層 DOM 節點
//     // .remove() = 從 DOM 中移除該節點（刪除該元素與它的子元素）
//   });
// });
// allTrash.forEach((trash) => {
//   let form = trash.parentElement.parentElement;
//   form.addEventListener("transitionend", (e) => {
//     e.target.remove();
//     setGPA(); // 記得刪除後也要setGPA() 下面才會同步運作
//   });
// });
// //以上不知道哪裡有問題 我全部註解掉 重新寫一次

let allTrash = document.querySelectorAll(".trash-button");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
    // e.target.parentElement.parentElement.remove(); //因為js執行太快了,所以她不會裡我css裡面寫幾秒動畫 他會瞬間執行
  });
});

allTrash.forEach((trash) => {
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA();
  });
});

// 排序演算法
let btn1 = document.querySelector(".sort-descending");
let btn2 = document.querySelector(".sort-ascending");
btn1.addEventListener("click", () => {
  handleSorting("descending"); //大到小
});
btn2.addEventListener("click", () => {
  handleSorting("ascending"); //小到大
});

function handleSorting(direction) {
  // 先去抓幾筆資料(div.grader)
  let graders = document.querySelectorAll("div.grader");
  let objectArray = [];
  //用一個forloop去跑 來看處裡面有些什麼
  for (let i = 0; i < graders.length; i++) {
    let class_name = graders[i].children[0].value; // 這個children會給我們htmlcollection,我們可以用index的方式去拿資料,[0]就是classcategory位置的資料(classcategory)
    let class_number = graders[i].children[1].value; // class number
    let class_credit = graders[i].children[2].value;
    let class_grade = graders[i].children[3].value;
    //上面提取了四筆資料,接著再做一個物件class_object
    //排除empty

    if (
      !(
        class_name == "" &&
        class_number == "" &&
        class_credit == "" &&
        class_grade == ""
      )
    ) {
      let class_object = {
        class_name,
        class_number,
        class_credit,
        class_grade,
        //js中太常見下面這種宣告了,所以可以直接用上面的宣告方式
        //   class_name: class_name,
        //   class_number: class_number,
        //   class_credit: class_credit,
        //   class_grade: class_grade,
      };
      objectArray.push(class_object); //把剛剛做好的class_object放進去上面的objectArray
    }
  }

  // 取得object array後, 我們可以把成績String換成數字
  for (let i = 0; i < objectArray.length; i++) {
    objectArray[i].class_grade_number = convertor(objectArray[i].class_grade);
  }

  objectArray = mergeSort(objectArray);
  if (direction == "descending") {
    objectArray = objectArray.reverse();
  }
  console.log(objectArray);
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < a1.length && j < a2.length) {
    if (a1[i].class_grade_number > a2[j].class_grade_number) {
      result.push(a2[j]);
      j++;
    } else {
      result.push(a1[i]);
      i++;
    }
  }

  while (i < a1.length) {
    result.push(a1[i]);
    i++;
  }
  while (j < a2.length) {
    result.push(a2[j]);
    j++;
  }

  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }

  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    return merge(mergeSort(left), mergeSort(right));
  }
}
