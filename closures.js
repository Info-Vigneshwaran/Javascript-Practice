var p;
p = 5;

/* Closure example 1 Start */
function closure_check() {
  console.log(`Closure success = ${p * p}`);
}
closure_check();
/* Closure example 1 end */

/* Closure example 2 Start */
var count = 0;
function count_add() {
  var count = 0; // with varible declaration it increased in outer scope
  count += 1;
  console.log(count);
}
count_add();
count_add();
count_add();
console.log(count);
/* Closure example 2 End */

/* Closure example 3 Start */
function counter_add() {
  counter = 0;
  function plus() {
    counter += 2;
  }
  plus();
  return counter;
}
0;
console.log(`counter value ${counter_add()}`);
console.log(`counter value ${counter_add()}`);
console.log(`counter value ${counter_add()}`);

/* Closure example 3 end */
