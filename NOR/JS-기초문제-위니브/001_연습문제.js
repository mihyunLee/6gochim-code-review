// https://paullabworkspace.notion.site/bd7905dbc2194415b429074e75cdb7f7
/* 💡 연습문제 1번

?[1-1]. 다음 값의 평균을 구하세요.
?[1-2]. 다음 값의 분산을 구하세요.
[*hint] 분산 => (각 값에 - 평균) ** 2 값들의 평균
[*hint] 또 다른 분산식 => 각값의 제곱의 평균 - 평균의 제곱
[*hint] 루트는 ** 0.5로 씌울 수 있다.

[10, 20, 30, 10, 20, 30, 40, 10]

*/

// --- 풀이 ---

const q1 = [10, 20, 30, 10, 20, 30, 40, 10];
const avg = (q1.reduce((acc, val) => acc + val, 0) / q1.length).toFixed(2);
const boonsan = (
  q1.reduce((acc, val) => acc + (val - avg) ** 2) / q1.length
).toFixed(2);

const answer1 = `문제[1] 평균: ${avg}, 분산: ${boonsan}`;
console.log(answer1);

/* 💡 연습문제 2번

?[2]. 다음 string의 평균 값을 구하세요.
[*hint] '5, 4, 10, 2, 5'.split(',')

'5, 4, 10, 2, 5'

*/

// --- 풀이 ---

const q2 = "5, 4, 10, 2, 5";
const arr = q2.split(",");

let sum = 0;
for (item of arr) {
  sum += parseInt(item, 10);
}

const answer2 = (sum / arr.length).toFixed(2);
console.log(`문제[2] 평균: ${answer2}`);

/* 💡 연습문제 3번

?[3]. 다음 array의 각 자리수의 합을 구하세요.
[*hint] 문자열로 변환해서 풀어주세요!
=> 1+1, 2+2, 3+3, 1+1+1, 2
=> 2, 4, 6, 3, 2
=> 정답 : 17

[11, 22, 33, 111, 2]

*/

// --- 풀이 ---

const q3 = [11, 22, 33, 111, 2];
const newQ3 = q3.map((el) => (el + "").split(""));
const answer3 = newQ3.map((el) =>
  el.reduce((acc, val) => acc + parseInt(val, 10), 0)
);

console.log(`문제[3] ${answer3}`);

/* 💡 연습문제 4번

?[4-1]. 반복문만 사용하여 숫자단위 콤마 찍기
예시) 100 1000 10000 100000 => 100 1,000 10,000 100,000
?[4-2]. 반복문만 사용하여 숫자단위 콤마 없애기
얘시) 100 1,000 10,000 100,000 => 100 1000 10000 100000
?[4-3]. 문자열 뒤집기
예시) 'hello world' => 'dlrow olleh'

*/

// --- 풀이 ---

// [4-1]
let input1 = prompt("숫자 단위 변환기: 숫자를 입력해주세요");
// let input1 = "100,0000";

// ** 입력값에 (,)가 있으면 제거
if (input1.includes(",")) {
  input1 = input1.replace(",", "");
}

// ** 콤마 찍기
for (let i = input1.length - 3; i > 0; i -= 3) {
  input1 = input1.slice(0, i) + "," + input1.slice(i);
}

const answer41 = input1;

console.log(`문제[4-1] ${answer41}`);

// [4-2]
let input2 = prompt("숫자 단위 변환기: 숫자를 입력해주세요");
// let input2 = "1,000,000";

for (let i = input2.length - 3; i > 0; i -= 3) {
  input2 = input2.slice(0, i - 2) + "0" + input2.slice(i);
}

const answer42 = input2;

console.log(`문제[4-2] ${answer42}`);

// [4-3]
const input3 = prompt("뒤집을 문자를 입력해주세요.");
let s = "";

for (let i = 0; i < input3.length; i++) {
  s = input3[i] + s;
}

const answer43 = s;

console.log(`문제[4-3] ${answer43}`);

/* 💡 연습문제 5번

?[5]. 로또 번호를 추첨하는 코드를 작성해주세요.

*/

// --- 풀이 ---

// **문제 해석 => 6개의 랜덤 번호 추출
function getLotto() {
  const lotto = [];

  while (lotto.length < 6) {
    const randomN = Math.floor(Math.random() * 45) + 1;

    if (lotto.indexOf(randomN) !== -1) continue;

    lotto.push(randomN);
  }

  console.log(`이번주 로또 번호: ${lotto.join(", ")}`);
}

getLotto();
