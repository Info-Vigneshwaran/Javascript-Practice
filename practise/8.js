let str = 'test new gues';
let convert = str.split(' ').map((str) => {
  return str.charAt().toUpperCase();
});
console.log(convert);

const users = [
  { name: 'John', id: 1, city: 'Delhi' },
  { name: 'Max', id: 2, city: 'London' },
  { name: 'Rod', id: 3, city: 'Paris' },
];
console.table(users);
