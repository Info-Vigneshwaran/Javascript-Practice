let true_array = [true, true, true, false, false, true];

const countTrue = (check_array, check_value) => {
  let new_array = check_array.filter((value) => {
    if (check_value === value) {
      return value;
    }
  });
  return new_array.length;
};

const countTrue2 = (r) => r.filter((x) => x == true).length;
console.log(countTrue2(true_array));
// console.log(countTrue(true_array, true));

const leapYear = (year) => (year % 4 == 0 ? true : false);
console.log(leapYear(2000));
