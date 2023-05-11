// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입출력

// 입력 : 1 2 3 4 5
// 출력 : 5 4 3 2 1

// 입력 : 2 4 6 7 8
// 출력 : 8 7 6 4 2

// const numbers = prompt('숫자를 한 칸씩 띄어 입력하세요')
const numbers = '2 4 6 7 8'

let reverse_numbers = ''
for (let i = 0; i < numbers.length; i++) {
  reverse_numbers = numbers[i] + reverse_numbers
}

console.log(reverse_numbers)
