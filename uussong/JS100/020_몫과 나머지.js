// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

const number = prompt('숫자를 입력하세요').split(' ')
// const number = ['1', '2']
const [num1, num2] = number.map(item => parseInt(item))

const quotient = Math.floor(num1 / num2)
const remainder = num1 % num2

console.log(quotient, remainder)