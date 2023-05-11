//한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

const input = prompt("숫자만 입력해주세용").split("").reverse();

let result = input.reduce((acc, curr) => acc + curr, "");
if (/^\d+$/.test(result)) {
  alert(result);
} else {
  alert("숫자만 입력하랬지 ,,!!");
}

// 정규표현식으로 검사
// /^\d+$/
// ^ : 문자열의 시작부터
// \d : 0부터 9까지의 숫자가
// + : 1개 이상
// $ : 문자열의 끝까지
