// # 문제47 : set 자료형의 응용

// 바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
// **중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.**

// 아래 주어진 데이터들로부터 중복을 제거하여 **실제 접수 인원을 출력**해 주세요.

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

let remove = new Set();
//중복값이 있는 배열을 Set객체로 만들어서 중복을 제거한다음
//people객체들을 하나씩 빼서 remove객체에 넣어주기위해 fot in 문을 이용해준다

for (let num in people) {
  remove.add(people[num]);
}
//set객체에 데이터를 저장하기 위해 .add를 사용해준다
//num이 갱신되면서 각각의 프로퍼티 값에 접근하면서 순차적으로 remove안에 저장해준다
console.log(remove.size);
//5

//.size를 이용해서 갯수를 반환해주도록 한다
//new Set(arr)는 배열의 데이터가 추가된 Set 객체가 생성되며, 중복은 허용되지 않기 때문에 1개의 요소만 추가됩니다

// # 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
// 입출력

// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD
const Alphabet = "AAABBBcccddd";
let arr = [];

for (let i = 0; i < Alphabet.length; i++) {
  if (Alphabet[i] === Alphabet[i].toUpperCase()) {
    //첫번째 문자가 대문자가 맞는지 확인
    arr.push(Alphabet[i].toLowerCase());
  } //대문자라면 toLowerCase()소문자로 바꿔주고
  else {
    arr.push(Alphabet[i].toUpperCase());
  } //소문자라면 대문자로 바꿔준다
}
//console.log(arr);
//(12) ['a', 'a', 'a', 'b', 'b', 'b', 'C', 'C', 'C', 'D', 'D', 'D']

console.log(arr.join(""));
//문자열로 반환해주기위해 join메서드를 사용해준다
//aaabbbCCCDDD

// # 문제49 : 최댓값 구하기

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.

// 입출력

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

let num = "10 9 8 7 6 5 4 3 2 1";
//console.log(num.split(" "))
//split(" ")을 활용해서 배열로 바꿔준다
num = num.split(" ").map((n) => {
  return parseInt(n, 10);
  //n을 10진수(정수)로 반환해준다
});
//console.log(num);
//(10) [10, 9, 8, 7, 6, 5, 4, 3, 2, 1] 숫자형으로 바꿔주었다

num.sort((a, b) => {
  return b - a;
});
//b - a 내림차순
console.log(num[0]);
//가장첫번째 값을 반환하여 최댓값을 구해준다

//map메서드는 매개변수에 들어가있는 함수를 배열의 원소들에 적용하도록 하고 그 값을
//최종적으로 다시 새로운 배열로 반환하는 메서드 입니다

//버블은 함께 해야겠습니다...✨
// # 문제50 : 버블정렬 구현하기

// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

function bubble(arr) {
  let result = arr.slice();
  //slice(2, 4) 2번째부터 4번째까지 잘라내서 새로운 배열로 반환해준다
  //매개변수(전달인자가)가 없다면 앞에 배열을 그대로 복사해서 새로운 배열로 반환해준다

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }
  return result;
}

const items = "9 5 3 2 6 7".split(" ").map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
//split(' ')공백을 기준으로 배열로 반환
//map (n = 각각의 원소들 ),순환하면서 문자열을 10진수로 만들어준다
