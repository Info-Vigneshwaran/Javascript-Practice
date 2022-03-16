var first = [1, 2, 3];
var second = [2, 3, 4, 5];

var common = first.filter((x) => (second.includes(x) ? true : false));
console.log('The common elements are: ' + common);

var a = [{ name: 'tc_001' }, { name: 'tc_002' }, { name: 'tc_003' }];
a = a.filter(function (e) {
  return e.name !== 'tc_001';
});

a = [...a, { name: 'tc_004' }];
console.log(a);
