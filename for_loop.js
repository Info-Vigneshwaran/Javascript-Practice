// Loops in js
/*
5 loops
1. For
2. For in
3. For Each
4. While
4. Do While
*/

/* For Each example start */
console.log(`For each loop start`);
let places = ['jack', 'joe', 'thilak', 'queen'];
places.forEach(function (place) {
  console.log(`Place ${place}`);
});
console.log(`For each loop end`);
console.log(`\n`);
/* For Each example end */

/* For in example start */
console.log(`For in loop start`);
let person = ['jack', 'joe', 'thilak', 'queen'];
for (key in person) {
  console.log(person[key]);
}
console.log(`For in loop end`);
console.log(`\n`);
/* For in example end */

/* For loop example start */
console.log(`For loop 1 start`);

for (i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 100);
}
console.log(`For loop 1 end`);
console.log(`\n`);
console.log(`For loop 2 start`);

for (i = 0; i < 10; i++) {
  task(i);
}
console.log(`For loop 2 end`);
console.log(`\n`);
console.log(`For loop 3 start`);

for (let i = 0; i < 10; i++) {
  task(i);
}
console.log(`For loop 3 end`);
console.log(`\n`);
function task(i) {
  /*
  setTimeout(function () {
    console.log(i);
  }, 2000 * i);

  */
  setTimeout(function () {
    console.log(i);
  }, 500);
}
/* For loop example end */
