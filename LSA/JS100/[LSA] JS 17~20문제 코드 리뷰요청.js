// # 문제17 : 놀이기구 키 제한

// 유주는 놀이공원 아르바이트 중입니다. 그런데 놀이기구마다 키 제한이 있습니다.
// 유주가 담당하는 놀이기구는 키가 150cm 이상만 탈 수 있습니다.

// 입력으로 키가 주어지면
// 키가 150이 넘으면 **YES**를 틀리면 **NO**를 출력하는 프로그램을 작성하세요.

const key = parseInt(prompt("키컸으면.....당키몇...?"));

if (150 < key) {
  console.log("yes");
} else if (150 > key) {
  console.log("no");
}

// # 문제18 : 평균 점수

// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.

// 공백으로 구분하여 세 과목의 점수가 주어지면 **전체 평균 점수**를 구하는 프로그램을 작성하세요.
// **단, 소숫점 자리는 모두 버립니다.**
const k = Number(prompt("국어 점수를 알려주세요 "));
const e = Number(prompt("영어 점수를 알려주세요 "));
const m = Number(prompt("수학 점수를 알려주세요 "));

const sum = (k + e + m) / 3;
console.log(('평균은: '+ sum))

//Math.floor : 주어진 값보다 이하의 가장 큰 정수를 반환한다 

// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

const ab = prompt('a와 b의 값을 입력하세요 ').split("");
console.log(Math.pow(parseInt(ab[0], 10), parseInt(ab[1], 10)));

//**Math.pow()**함수는base^exponent처럼 base 에 exponent를 제곱한 값을 반환합니다.
//ab[0] = base 값
//ab[1] = 몇승인지 정하는 숫자
//const ab = ["2"," 6"]
//console.log(Math.pow(parsInt(ab[0], 10), parsInt(ab[1], 10)));
//2의 6승
//pow 숫자형 문자도 가능하지만 숫자로 바꿔서 사용하는게 확실하다 
//(Math.pow(parsInt(ab[0], 10) 10은 10진수라는 뜻

//문제20 : 몫과 나머지
// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.


const num = ["10","2"]

let sum1 = Math.floor(parseInt(num[0], 10)/parseInt (num[1], 10));
console.log(sum1)

let sum2 = parseInt(num[0], 10)%parseInt(num[1], 10);
console.log(sum1,sum2)

//Math.floor() 함수는 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환합니다.
