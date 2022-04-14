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

let a = [1, 5, 7];
let b = [11, 15, 17];
let c = [...new Set([...a, ...b])];
// console.log(c);
// let d = a.push(b);
// var a = [1, 2, 3, 4, 5, 3, 1, 5, 6, 8, 8];

// var unique = a.reduce((acc, curr, self) => {
//   return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
// }, {});

// console.log(unique);

// const input = [1, 3, 10, 11, 5];
// let target = 8;
// let new_arr = [];
// const new_check = input.filter((value, index) => {
//   const diffIndex = input.indexOf(target - value);
//   if (diffIndex >= 0 && diffIndex !== index) {
//     new_arr.push(diffIndex);
//     diffIndex;
//   }
// });
// console.log(new_arr);

// MAP creates a new array
// MPA return new Array
// var arr = [1, 2, 3, 4, 5, 6, 7];

// var newArr = arr.map((el) => {
//   return el * 2;
// });

// console.log(newArr); //2,4,3,8,10,12,14

// filter() return new Array
// var newFilter = arr.filter((el, value, self) => {
//   return value;
// });
// console.log(newFilter); // 1,2,3,4,5,6,7

// function getIndex(...args) {
//   let [sumArray, target] = args;
//   const arr = [];
//   let getAr = sumArray.filter((nums, i, self) => {
//     let final = target - nums;
//     if (self.indexOf(final) !== -1) {
//       arr.push(self.indexOf(final));
//     }
//   });
//   return arr;
// }

// let sum = getIndex([0, 1, 16, 5, 12, 3], 8);

// console.log(sum);

// let new_Arr = [4, 8, 1, 9];

// let sortA = new_Arr
//   .sort((a, b) => {
//     return Number(a) < Number(b) ? 1 : -1;
//   })
//   .join('');

// console.log(String(sortA));

let ex_arr = [1, 2, 3, 4, 5, 6].sort(() => {
  ran = 0.3 - Math.random();
  return ran;
});

// console.log(ex_arr);
// console.log(ex_arr.indexOf(3));

console.log([1, 2, 3, 4].sort(() => (Math.random() > 0.3 ? 1 : -1)));
