// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //길이가 1이하인 경우, 즉 이미 정렬된 경우에는 해당 배열을 그대로 반환

  const pivot = arr[0];
  const left = [];
  const right = [];

  //첫 번째 요소 pivot을 기준으로 작은 값은 left, 큰 값은 right에 저장

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
  // left.concat(right).concat(pivot)을 하면 왜 제대로 안나올까 ?,, 이 코드를 잘 모르겠읍니다 흡
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));
