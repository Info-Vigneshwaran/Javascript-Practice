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
