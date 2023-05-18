// # 문제43 : 10진수를 2진수로

// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// **사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.**

const num = Number(prompt("숫자를 입력해 주세요"));
console.log(num.toString(2));

//toString()은 선택적으로 기수(radix)를 매개변수로 취합니다
//기수를 이용함으로써 10진수를 (1, 2, 3, 4, 5...) 다른 진수로 변환할 수 있습니다

// # 문제44 : 각 자리수의 합

// **사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

// **예를들어**
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// 입출력

// 입력 : 18234
// 출력 : 18

// 입력 : 3849
// 출력 : 24

function num(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + parseInt(cur), 0);
}

// # 문제45 : getTime()함수 사용하기

// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 **현재 연도(2019)를 출력해보세요.**
let lastYear = new Date();

let year = lastYear.getFullYear(); //년도
let month = lastYear.getMonth() + 1; //월
let date = lastYear.getDate(); //날짜
let day = lastYear.getDay(); //요일

document.write(year + "" + month + "" + date);
document.write("<br>");
document.write(day);

// getFullYear() - Date 객체의 년도를 가져옵니다.
// getMonth() - Date 객체의 월 정보를 가져옵니다. 1월은 0으로 표현됨을 주의해야 합니다. (0~11)
// getDate() - Date 객체의 일자 정보를 가져옵니다. (0~31)
// getDay() - Date 객체의 요일 정보를 가져옵니다.(0~6)

// # 문제46 : 각 자리수의 합 2

// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요.

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

let inputNum = 101112131415;
let stringNum = inputNum.toString();
let result = 0;

for (let i = 0; i < stringNum.length; i++) {
  result += parseInt(stringNum[i]);
}

console.log(result);
