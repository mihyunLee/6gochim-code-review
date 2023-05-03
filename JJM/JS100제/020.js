// # 문제20 : 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const input = prompt('숫자 두개를 입력해주세요. 숫자 구분은 공백으로해주세요').split(' ').map(el => Number(el))

console.log(input[0]/input[1], input[0]% input[1])
