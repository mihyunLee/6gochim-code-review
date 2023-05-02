// 문장이 입력되면 거꾸로 출력하는 코드

let str = String(prompt("문장을 적어보세요 'ㅁ'"));

let sen = str.split("").reverse().join("");

console.log(sen);

//split 지정한 구분자를 이용하여 문자열을 여러개로 나눔
//reverse 배열의 순서를 반전시킴
//join 배열의 모든 요소를 연결하여 하나의 문자열로 합침

//조건문 이용

const string = "거꾸로";

let answer = "";
for (const i of string) {
  answer = i + answer;
}
//string의 경우에 i의 각 문자를 빈 문자열 앞에 하나씩 붙여가면서 역순을 만들 수 있다 !

console.log(answer);
