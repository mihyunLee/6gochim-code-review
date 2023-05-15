// # 문제38 : 호준이의 아르바이트

// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다.
//그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// **학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**


// 오류가 나는데 ㅜㅜ 다시 수정할게여 ㅜ 
//설계방향은 
//1. 입력값을 sort로 내림차순으로 정렬함
//2. Map으로 점수를 기준으로 동점자 구분을 위해 데이터 형태로 넣어줌 97:3 이런식
//3. Map으로 들어간 value만 배열로 만들어서 배열의 0,1,2 자리의 값만 더해서 리턴

function rank(input) {
  let scoreArr = input.split(" ").sort((a, b) => b - a);
  let rankArr = [];
  let answer = 0;

  // 점수를 기준으로 해당점수가 몇명인지를 키와 밸류로 객체데이터로 만듦
  let rankMap = new Map();
  for (let i of scoreArr) {
    if (rankMap.has(i)) {
      rankMap.set(i, cnt.get(i) + 1);
    } else {
      rankMap.set(i, 1);
    }
  }
  //배열로 만들어주기
  rankMap.forEach((v) => {
    rankArr.push(v);
  });
  for (let i = 0; i < 3; i++) {
    answer += rankArr[i];
  }

  console.log(answer);
}

rank(97, 86, 75, 66, 55, 97, 85, 97, 97, 95);
