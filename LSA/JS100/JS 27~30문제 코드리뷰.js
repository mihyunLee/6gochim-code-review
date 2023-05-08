// # 문제27 : 객체 만들기
// 첫번째 입력에서는 학생의 이름이 공백으로 구분되어 입력되고,
// 두번째에는 그 학생의 수학 점수가 공백으로 구분되어 주어집니다.
// 두 개를 합쳐 **학생의 이름이 key**이고 **value가 수학 점수**인 객체를 출력해주세요.

// 입력
// Yujin Hyewon
// 70 100

// 출력
// {'Yujin': 70, 'Hyewon': 100}

const key = ["Yijin", "Hyewon"];
const value = ["70", "100"];
let score = {};

for (let i = 0; i < key.length; i++) {
  score[key[i]] = value[i];
}
console.log(score);

//i는 key갯수만큼 돈다 
// i가 0이라면 "Yijin"
// i가 1이라면 "Hyewon"


// # 문제28 : 2-gram
// **2-gram**이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다.
// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

// ```jsx
// **입력**
// Javascript

// **출력**
// J a
// a v
// v a
// a s
// s c
// c r
// r i
// i p
// p t
// ```

// 입력으로 문자열이 주어지면 **2-gram**으로 출력하는 프로그램을 작성해 주세요.
 const gram = "Javascript"
 
 for(let i=0; i<gram.length; i++)

 console.log(gram[i], gram[i+1])


// # 문제29 : 대문자만 지나가세요
// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.
// **알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.

const Alpabet = prompt();
if (Alpabet == Alpabet.toUpperCase()){
    console.log("YES")
} else {
    console.log("NO")
}

// # 문제30 : 문자열 속 문자 찾기
// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.
// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// **그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요
const string = prompt("")
const findstring = prompt("")

consolr.log(string.indexOf(findstring))

//indexOf() 메서드는 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
const pin = prompt("pineapple🍍")
const app = prompt("apple 🍎")

console.log(pin.indexOf(app))
