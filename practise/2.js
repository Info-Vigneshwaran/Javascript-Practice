// a(5);
// var test = 'dfjhgsjhf';
// var a = (a, b) => {
//   console.log(test);
//   var test = 'dd33';
//   console.log(test);
//   console.log(a);
// };
// a(5);

// console.log(test);

// var x = 5;
// console.log(typeof typeof x);

function mul(a) {
  return function (b) {
    return b ? mul(a * b) : a;
  };
}
console.log(mul(2)(3)(4)());
