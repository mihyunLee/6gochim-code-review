// 입력
// 5

// 출력
//     *
//    ***
//   *****
//  *******
// *********


// const n = prompt('숫자를 입력하세요')
const n = 5

for (let i = 1; i < 2 * n; i += 2) {
  console.log(' '.repeat(Math.floor((2 * n - i) / 2)) + '*'.repeat(i))
}
