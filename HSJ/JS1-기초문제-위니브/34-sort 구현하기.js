// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

const unsorted = prompt("키를 입력하세요");
let sorted = "";

sorted = unsorted
  .split(" ") // 입력받은 문자열을 공백 기준으로 분리
  .sort(function (a, b) {
    return a - b;
  }) // 숫자 배열을 오름차순으로 정렬하기 위한 함수
  .join(" ");

if (unsorted === sorted) {
  console.log("Yes!!");
} else {
  console.log("No~~");
}
