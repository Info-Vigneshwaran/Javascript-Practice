function mul(a) {
  return function (b) {
    return !isNaN(b) ? mul(a * b) : a;
  };
}
console.log(mul(2)(4)(5)('add'));
