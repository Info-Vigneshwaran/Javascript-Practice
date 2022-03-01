function add(a, b) {
  this.a = a;
  this.b = b;
  console.log(` ${this.a + this.b}`);
}

add.prototype.AssignA = function (a) {
  this.a = a;
  console.log(` ${this.a + this.b}`);
};

add.prototype.AssignB = function (b) {
  this.b = b;
  console.log(` ${this.a + this.b}`);
};
const a = new add(10, 10); // 20
a.AssignA(20); // 30
a.AssignB(30); // 50

var sort_arr = [245, 5, 8, 56, 265, 2656];

// let's convert it to a real array of numbers, not of strings :
var intArray = sort_arr.map(Number);

// now let's sort it and take the second element :
var second = intArray.sort(function (a, b) {
  return b - a;
})[1];
console.log(second);
