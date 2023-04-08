// https://paullabworkspace.notion.site/bd7905dbc2194415b429074e75cdb7f7
/* 💡 연습문제 1번

[1-1]. 다음 값의 평균을 구하세요.
[1-2]. 다음 값의 분산을 구하세요.
[*hint] 분산 => (각 값에 - 평균) ** 2
[*hint] 루트는 ** 0.5로 씌울 수 있다.

[10, 20, 30, 10, 20, 30, 40, 10]

*/

// --- 풀이 ---
// [1-1]
arr = [10, 20, 30, 10, 20, 30, 40, 10]
let sum = 0
for (const item of arr) {
  sum += item
}
avg = sum / arr.length
console.log(avg)

// [1-2]
let v = 0
for (const item of arr) {
  v += (item - avg) ** 2
}
v = v / arr.length
console.log(v)


/* 💡 연습문제 2번

[2]. 다음 string의 평균 값을 구하세요.
[*hint] '5, 4, 10, 2, 5'.split(',')

'5, 4, 10, 2, 5'

*/

// --- 풀이 ---
arr = '5, 4, 10, 2, 5'.split(',')
let sum = 0
for (const item of arr) {
  sum += parseInt(item)
}
avg = sum / arr.length
console.log(avg)

/* 💡 연습문제 3번

[3]. 다음 array의 각 자리수의 합을 구하세요.
[*hint] 문자열로 변환해서 풀어주세요!
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17

[11, 22, 33, 111, 2]

*/

// --- 풀이 ---
arr = [11, 22, 33, 111, 2].join('').split('')
let sum = 0
for (const item of arr) {
  sum += parseInt(item)
}
console.log(sum)

/* 💡 연습문제 4번

[4-1]. 반복문만 사용하여 숫자단위 콤마 찍기
예시) 100 1000 10000 100000 => 100 1,000 10,000 100,000
[4-2]. 반복문만 사용하여 숫자단위 콤마 없애기
얘시) 100 1,000 10,000 100,000 => 100 1000 10000 100000
[4-3]. 문자열 뒤집기
예시) 'hello world' => 'dlrow olleh'

*/

// --- 풀이 ---
// [4-1]
let num = 1000000
num = num.toString()
for (let i = num.length - 3; i > 0; i -= 3) {
  num = num.slice(0, i) + ',' + num.slice(i)
}

// [4-2]
let num = '1,000,000'
for (let i = num.length - 4; i > 0; i -= 4) {
  num = num.slice(0, i) + num.slice(i+1)
}

// [4-3]
const str = 'hello world'
let result = ''
for (const i of str) {
  result = i + result
}

/* 💡 연습문제 5번

[5]. 로또 번호를 추첨하는 코드를 작성해주세요.

*/

// --- 풀이 ---
const lotto = []
while (lotto.length < 6) {
  num = Math.floor((Math.random() * 45) + 1)
  if (!lotto.includes(num)) {
    lotto.push(num)
  }
}
console.log(lotto.sort((a, b) => a - b))
