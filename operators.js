/*
Types of operators in javascript
There are 7 types operators in javascript
1. Arithematic operators
2. Increment/Decrement operators
3. Assigment operators
4. String operators
5. Comparison operators
6. Boolean/Bitwise operators
7. Ternary operators
*/

/* Arithematic operators Start */
// +, -, /, x, % (5 operators)
console.log(`Addition: ${2 + 4}`);
console.log(`Subtraction: ${8 - 4}`);
console.log(`Multiplication: ${3 * 4}`);
console.log(`Division: ${3 / 4}`);
console.log(`Modulus: ${3 % 4}`);
/* Arithematic operators end */
console.log(`\n`);

/* Increment/Decrement operators Start */
var h = 2;
h++; // h = h+1;
console.log(`Increment: ${h}`);
h--; // h = h-1;
console.log(`Decrement: ${h}`);
/* Increment/Decrement operators End */
console.log(`\n`);

/* Assigment operators Start */
// +=, -=, *=, /=, %=
let j = 5;
j += 2; // j= j+2;
console.log(`Add Assigment: ${j}`);
j -= 2;
console.log(`Sub Assigment: ${j}`);
j *= 6;
console.log(`Multiply Assigment: ${j}`);
j /= 4.5;
console.log(`Division Assigment: ${j}`);
j %= 2;
console.log(`Modulus Assigment: ${j}`);
/* Assigment operators End */
console.log(`\n`);

/* String operators start */
// called as concatinate operator
// + is a String operator
console.log('concate' + ' operator');
/* String operators end` */
console.log(`\n`);

/* Comparison operators start */
// >, <, >=, <=, ==, !=, ===, !==
var x1 = 2;
var x2 = 3;
if (x2 > x1) {
  console.log('(>) Greater than operator success');
}

var x1 = 2;
var x2 = 3;
if (x1 < x2) {
  console.log('(<) Less than operator success');
}

var x1 = 2;
var x2 = 3;
if (x1 <= x2) {
  console.log('(<=) Less than or equal to operator success');
}

var x1 = 2;
var x2 = 3;
if (x2 >= x1) {
  console.log('(>=) Greater than or equal to operator success');
}

var x1 = 3;
var x2 = 3;
if (x2 == x1) {
  console.log('(==) Equal to operator success');
}

var x1 = 2;
var x2 = 3;
if (x2 != x1) {
  console.log('(!=) Not equal to operator success');
}

var x1 = 2;
var x2 = 2;
if (x2 === x1) {
  console.log('(===) Strict equal to operator success');
}

var x1 = 2;
var x2 = '2';
if (x2 !== x1) {
  console.log('(!==) Not Strict equal to operator success');
}
/* Comparison operators end */
console.log(`\n`);
