var varible = 10;
(() => {
  varible_3 = 35;
  console.log(varible_3);
  var varible_3 = 45;
  varible_2 = 25;
  console.log(varible);
})();

console.log(varible_2);
// console.log(varible_3); // varible_3 is not defined

/* without using let datatype 4 as output */
/* with using let datatype 0,1,2,3 as output */
for (k = 0; k < 4; k++) {
  setTimeout(() => {
    console.log(k);
  }, 0);
}

for (j = 0; j < 4; j++) {
  con_time(j);
}
function con_time(j) {
  setTimeout(() => {
    console.log(j);
  }, 0);
}

for (let k = 0; k < 4; k++) {
  setTimeout(() => {
    console.log(k);
  }, 0);
}

let count = (function () {
  k = 0;
  return () => k++;
})();
console.log('\n');
console.log(`test ${count()}`);
console.log(`test ${count()}`);
console.log(`test ${count()}`);
