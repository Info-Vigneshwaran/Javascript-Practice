// compose poly fill
const compose =
  (...args) =>
  (ar) =>
    args.reduceRight((res, fn) => fn(res), ar);
const muti = (a) => a / 20;
const add = (a) => a + 20;

const cp = compose(add, muti);
console.log(cp(5));
