// functions in js
/*
4 types
1. Named functions
2. Anonymous functions
3. Self invoking functions
4. Constructors
*/

/* Named function Start */
function named_func(x, y, z) {
  let add = x + y + z;
  let sub = z - y - x;
  return {
    add,
    sub,
  };
}

named_func = named_func(5, 3, 9);

console.log('Named functions ===>', named_func);
/* Named function End */

/* Anonymous function Start */
var a = function (q, w, e) {
  let add = q + w + e;
  let sub = q - w - e;
  return {
    add,
    sub,
  };
};
anony_func = a(8, 6, 9);
console.log('Anonymous functions ===>', anony_func);
/* Anonymous function End */

/* setTimeout function start */
setTimeout(function () {
  console.log('this anonymous setTimeout function');
}, 0);
/* setTimeout function end */

/* Constructor function Start */
var construc = new Function('a', 'b', 'c', 'return b= a+b+c;');
console.log(construc(2, 4, 6));
/* Constructor function End */

/* Self invoking function Start */
(function (k, l) {
  add = k + l;
  console.log(add);
  return {
    add,
  };
})(2, 4);
/* Self invoking function End */
