Array.prototype.reshape = function (flate) {
  let grid = this.flat(Infinity);
  let new_grid = grid.sort((a, b) => {
    return a > b ? 1 : -1;
  });
  let new_grid2 = new_grid.reduce((prev, curr, index) => {
    return index % flate == 0
      ? prev.concat([new_grid.slice(index, index + flate)])
      : prev;
  }, []);
  return new_grid2;
};

let str = ['h', 'e', 'l'];
// console.log(str.join(''));
let x = [
  [1, 36, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
// console.log(x.reshape(4));

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let new_matrix = matrix[0].map((val, index) => {
  // console.log(index);
  return matrix
    .map((row) => {
      return row[index];
    })
    .reverse();
});
console.log(new_matrix);
