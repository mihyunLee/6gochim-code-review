// # 문제49 : 최댓값 구하기

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

const input = prompt(
  "숫자 열개를 공백을 기준으로 입력해주세요!"
).split(' ').map(el=> parseInt(el));

// 전개구문으로 다 풀어서 해줘야지 max 가 먹힘
console.log(Math.max(...input))
