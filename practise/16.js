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
let dup_arr = check_array.filter(
  (item, index) => check_array.indexOf(item) !== index
);
let sum_arr = 0;
let odd_arr = 0;
let even_arr = 0;

let ans_arr = check_array.map((item, value) => {
  sum_arr += item;
  if (item % 2 == 0) {
    odd_arr += item;
  } else {
    even_arr += item;
  }
});
console.log(sum_arr);
console.log(odd_arr);
console.log(even_arr);

// console.log(dup_arr);
