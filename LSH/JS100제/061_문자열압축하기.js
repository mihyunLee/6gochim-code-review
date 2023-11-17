//문제61 : 문자열 압축하기
// 입력
// aaabbbbcdddd

// 출력
// a3b4c1d4

// 나의 풀이
const solution = s => {
  let result = ''
  let cnt = 1
  let sortedString = s.split('').sort().join('')

  for (let i = 0; i < sortedString.length; i++) {
    if (sortedString[i] === sortedString[i + 1]) {
      cnt++
    } else {
      result += sortedString[i] + cnt
      cnt = 1
    }
  }
  return result
}

// 다른사람의 풀이

const user_s = new String(prompt('문자열을 입력하세요'))
let result_s = ''
let store_s = user_s[0]
let count = 0

for (let i of user_s) {
  if (i === store_s) {
    count += 1
  } else {
    result_s += store_s + String(count)
    store_s = i
    count = 1
  }
}

result_s += store_s + String(count)
console.log(result_s)
