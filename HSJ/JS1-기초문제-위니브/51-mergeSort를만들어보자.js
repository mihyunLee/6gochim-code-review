// 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  //길이가 1이하인 경우, 즉 이미 정렬된 경우에는 해당 배열을 그대로 반환

  const mid = Math.floor(arr.length / 2); //배열을 반으로 나누기 위해
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right)); //최종적으로 정렬된 배열을 반환
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // left, right 배열 모두에 요소가 남아있는 동안 반복문 실행
  // 각 배열의 첫 번째 요소를 비교
  //-> left 배열과 right 배열의 첫 번째 요소를 비교하여 더 작은것을 result 배열에 추가하고 left 배열에서 제거

  while (left.length) {
    result.push(left.shift());
  }
  // 남은 요소가 있는 경우 모두 result에 추가

  while (right.length) {
    result.push(right.shift());
  }
  // 남은 요소가 있는 경우 모두 result에 추가

  return result;
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));
