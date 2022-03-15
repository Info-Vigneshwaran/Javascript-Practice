function mul(a) {
  return function (b) {
    return !isNaN(b) ? mul(a * b) : a;
  };
}
console.log(mul(2)(4)(5)('add'));

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
console.log(arrayIntegers);
console.log(arrayIntegers3);

var mainString = 'helloas 34 56 88 54 11',
  subString = 'hell';
console.log(mainString.includes(subString));
console.log(mainString.match(/\d+/));

var r = /\d+/;
var s = 'you can enter maximum 500 choices';
console.log(s.match(r));

var a = 10;
var b = 15;
[b, a] = [a, b];
console.log(`${a} ${b}`);

var array = ['GFG', 'Geeks', 'for', 'Geeks'];
var value = array.shift();
console.log(`${array}`);

var array2 = ['GFG', 'Geeks', 'for', 'Geeks'];
var value2 = array2.pop();
console.log(`${array2}`);

kk = 10;
if (kk > 1) {
  kk = kk + 1;
}
console.log(kk);
var kk;

function xz(a) {
  return function (b) {
    return typeof b === 'number' ? xz(a + b) : a;
  };
}
console.log(xz(8)(9)('add'));

var s = 'test num 878';
let match_s = s.match(/\d+/);

console.log(match_s);
