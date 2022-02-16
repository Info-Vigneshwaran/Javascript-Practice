/* Callback function example start */
function a(a, b, callback) {
  x = a + b;
  y = 'callback';
  callback(x, y);
}
a(2, 5, callback_check);
function callback_check(r, t) {
  console.log(`${r} ${t}`);
}
/* Callback function example end */

/* Calling function example start */
function first() {
  console.log(`First`);
  second();
  third();
}
function second() {
  console.log(`Second`);
}

function third() {
  console.log(`Third`);
}
first();
/* Calling function example end */
