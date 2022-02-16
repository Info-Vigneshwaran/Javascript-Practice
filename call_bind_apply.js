/* call method example start */
var obj1 = {
  num: 2,
  age: '47',
};

var obj2 = {
  f1: function (a, b, c) {
    console.log(`Call method example ${this.num + a}`);
    console.log(`Call method example ${this.age} text`);
    console.log(`Call method example ${this.age} ${b} ${c} text`);
  },
};
obj2.f1.call(obj1, 2, 'Hello', 'World');
/* call method example end */
console.log('\n');

/* apply method example start */
var obj1 = {
  num: 2,
  age: '47',
};

var obj2 = {
  f1: function (a, b, c) {
    console.log(`Call method example ${this.num + a}`);
    console.log(`Call method example ${this.age} text`);
    console.log(`Call method example ${this.age} ${b} ${c} text`);
  },
};
obj2.f1.apply(obj1, [2, 'Hello', 'World']);
/* apply method example end */
console.log('\n');

/* bind method example start */
var obj1 = {
  num: 2,
  age: '47',
};

var obj2 = {
  f1: function (a, b, c) {
    console.log(`Call method example ${this.num + a}`);
    console.log(`Call method example ${this.age} text`);
    console.log(`Call method example ${this.age} ${b} ${c} text`);
  },
};
var b1 = obj2.f1.bind(obj1, 2, 'Hello', 'World'); // bind method creates new object
b1();
/* bind method example end */
