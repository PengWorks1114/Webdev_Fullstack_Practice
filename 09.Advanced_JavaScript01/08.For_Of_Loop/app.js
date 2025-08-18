let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

numbers.forEach((n) => {
  console.log(n);
});

for (n of numbers) {
  console.log(n);
}

let myString = "Grace";
for (let i of myString) {
  console.log(i);
}

let Wilson = {
  name: "Wilson Ren",
  age: 26,
};

for (let property in Wilson) {
  console.log(property); // Wilson Ren 26
  console.log(Wilson.property); // undefined undefined
  console.log(Wilson[property]); // Wilson Ren 26
}

let num = [100, 44, 22];

for (let i in num) {
  console.log(i); // 0 1 2
  console.log(num[i]); // 100 44 22
}
