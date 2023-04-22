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

/* 💡 연습문제 3번(x)

[3]. 다음 array의 각 자리수의 합을 구하세요.
[*hint] 문자열로 변환해서 풀어주세요!
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

[11, 22, 33, 111, 2]

*/


/* 💡 연습문제 4번

[4-1]. 반복문만 사용하여 숫자단위 콤마 찍기
예시) 100 1000 10000 100000 => 100 1,000 10,000 100,000
[4-2]. 반복문만 사용하여 숫자단위 콤마 없애기
얘시) 100 1,000 10,000 100,000 => 100 1000 10000 100000
[4-3]. 문자열 뒤집기
예시) 'hello world' => 'dlrow olleh'

*/

//[4-3]. 문자열 뒤집기
const str = 'hello world';
const answer = str.split("").reverse().join("")


/* 💡 연습문제 5번

[5]. 로또 번호를 추첨하는 코드를 작성해주세요.
*/

const lotto = [];

for(let i = 0; i <7; i++) {
  lotto.push(parseInt(Math.random() * 45 + 1));
}

