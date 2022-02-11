/* If Statment start*/
let x = 5;
if (x == 5) {
  console.log(true);
}
console.log('\n');
/* If Statment end*/

/* If-else Statment start*/
let p = 8;
if (p > 5) {
  console.log('If Section Success ', p, true);
} else {
  console.log('Else Section Success ', p, false);
}
console.log('\n');
/* If-else Statment end*/

/* If-else-if Statment start*/
let q = 8;
if (q < 5) {
  console.log('If Section Success  ', q, true);
} else if (q == 8) {
  console.log('Else-If Section Success ', q, true);
} else {
  console.log('Else Section Success ', q, false);
}
console.log('\n');
/* If-else-if Statment end*/

/* Nested If Statment start*/
let oo = 11;
if (oo > 10) {
  if (oo >= 15 && oo <= 35) {
    console.log('Nested If Section Success  ', oo, true);
  } else {
    console.log('Nested Else Section Success  ', oo, true);
  }
} else {
  console.log('Else Section Success  ', oo, true);
}

console.log('\n');
/* Nested If Statment end*/
