const names = prompt("이름을 입력해주세용").split(" ");
const scores = prompt("점수를 입력해주세용").split(" ");

const result = {};

// names.forEach((names, index) => {
//   result[names] = parseInt(scores[index]);
// });

for (let i = 0; i < names.length; i++) {
  result[names[i]] = parseInt(scroes[i]);
}

alert(JSON.stringify(result));
