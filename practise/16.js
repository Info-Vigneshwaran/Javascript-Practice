// Add a new method
Array.prototype.myUcase = () => {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i].toUpperCase();
  }
};

// Use the method on any array
const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

console.log(fruits.myUcase());
