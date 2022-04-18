// const x = () => {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
//   let i = 10;
// };
// x();

// a = 20;
// console.log(a);
// var a;

let obj = {
  name: 'test',
};

for (v in obj) {
  // console.log(v);
}

// for (const value of obj) {
//   console.log(value);
// }

for (const v in obj) {
  // console.log(v); // Prints "0 a", "1 b", "2 c"
}

let arr = { el1ss: 'el1', el2: 'el2', el3: 'el3' };

arr.addedProp = 'arrProp';

// elKey are the property keys
for (let elKey in arr) {
  console.log(elKey);
}

// elValue are the property values
// for (let elValue of arr) {
//   console.log(elValue);
// }

const obj3 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj3)) {
  console.log(`${key} ${value}`); // "a 5", "b 7", "c 9"
}

const objEntries = Object.entries(obj3).flat(Infinity);
console.log(objEntries);
