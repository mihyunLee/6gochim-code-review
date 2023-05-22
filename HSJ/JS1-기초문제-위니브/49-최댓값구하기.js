// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

const input = prompt("10개의 숫자를 공백으로 구분하여 입력해보세용").split(" ");

let max = input[0];

for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
  }
}

console.log(max);
