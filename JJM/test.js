// https://paullabworkspace.notion.site/bd7905dbc2194415b429074e75cdb7f7
/* 💡 연습문제 1번

[1-1]. 다음 값의 평균을 구하세요.
[1-2]. 다음 값의 분산을 구하세요.
[*hint] 분산 => (각 값에 - 평균) ** 2 값들의 평균
[*hint] 또 다른 분산식 => 각값의 제곱의 평균 - 평균의 제곱
[*hint] 루트는 ** 0.5로 씌울 수 있다.

[10, 20, 30, 10, 20, 30, 40, 10]

*/

//[1-1]. 다음 값의 평균을 구하세요.
const arr1 = [10, 20, 30, 10, 20, 30, 40, 10]
const result1 = arr1.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);
const average = result1 / arr1.length;

//[1-2]. 다음 값의 분산을 구하세요.

const boonsan = arr1.map((el) => (el - average) ** 2)

const boonsanSum = boonsan.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const result2 = boonsanSum / boonsan.length;


/* 💡 연습문제 2번

[2]. 다음 string의 평균 값을 구하세요.
[*hint] '5, 4, 10, 2, 5'.split(',')

'5, 4, 10, 2, 5'

*/
const arr = '5, 4, 10, 2, 5'.split(',').map(el => parseInt(el))

const sum = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);

const result = sum / arr.length
