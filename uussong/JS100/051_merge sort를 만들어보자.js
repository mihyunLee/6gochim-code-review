// 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.
function mergeSort(arr) {
  // 배열 요소의 개수가 0개 이거나 1개라면 정렬된 상태라 할 수 있다.
  // (초기 배열의 개수가 1이하 (0혹은 1)이라면 당연히 정렬할 필요가 없다.)
  // 그래서 배열의 요소의 개수가 1개가 될때까지 쪼개고 이를 반환한다.
  if (arr.length <= 1){
    return arr;
  }

  // 기존 배열을 절반으로 나눈다.
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0,mid);
  const right = arr.slice(mid);

  // 이 과정을 계속 반복한다. (배열 요소의 개수가 1개가 될 때 까지)
  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  // 정렬할 결과를 담을 배열
  let result = [];

  // 1개로 나눈 배열(=정렬된 배열)을 합친다. 이 때 숫자 크기를 비교해 담는다.
  // 왼쪽 배열과 오른쪽 배열 모두 요소가 남아있을 때 비교를 진행한다.
  while (left.length && right.length) {
    // 요소가 1개인 배열로 비교를 시작하니 인덱스는 0
    // 그 후 배열 요소의 개수가 늘어나도 가장 작은 수는 0번째 인덱스이다. 
    // 작은 수부터 비교해서 결과를 담을 배열에 순서대로 담아주면 결과적으로 크기가 작은 값부터 들어가게 된다.
    if (left[0] < right[0]){
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // 왼쪽 배열이나 오른쪽 배열 중 하나라도 요소의 개수가 0이된다면 더 이상 비교할 필요가 없다.
  // 남은 값은 가장 큰 값이 될 것이므로 마지막 요소로 넣어주면 된다. 
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));
