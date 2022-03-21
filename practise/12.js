var title = 'testing';
var obj = {
  title: 'testing2',
  showOne: () => {
    console.log(this.title);
  },
  showTwo: function () {
    console.log(this.title);
  },
};

obj.showOne();
obj.showTwo();
