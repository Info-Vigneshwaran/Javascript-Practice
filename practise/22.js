/*
- Write method findPath
- Should take two params:
    - object
    - keys separated by dots as string
- Return value if it exists at that path inside the object, else return undefined
*/

var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

const findPath = (object, path) => {
  var properties = Array.isArray(path) ? path : path.split('.');
  // console.log(properties);
  return properties.reduce((prev, curr) => {
    // console.log(prev[curr]);
    prev && prev[curr], obj;
  });
};

// console.log(findPath(obj, 'a.b.c')); // 12
// console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
// console.log(findPath(obj, 'a.b.d')); // undefined
// console.log(findPath(obj, 'a.c')); // undefined
// console.log(findPath(obj, 'a.b.c.d')); // undefined
// console.log(findPath(obj, 'a.b.c.d.e')); // undefined
// console.log(findPath(obj, 'a.b.j')); //false
// console.log(findPath(obj, 'a.b.j.k')); //undefined
// console.log(findPath(obj, 'a.k')); //null

let a = [1, 2, 3];
let b = a;
a.length = 0;
console.log(b);
