//문제1-1
const arr1 = [10, 20, 30, 10, 20, 30, 40, 10]

const result1 = arr1.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const average = result1 / arr1.length;

//문제1-2

const boonsan = arr1.map((el) => (el - average) ** 2)

const boonsanSum = boonsan.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const result2 = boonsanSum / boonsan.length;
