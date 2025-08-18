//arr.map
let languages = ["Java", "C++", "Python", "JavaScript"];
let result = languages.map(function (lang) {
  return lang.toUpperCase(); //會把上面每個元素套到lang裡面去取代
});
console.log(result); //每個元素都變大寫的array

let result2 = languages.map((lang) => lang.toUpperCase());
console.log(result2); //跟上面一樣 每個元素都變大寫的array

let result3 = languages.map((lang) => {
  lang.toUpperCase();
});
console.log(result3); // 不會反會任何東西, 因為沒有加return

const languages2 = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

let result4 = languages2.map((lang) => {
  return lang.name.toUpperCase();
});

console.log(result4); //一樣 name每個元素都變大寫的array
