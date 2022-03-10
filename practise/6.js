const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(2 + true);
console.log(+'dude');

console.log(typeof null);
console.log(typeof undefined);
delete obj.a;
console.log(obj);

let arrA = [1, 2, 3, 4, 5, 6, 7];
let length1 = arrA.length / 2;
let length = arrA.length;
j = 0;
let arrB = arrA.flatMap((x, i) => {
  console.log(i);
  if (i < length1) {
    return [
      [arrA[i] ?? arrA[i], arrA[length - (i + 1)] ?? arrA[length - (i + 1)]],
    ];
  }
});
console.log(arrB);

let str = 'my name is quest';
let reverse_str = str
  .split(' ')
  .map((str2, i) => {
    return str2.split('').reverse().join('');
  })
  .join();
console.log(reverse_str.replaceAll(',', ' '));
