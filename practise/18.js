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
// console.log(str.join('').split(''));
let x = [
  [1, 36, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 50],
];
// console.log(x.reshape(4));

var matrix = [
  [1, 2, 3, 4],
  [4, 5, 6, 5],
  [7, 8, 9, 6],
];

let new_matrix = matrix[0].map((val, index) => {
  // console.log(index);
  return matrix
    .map((row) => {
      // console.log(row[index]);
      return row[index];
    })
    .reverse();
});
// console.log(new_matrix);

let stat_arr = [1, 1, 1, 2, 2, 22, 2, 2, 2, 3, 3, 4];

var unique = stat_arr.reduce((acc, curr) => {
  return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
}, {});

// console.log(stat_arr.values());
let result = {};

for (var i = 0; i < stat_arr.length; ++i) {
  if (!result[stat_arr[i]]) result[stat_arr[i]] = 0;
  ++result[stat_arr[i]];
}

console.log(result);
