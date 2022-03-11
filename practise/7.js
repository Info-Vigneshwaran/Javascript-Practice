// let a = '2578456';
// let arr = a.split('');

// let sum = arr.map(Number).reduce((a, b) => a + b);
// console.log(sum);

// function func1() {
//   setTimeout(() => {
//     console.log(x);
//     console.log(y);
//   }, 1000);

//   var x = 2;
//   let y = 12;
// }

// func1();

// function func2() {
//   for (var i = 0; i < 3; i++) {
//     setTimeout(() => console.log(i), 2000);
//   }
// }
// func2();

// (function () {
//   setTimeout(() => console.log(1), 2000);
//   console.log(2);
//   setTimeout(() => console.log(3), 0);
//   console.log(4);
// })();

// let x = {},
//   y = { name: 'Ronny' },
//   z = { name: 'John' };

// x[y] = { name: 'Vivek' };
// x[z] = { name: 'Akki' };

// console.log(x[y]);

// function runFunc() {
//   console.log('1' + 1);
//   console.log('A' - 1);
//   console.log(2 + '-2' + '2');
//   console.log('Hello' - 'World' + 78);
//   console.log('Hello' + '78');
// }

// runFunc();

// let a = 0;
// let b = false;
// console.log(a == b);
// console.log(a === b);

// var x = 23;

// (function () {
//   var x = 43;
//   (function random() {
//     x++;
//     console.log(x);
//     var x = 21;
//   })();
// })();

// let hero = {
//   powerLevel: 99,
//   getPower() {
//     return this.powerLevel;
//   },
// };

// let getPower = hero.getPower;

// let hero2 = { powerLevel: 42 };
// console.log(getPower());
// console.log(getPower.apply(hero2));

// const a = function () {
//   console.log(this);

//   const b = {
//     func1: function () {
//       console.log(this);
//     },
//   };

//   const c = {
//     func2: () => {
//       console.log(this);
//     },
//   };

//   b.func1();
//   c.func2();
// };

// a();

// const b = {
//   name: 'Vivek',
//   f: function () {
//     var self = this;
//     console.log(this.name);
//     (function () {
//       console.log(this.name);
//       console.log(self.name);
//     })();
//   },
// };

// b.f();

// (function (a) {
//   return (function () {
//     console.log(a);
//     a = 23;
//   })();
// })(45);

// function bigFunc(element) {
//   let newArray = new Array(700).fill('♥');
//   // console.log(newArray);
//   return (element) => newArray[element];
// }
// let new_elem = bigFunc();
// console.log(new_elem(599)); // Array is created
// console.log(new_elem(670)); // Array is created again

// console.log(~~'1' + 2);

l
