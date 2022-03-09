const calculation = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  multi(a) {
    this.total *= a;
    return this;
  },
  sub(a) {
    this.total -= a;
    return this;
  },
};
let calc = calculation.add(2).multi(3).multi(8);
console.log(calc.total);

//https://github.com/Ebazhanov/linkedin-skill-assessments-quizzes/blob/master/javascript/javascript-quiz.md

var value = 2568,
  sum = value
    .toString()
    .split('')
    .map(Number)
    .reduceRight(function (a, b) {
      return a + b;
    }, 0);

console.log(sum);

var value = 2568,
  sum = 0;

while (value) {
  sum += value % 10;
  value = Math.floor(value / 10);
}

console.log(sum);

function a() {
  let a = 'ABC';
  return function () {
    let b = 'def';
    console.log(a, b);
  };
}
let x = a();
x();
