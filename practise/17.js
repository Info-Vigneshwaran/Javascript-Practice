// const sum = (...args) => {
//   return [...args].reduce((prev, current, self) => {
//     return (current = prev + current);
//   }, 0);
// };

// console.log(sum(1, 2, 3, 4, 4));

// const sum2 = (a) => (b) => {
//   return b ? sum2(a + b) : a;
// };
// console.log(sum2(2)(3)());

// let new_obj = { name: 'test', add: 'test' };
// let new_obj2 = { namse: 'test', adwd: 'ddtest' };
// console.log({ ...new_obj, xxx: 'sdds' });
// console.log({ ...new_obj, ...new_obj2 });

// let a = [1, 5, 7];
// let b = [11, 15, 17];
// let c = Array(new Set([...a, ...b]));
// let d = a.push(b);
// var a = [1, 2, 3, 4, 5, 3, 1, 5, 6, 8, 8];

// var unique = a.reduce((acc, curr, self) => {
//   return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
// }, {});

// console.log(unique);

const input = [1, 3, 10, 11, 13];
let target = 21;
let new_arr = [];
const new_check = input.filter((value, index) => {
  const diffIndex = input.indexOf(target - value);
  if (diffIndex >= 0 && diffIndex !== index) {
    return diffIndex;
  }
});
console.log(new_check);
