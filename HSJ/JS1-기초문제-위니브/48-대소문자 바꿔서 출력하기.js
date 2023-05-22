// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

const input = prompt("영어를 입력해주세용");
let result = input
  .split("")
  .map((word) => {
    if (word === word.toUpperCase()) {
      return word.toLocaleLowerCase();
    } else {
      return word.toUpperCase();
    }
  })
  .join("");

console.log(result);
