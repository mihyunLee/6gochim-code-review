// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

// const vote_list = prompt('개표 결과를 입력하세요').split(' ')
const vote_list = '원범 원범 혜원 혜원 혜원 혜원 유진 유진'.split(' ')
const result = {}

let captain = ''

for (const vote of vote_list) {
  if (result[vote]) {
    result[vote] += 1
  } else {
    result[vote] = 1
  }
}

let count = 0

Object.entries(result).forEach(item => {
  if (count < item[1]) {
    count = item[1]
    captain = item[0]
  }
  
})

console.log(`${captain}(이)가 총 ${result[captain]}표로 반장이 되었습니다.`)