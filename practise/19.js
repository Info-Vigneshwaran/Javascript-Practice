// const set_Time = setTimeout(() => {
//   console.log('sdfkj');
// }, 0);
// clearTimeout(set_Time);
// const set_inter = setInterval(() => {
//   console.log('Sf');
// }, 1000);

// clearInterval(set_inter);

// let a = 10;
// console.log(a);
// a = 20;
// console.log(a);

let counts_arr = [
  { installed: 10, uninstalled: 10 },
  { installed: 4, uninstalled: 5 },
  { installed: 15, uninstalled: 11 },
  { installed: 10, uninstalled: 10 },
];
let new_installed = 0;
let new_uninstalled = 0;
a();
function a() {
  // console.log('sdfsdf');
}
let count_arr = counts_arr.reduce((prev, curr, index, self) => {
  new_installed += curr.installed;
  new_uninstalled += curr.uninstalled;
  return { installed: new_installed, uninstalled: new_uninstalled };
}, {});
// console.log(count_arr);

for (var index = 1; index <= 3; index++) {
  ((index) => {
    setTimeout(() => {
      // console.log('after ' + index + ' second(s):' + index);
    }, index * 1000);
  })(index);
}

const x = () => {
  let a = 'test';
  return ((b) => {
    // console.log(a);
  })();
};
x();

let xb = () => {
  console.log('console 1');
  setTimeout(() => {
    console.log('timeout console');
  }, 1000);
  console.log('console 2');
  let promise_check = new Promise((resolve, reject) => {
    resolve(console.log('resolve'));
  });
};
// xb();

let unsorted = [-2, -1, -5, 5, 1, 9, 3, 0, 7];
let sort_arr = unsorted
  .sort((a, b) => {
    return a < b ? 0 : 1;
  })
  .map((val, index) => {
    return val * val;
  });
// console.log(sort_arr);
