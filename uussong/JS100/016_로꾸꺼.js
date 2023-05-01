// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.
// 입출력

// 입력 : 거꾸로
// 출력 : 로꾸거

// const string = prompt('문장을 입력하세요.')
const string = '거꾸로'

let answer = ''
for (const i of string) {
  answer = i + answer
}

console.log(answer)