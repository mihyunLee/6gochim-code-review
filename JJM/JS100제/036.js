// # 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

const input = prompt('1~9까지의 숫자 중 하나를 입력해주세요');

let arr = [];
for(let i=1; i <10; i++) {
  arr.push(input * i)
}
console.log(arr.join(' '))
