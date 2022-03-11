let a = '2578456';
let arr = a.split('');

let sum = arr.map(Number).reduce((a, b) => a + b);
console.log(sum);
