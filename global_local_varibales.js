var v = 50;
function inner_scope() {
  var v1 = 50;
  console.log(`local scope ${v}`);
  console.log(`outer scope ${v1}`);
}
inner_scope();

console.log(`\n`);
console.log(`global scope ${v}`);
