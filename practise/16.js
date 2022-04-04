// Add a new method
// Array.prototype.myUcase = () => {
//   for (let i = 0; i < this.length; i++) {
//     this[i] = this[i].toUpperCase();
//   }
// };

// Use the method on any array
// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// console.log(fruits.myUcase());
let check_array = [2, 77, 3, 5, 7, 97];
let stack = 7;
const SevenCheck = (check_array, stack) => {
  return check_array.filter((value) => {
    new_value = String(value).split('');
    if (new_value.includes(String(stack))) {
      return value;
    }
  });
};
console.log(SevenCheck(check_array, stack));
