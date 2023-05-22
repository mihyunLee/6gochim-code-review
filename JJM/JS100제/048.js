// # 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

const input = prompt(
  "알파벳을 대문자는 소문자로 소문자는 대문자로 출력해줍니다."
);
let answer = "";
// 문자의 인덱스를 하나씩 돌면서 만약 대문자이면 소문자로 answer에 더해주고, 아니면 대문자로 더해줌
for (let i = 0; i < input.length; i++) {
  input[i] === input[i].toUpperCase()
    ? (answer += input[i].toLowerCase())
    : (answer += input[i].toUpperCase());
}

console.log(answer);
