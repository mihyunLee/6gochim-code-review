//? 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

let nationWidth = {
  korea: 220877,
  Rusia: 17098242,
  China: 9596961,
  France: 543965,
  Japan: 377915,
  England: 242900,
}

let answer = 0
let nations = ['Rusia', 'China', 'France', 'Japan', 'England']
let gapArr = []

// 한국의 면적과의 차이를 배열에 저장해준다.
for (let i = 0; i < 5; i++) {
  let gap = Math.abs(nationWidth[nations[i]] - 220877)
  gapArr.push(gap)
}
// 차이를 담은 배열을 오름차순으로 정렬해준다.
gapArr.sort((a, b) => a - b)

// 차이가 가장 적은 나라와 그 차이 값을 구해준다.
for (let i = 0; i < 5; i++) {
  let gap = Math.abs(nationWidth[nations[i]] - 220877)
  if (gapArr[0] === gap) {
    answer = `${nations[i]} ${gapArr[0]}`
  }
}
console.log(answer)

//? 답안

const w = nationWidth['korea']

delete nationWidth['korea']

const entry = Object.entries(nationWidth)
const values = Object.values(nationWidth)

//gap에 최댓값 저장
let gap = Math.max.apply(null, values)
let item = []

for (let i in entry) {
  if (gap > Math.abs(entry[i][1] - w)) {
    gap = Math.abs(entry[i][1] - w)
    item = entry[i]
  }
}

console.log(item[0], item[1] - w)
