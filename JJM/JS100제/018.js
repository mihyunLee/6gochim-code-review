// # 문제18 : 평균 점수

// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요. 
// **단, 소숫점 자리는 모두 버립니다.**

const score = prompt('국어 영어 수학 띄어쓰기로 구분해서 입력해주세욤')

// 입력받은 값을 배열로 변환하고, 입력받은 값은 문자열이기때문에 합하기위해선 숫자로 변환함
let inpArr = score.split(" ").map(el=>Number(el))
let sum = inpArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(parseInt(sum/inpArr.length))
