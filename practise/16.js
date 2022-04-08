// Add a new method
// Array.prototype.myUcase = () => {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// Use the method on any array
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// console.log(fruits.myUcase());
let check_array = [1, 2, 3, 4, 5];
// let stack = 7;
// const SevenCheck = (check_array, stack) => {
//   return check_array.filter((value) => {
//     new_value = String(value).split('');
//     if (new_value.includes(String(stack))) {
//       return value;
//     }
//   });
// };
// console.log(SevenCheck(check_array, stack));
// let dup_arr = check_array.filter(
//   (item, index) => check_array.indexOf(item) !== index
// );
// let sum_arr = 0;
// let odd_arr = 0;
// let even_arr = 0;

// let ans_arr = check_array.map((item, value) => {
//   sum_arr += item;
//   if (item % 2 == 0) {
//     odd_arr += item;
//   } else {
//     even_arr += item;
//   }
// });
// console.log(check_array);
// console.log(odd_arr);
// console.log(even_arr);

// let arr = [10, 20, 30, 40];

// ans = Array.isArray(arr);
// console.log(ans);

// const obj = {
//   1: 5,
//   2: 7,
//   3: 0,
//   4: 0,
//   5: 0,
//   6: 0,
//   7: 0,
//   8: 0,
//   9: 0,
//   10: 0,
//   11: 0,
//   12: 0,
// };

// console.log(Object.entries({ ...obj }));

// a = '1';
// f = '2';
// console.log(+a + 2 + +f);

// function a() {
//   var apple = 'Apple';
//   var banana = 'Banana';
//   function b() {
//     if (true) {
//       console.log(apple, banana);
//     }
//   }
//   b();
//   console.log(apple, banana);
// }
// a();
// const a = () => {
//   const b = () => {
//     if (true) {
//       var apple = 'apple';
//       var banana = 'banana';
//     }
//     console.log(apple, banana);
//   };
//   b();
// };

// a();

// let x = [5, 3, 5];
// let y = [5, 3, 5];
// let b = 10;
// x.unshift(b);
// console.log(x);
// console.log([...y, ...x]);

var temp = 'Hello World!';
var count = (temp.match(/l/g) || []).length;
console.log(count);
