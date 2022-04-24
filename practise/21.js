let a = [1, 2, 3, 8, 9];
let b = [1, 2, 9, 10, 5];

const new_arr = a.filter((prev, curr, self) => {
  console.log(prev);
  if (b.indexOf(curr) == -1) {
    return curr;
  }
});
console.log(new_arr);
