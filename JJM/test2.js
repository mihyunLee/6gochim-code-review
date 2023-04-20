//문제 2
const arr = '5, 4, 10, 2, 5'.split(',').map(el => parseInt(el))

const sum = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const result = sum / arr.length
