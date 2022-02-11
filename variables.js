// How to use variables:
x = 5;
y = 87;
let z = x + y;
console.log(z);

/* 
The let keyword was introduced in ES6 (2015).
Variables defined with let cannot be Redeclared.
Variables defined with let must be Declared before use.
Variables defined with let have Block Scope. 
*/
let name = 'John Doe';
// let name = '';
console.log(name);

// For loop (var) with timeout check
for (i = 0; i <= 2; i++) {
  setTimeout(function () {
    console.log('for console', i);
  }, 0);
}

// For loop (let) with timeout check
for (let i = 0; i <= 2; i++) {
  setTimeout(function () {
    console.log('for console', i);
  }, 0);
}
