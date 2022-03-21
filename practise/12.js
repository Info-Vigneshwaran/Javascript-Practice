// var title = 'testing';
// var obj = {
//   title: 'testing2',
//   showOne: () => {
//     console.log(this.title);
//   },
//   showTwo: function () {
//     console.log(this.title);
//   },
// };

// obj.showOne();
// obj.showTwo();

// function testOne() {
//   var a = 100;
//   {
//     let a = 200;
//   }
//   console.log(a);
// }
// function testTwo() {
//   {
//     var a = 100;
//     // let a = 200;
//   }
//   console.log(a);
// }

// testOne();
// testTwo();

// setTimeout(() => {
//   console.log('One First');
// }, 0);
// console.log('Two First');

// setTimeout(function () {
//   console.log('One First');
// }, 0);
// console.log('Two First');

var title = ['test', 'test2'];
title[0] = 'sdfhk';
title[1][0] = 'dskghjk';
console.log(`Array - ${title} `);
