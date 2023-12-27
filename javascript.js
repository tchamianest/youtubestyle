const input = document.querySelector(".input-box");
const button = document.querySelector(".button");

// input.addEventListener("keydown", function () {
//   if (input.value.length > 4) {
//     input.value = " ";
//     return alert("you reach the maximum");
//   }
// });

// button.addEventListener("click", function () {
//   console.log(input.value);
// });

// const voel = ["i", "u", "o", "a", "e"];
// const newname = [];
// const checkfunctio = function (name) {
//   const namee = [...name];
//   namee.forEach((char) => {
//     voel.includes(char) ? newname : newname.push(char);
//     // if (!voel.includes(char)) {
//     //   newname.push(char);
//     // } else {
//     //   newname;
//     // }
//   });
//   console.log(newname.join("").split(" ").join(""));
// };

// checkfunctio("kalisa daniel mabega");

// const nameq = ["a", "b", "a", "b", "c", "a", 1, 2, 3];
// const newmap = new Map(
//   ["klisa", "daiel"],
//   ["kamonyi", "rukoma"],
//   ["date", new Date()]
// );
// // newmap.set("kalisa", "daniel").set("price", 200);
// console.log(newmap);
// const set = new Set(nameq);
// const newnameq = [...set];
// console.log(newnameq.join(""));

// /// map working

// const maping = new Map();
// maping
//   .set("kiloso", "kigarama")
//   .set("mafene", "dusenge")
//   .set("tchami", "maestro");
// maping.delete("kiloso");
// console.log(maping);

// const bh = "kalisa+daniel+daniella";
// console.log(bh.split("+").join("----"));

/// how to capitalize the letter

// const capitalize = function (name) {
//   const newname = name.split(" ");
//   const capital = newname.map((el) => el[0].toUpperCase() + el.slice(1));
//   console.log(capital.join(" "));
// };

// capitalize("kibaruma kibamba jiga jiga fugabi");

// const kalisa = "kalisa daniel";
// console.log(kalisa.indexOf("k"));

const namew = "kibaruma    daniel".trim();
// const voel = "ieuoa";

// const check = function (name) {
//   const newe = name
//     .split("")
//     .map((el) => (voel.includes(el) ? el.replace(el, "") : el));
//   console.log(newe.join(""));
// };
// check("kalisa daniel abcinganahe");

// const [first, last] = namew.split(" ");
// console.log(` firts name:${first} \n Last name:${last}`);

// console.log(namew.padStart(23, "*"));
// console.log(namew);
// const greet = function (number) {
//   return function (number2) {
//     console.log(number + number2);
//   };
// };

// greet(10)(20);

// const maps = new Map();
// maps
//   .set("kalisa", "danel")
//   .set("kibaruma", "daniel")
//   .set("kamari", "daniela")
//   .set("kibaruma", "danielz")
//   .set("kibarumae", "danielx");

// maps.forEach((value, key, map) =>
//   console.log(`value${value} key:${key} map:${map.size}`)
// );

// console.log(maps);

const arra1 = [1, 3, 5, 7, 5, 3, 2, 4, 6, 43, 6643, 674, 3332, 2344];

// const sum = arra1.reduce((acc, cur, index, arr) => {
//   console.log(`index :${index} current:${cur}  sum: ${acc + cur}`);
//   acc += cur;
//   return acc;
// }, 0);

// const filrt = arra1.filter((el) => el > 100);
// console.log(filrt);

// const random = function (min, max) {
//   const randomi = Math.floor(Math.random() * (max - min)) + min;
//   console.log(randomi);
// };

// button.addEventListener("click", function () {
//   random(10, 15);
//   const mydate = new Date();
//   console.log(mydate.toLocaleTimeString());
// });
// console.log(button.getBoundingClientRect());

const kalisa = {
  name: "kalisa daniel",
  age: 32,
  sex: "male",
  friend: ["kalisa", "daniel", "mafene", "kalisa ", "danel", "kibamba"],
};

// console.log(kalisa["name"]);
// kalisa.school = "nyarugenge";
// console.log(kalisa);

// // const APi = JSON.stringify(kalisa);
// // console.log(APi);
// // console.log(JSON.parse(APi));
// localStorage.setItem(kalisa.name, APi);
// // console.log(localStorage.getItem(kalisa.name));
// console.log(kalisa.friend);

// kalisa.friend.push("muzehe", "kerekezi");
// console.log(kalisa.friend);

// const myobjarray = kalisa.friend;
// console.log(myobjarray);

// for (const [i, el] of myobjarray.entries()) {
//   console.log(`the index ${i}  el: ${el}`);
// }

// const repeat = function (nuber, name) {
//   //convert number

//   if (typeof nuber === "number") {
//     const newword = name.repeat(nuber);
//     const output = newword.split("-").join(" ");
//     console.log(output);
//   }
// };
// repeat(10, "kalisa-");

// var str2 = "adifferenttest_153";
// // alert(str2.split("_"));
// console.log(str2.substring(1, 10));

//
// const number = [1, 3, 21, 34, 56, 75, 32];
// console.log(Math.max(...number));

// let cur = 0;
// const max = number.filter(el=>el.max())
// });
// console.log(max);
