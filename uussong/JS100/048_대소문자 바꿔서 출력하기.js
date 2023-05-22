// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

// const string = 'AAABBBcccddd'.replaceAll(' ', '')
const string = prompt('영어 대소문자를 공백없이 입력하세요').replaceAll(' ', '')
let result = ''

for (const s of string) {
  if (s === s.toUpperCase()) {
    result += s.toLowerCase()
  } else {
    result += s.toUpperCase()
  }
}

console.log(result)