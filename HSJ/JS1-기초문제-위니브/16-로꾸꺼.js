// 문장이 입력되면 거꾸로 출력하는 코드

let str = String(prompt("문장을 적어보세요 'ㅁ'"));

let sen = str.split("").reverse().join("");

console.log(sen);

//split 지정한 구분자를 이용하여 문자열을 여러개로 나눔
//reverse 배열의 순서를 반전시킴
//join 배열의 모든 요소를 연결하여 하나의 문자열로 합침
