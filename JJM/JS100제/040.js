// # 문제40 : 놀이동산에 가자

// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

// **원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

const limitWeight = prompt('이 놀이기구의 총 제한 무게를 입력해주세요')
const people = prompt("인원수를 입력해주세요");
let peopleWeight = this.inputWeight();

//유효성검사하는 함수
function inputWeight() {
  return prompt(
    `공백으로 사용자의 몸무게를 입력해주세요. 인원수는 ${people}입니다.`
  ).split(" ");
}

// (유효성검사)인원수와 사용자의 몸무게 입력이 맞을때까지 받는기능
while(peopleWeight.length !== people) {
  alert('사용자 입력값이 맞지 않습니다.')
   peopleWeight = this.inputWeight();
   if (peopleWeight.length == people) break;
}

let sum = 0;
let count = 0;

for (let i = 0; i < peopleWeight.length; i++) {
  if (limitWeight < peopleWeight[i]) {
    sum += parseInt(peopleWeight[i]);
    count++;
  }
}
console.log(`처음 탑승을 원한 사람은 ${people}명이고 지금 이용가능한 탑승객은 ${count}명입니다.`);
