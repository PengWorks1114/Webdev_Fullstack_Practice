//arr.filter
const languages = [
  { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
  { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
  { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
  { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
  { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

let result = languages.find((lang) => {
  return lang.popularity > 9.6;
});

console.log(result); // 返回python 因為popularity 大於9.6

let result2 = languages.find((lang) => {
  return lang.popularity > 9.9;
});

console.log(result2); // undefined 沒有找到

//arr.filter
let result3 = languages.find((lang) => {
  return lang.rating >= 9.2;
});

console.log(result3); // python java c++

//some() every() 跟上面雷同
