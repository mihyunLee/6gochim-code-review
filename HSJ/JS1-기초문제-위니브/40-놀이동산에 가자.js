// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다.

// 원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

let limit = parseInt(prompt("제한 무게 입력해보세용"));
let howMany = parseInt(prompt("인원수를 입력해보세용"));
//parseInt로 감싸주지 않으면 실행 결과가 다르게 나온다 .. ! 꼭 해주기

let totalWeight = 0;
let count = 0;

for (let i = 0; i < howMany; i++) {
  let friendsWeight = parseInt(prompt("몸무게를 입력해보세용"));
  totalWeight += friendsWeight;

  if (totalWeight <= limit) {
    count += 1;
  }
}

alert("탑승 가능한 인원은 " + count + "명입니다 ~ ");
