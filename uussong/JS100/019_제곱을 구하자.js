// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

const number = prompt('숫자를 입력하세요').split(' ')
// const number = ['1', '2']
const [a, b] = number.map(item => parseInt(item))

const num = a ** b
console.log(num)