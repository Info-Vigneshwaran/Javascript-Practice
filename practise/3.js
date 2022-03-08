function addition(a) {
  return function (b) {
    if (b !== undefined) {
      return addition(a * b);
    }
    return a;
  };
}
console.log(addition(5)(2)());
const add = (a) => (b) => (c) => {
  return a * b * c;
};
console.log(add(2)(3)(5));

let arr = [1, 0, 0, 1, 1, 1, 0];
let arr_length = arr.filter((a) => {
  return a == 1;
});
console.log(arr_length);
console.log(arr_length.length);

var i = 0;
for (; i < 5; i++) {
  console.log(i);
}
console.log(i);
