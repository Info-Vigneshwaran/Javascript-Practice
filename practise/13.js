// var a = [23, 44, 55];
// a[100] = 5;
// console.log(a.length);

// console.log(new Set([10, 20, 10]));

// const name5 = (a, b) => {
//   return a == 100 || b == 100 || a + b == 100 ? true : false;
// };
// console.log(name5(2, 98));

// function func2() {
//   for (var i = 0; i < 3; i++) {
//     test(i);
//   }
// }

// function test(i) {
//   setTimeout(() => console.log(i), 2000);
// }
// func2();
let arr = [1, 2, 3, 4];

console.time('Execution Time');
const func1 = (arr) =>
  arr.reduce((acc, ele) => {
    let sinX = arr.filter((x) => x != ele).reduce((acc, ele) => acc * ele);
    acc.push(sinX);
    return acc;
  }, []);

console.log(func1(arr));
console.timeEnd('Execution Time');

console.time('Execution Time');
const func2 = (arr) => {
  let largoArr = arr.length;
  let res = [];
  for (let i = 0; i < largoArr; i++) {
    let parcial = 1;
    for (let j = 0; j < arr.length; j++) {
      let numeroBlock = arr[i];
      if (arr[j] != numeroBlock) parcial *= arr[j];
    }
    res.push(parcial);
  }
  return res;
};
console.log(func1(arr));
console.timeEnd('Execution Time');
