//입력받는 문자열 쪼개서 배열에 담기
// const input = prompt("아무 말이나 입력해보세용").split("");

// for(i = 0; i < input.length; i++) {

// }

// 챗센세에게 물어봤지만 .. 이해가 가지 않아 . . 어떻게 접근하면 좋을지 .. 방법을 알려주세요 최강 육고침 . . .!!
const input = prompt("문자열을 입력하세요.");
const n = input.length - 1;
// 왜 -1을 하는걸까(?)
const result = [];

for (let i = 0; i < n; i++) {
  const bigram = input.slice(i, i + 2);
  result.push(bigram);
}

alert(result);
