console.log('question_1');

let arr = [2, 2, 3, 5, 9, 9, 5, 8, 1];

console.log(arr);
console.log([new Set(arr)]); // returns object
console.log([...new Set(arr)]); // returns array

let func = function () {
  {
    let l = 'let';
    var v = 'var';
  }
  console.log(v);
};

func();
