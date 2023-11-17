//문제60 : 번호 매기기

//데이터
students = [
  '강은지',
  '김유정',
  '박현서',
  '최성훈',
  '홍유진',
  '박지호',
  '권윤일',
  '김채리',
  '한지호',
  '김진이',
  '김민호',
  '강채연',
]
const solution = students => {
  let temp = [...students].sort()
  for (let i = 0; i < temp.length; i++) {
    console.log(`번호: ${i + 1}, 이름 : ${students[i]}`)
  }
}

solution(students)
