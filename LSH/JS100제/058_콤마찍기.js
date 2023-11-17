// 문제 58 : 콤마찍기

// 원범이는 편의점 아르바이트가 끝난 후 정산을 하고자 합니다.
// 정산을 빨리하고 집에 가고 싶은 원범이는 프로그램을 만들려고 합니다.
// 숫자를 입력받고 천 단위로 콤마(,)를 찍어주세요.
// 예를 들어, 123456789를 입력받았으면 123,456,789를 출력해야 합니다.

// 나의 풀이
const solution = num => {
  let newArr = String(num).split('')
  let cnt = 0
  for (let i = newArr.length - 1; i >= 0; i--) {
    if ((cnt % 3 == 0) & (i != newArr.length - 1)) {
      newArr.splice(i + 1, 0, ',')
    }
    cnt++
  }
  console.log(newArr.join(''))
}

// 다른사람의 풀이

// 1. 내장함수 사용 toLocaleString()
const solution2 = num => {
  console.log(num.toLocaleString())
}
// solution2(123456789)

// 2. 재귀함수 사용
function comma(s) {
  if (s.length <= 3) {
    return s
  } else {
    console.log(s)
    return comma(s.slice(0, s.length - 3)) + ',' + s.slice(s.length - 3)
  }
}

// console.log(comma('123456789'))
let a = '12345'

console.log(a.slice(2))
console.log(a)
