// let array = [1, 2, 3, 4, 5, 6, 7, 9];
// console.log(array.reverse());
// array.forEach((index, value) => {
//   console.log(index);
// });
// let new_array = [];
// for (i = array.length; i > 0; i--) {
//   new_array.push(array[i - 1]);
// }

// let new_array = array.reduceRight((prevValue, current) => {
//   prevValue.push(current);
//   return prevValue;
// }, []);
// console.log(new_array);

// let array2 = [
//   1,
//   7,
//   1,
//   2,
//   3,
//   5,
//   3,
//   'new',
//   'new2',
//   'new',
//   'new2',
//   3,
//   4,
//   5,
//   6,
//   7,
//   9,
// ];

// let new_dupe = new Set([...array2]);
// let reverse = [...new_dupe].reduceRight((value, index) => {
//   value.push(index);
//   return value;
// }, []);
// console.log(reverse);

// let new_array = [];
// let reverse2 = array2.reduceRight((value, index) => {
//   if (!new_array.includes(index)) {
//     new_array.push(index);
//   }
//   return new_array;
// }, []);
// console.log(reverse2);
