const sum = (...args) => {
  return [...args].reduce((prev, current, self) => {
    return (current = prev + current);
  }, 0);
};

console.log(sum(1, 2, 3, 4, 4));

const sum2 = (a) => (b) => {
  return b ? sum2(a + b) : a;
};
console.log(sum2(2)(3)());

let new_obj = { name: 'test', add: 'test' };
console.log({ ...new_obj, xxx: 'sdds' });
