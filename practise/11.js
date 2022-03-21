function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj.prop;
    return true;
  } else {
    return false;
  }
}
let obj1 = { name: 'test', prop: 'prop' };

console.log(removeProperty(obj1, 'prop'));

function createCheckDigit(membershipId) {
  // Write the code that goes here.

  let addition = [...membershipId].reduce((num, i) => {
    return (new_number = Number(i) + Number(num));
  });
  let lenght = addition.toString().length;
  if (lenght > 1) {
    addition = createCheckDigit(addition.toString());
  }
  return addition;
}

console.log(createCheckDigit('55555'));

let y = '7982';
console.log([...y]);

var a = 10;
(function () {
  console.log(a);
  var a = 20;
  console.log(a);
})();

var test = () => {
  console.log(10);
};
function test() {
  console.log(20);
}
test();

var name2 = 'Zone';
var obj = {
  name2: 'test',
  showName: function () {
    console.log(this.name2);
    setTimeout(function () {
      console.log(this.name2);
    }, 2000);
  },
};
obj.showName();

function named() {
  this.name = 'check';
}

named.name3 = 'check';
console.log(named.name);
