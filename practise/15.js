// let true_array = [true, true, true, false, false, true];

// const countTrue = (check_array, check_value) => {
//   let new_array = check_array.filter((value) => {
//     if (check_value === value) {
//       return value;
//     }
//   });
//   return new_array.length;
// };

// const countTrue2 = (r) => r.filter((x) => x == true).length;
// console.log(countTrue2(true_array));
// console.log(countTrue(true_array, true));

// const leapYear = (year) => (year % 4 == 0 ? true : false);
// console.log(leapYear(2000));

let neg_array = [10, -3, 7, -7, -9, 39];
let pos_array = neg_array.reduceRight((prevValue, currentValue, array) => {
  console.log(prevValue);
  return currentValue + prevValue;
}, 2);
console.log(pos_array);
let space_str = 'trr sfsdf sdaefsd wr 909 sdf0909';
console.log(space_str.match(/\d+/g));
console.log(space_str.match(/[aeiou]/g));
console.log(space_str.replace(/\s/g, ''));
