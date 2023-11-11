// 1번
let answer = 0
let str = ''
for (let i = 0; i <= 1000; i++) {
  str += i
}
for (let num of str) {
  if (num === '1') {
    answer += 1
  }
}
console.log(answer)

// 2번 정규표현식 활용

let answer2 = 0
let str2 = ''
for (let i = 0; i <= 1000; i++) {
  str2 += i
}
console.log(str2.match(/1/g).length)
