// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

const input = prompt("누구를 뽑았나요💬?");
inputArr = input.split(" ");

const result = inputArr.reduce((acc, curr) => {
  if (typeof acc[curr] === "undefined") {
    //acc 객체 내에 curr키가 없는 경우를 체크
    acc[curr] = 1;
    //해당 요소를 새로운 키로 객체에 추가한 후 표 수를 1로 초기화
  } else {
    acc[curr] += 1;
    // 해당 요소가 이미 존재하는 경우 1 증가
  }
  return acc;
}, {});

const winner = Object.keys(result).reduce((a, b) =>
  result[a] > result[b] ? a : b
);
alert(`${winner}(이)가 총 ${result[winner]}표로 반장 당&첨 ! 축하합니다 🙌`);
// Object.keys 메소드를 이용해 객채의 키 배열을 얻은 뒤 reduce 메소드를 이용해 누산기 객체의 값을 비교하여 가장 큰 값을 반환

//🤯 🤯 🤯 🤯 🤯
