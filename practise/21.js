let a = [1, 2, 3, 8, 9];
let b = [1, 2, 9, 10, 5];

const new_arr = a.filter((prev, curr, self) => {
  if (b.indexOf(curr) == -1) {
    return curr;
  }
});

// let dup_`arr = [2, 1, 1, 2, 3, 8, 9, 9, 5, 3];
let dup_arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd', 'g'];
let uni_arr = dup_arr.filter((value, index, self) => {
  return self.indexOf(value) != index;
});
console.log([...new Set(uni_arr)]);

// let uni_arr3 = dup_arr.reduce((prev, curr, index, self) => {
//   return self.indexOf(curr) != index;
// }, {});
// console.log(uni_arr3);

let y = String(7982);
let new_sum = [...y].reduce((prev, curr) => {
  // console.log(curr);
  return (curr = Number(prev) + Number(curr));
}, 0);

console.log(new_sum);

