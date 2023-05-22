// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요

const num = prompt("양의 정수를 입력하세용");
const numArr = num.toString().split("").map(Number);
// 1. 입력받은 숫자를 문자열로 변환
// 2. split으로 각 요소를 쪼갬
// 3. 배열의 각 요소를 숫자로 변환
const result = numArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(`각 자리수의 합은 ${result} 입니당`);
