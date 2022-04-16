let arr_text = [1, 7, 8, 9, 3];
console.log(arr_text.indexOf(Math.max.apply('', arr_text)));
console.log(arr_text.indexOf(Math.min.apply('', arr_text)));
