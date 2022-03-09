// compose poly fill
const compose =
  (...args) =>
  (ar) =>
    args.reduceRight((res, fn) => fn(res), ar);
const muti = (a) => a / 20;
const add = (a) => a + 20;

const cp = compose(add, muti);
console.log(cp(5));

let f = '8';
let a = 1;
console.log(+f + a + 1);
console.log(f + a + 1);

function* fun() {
  yield 10;
  yield 20;
  yield 30;
}

// Calling the Generate Function
var gen = fun();
console.log(gen.next().value);
console.log('<br>');
console.log(gen.next().value);
console.log('<br>');
console.log(gen.next().value);
