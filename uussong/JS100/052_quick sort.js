// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
  // 배열 요소의 개수가 0개 이거나 1개라면 정렬된 상태라 할 수 있다.
  // (초기 배열의 개수가 1이하 (0혹은 1)이라면 당연히 정렬할 필요가 없다.)
  if (arr.length <= 1){
    return arr;
  }

  // 비교 기준이 될 값을 정한다. 여기에선 정렬할 배열의 가장 첫 값으로 잡았다.
  const pivot = arr[0];
  // 기준이 될 값보다 작은 값 그리고 큰 값을 담기 위한 left, right 배열
  const left = [];
  const right = [];

  // 기준이 되는 값을 arr[0]으로 잡았기 때문에 비교는 그 다음 요소부터 해주면 된다.
  // 기준이 되는 값과 다른 배열의 요소를 비교해서 기준값보다 작으면 left, 크면 right에 넣어준다.
  for (let i=1; i<arr.length; i++){
    if(arr[i] < pivot){
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 이렇게 되면 [정렬 안 된 기준값보다 작은 값들] 기준값 [정렬 안 된 기준값보다 큰 값들]의 구조가 된다.
  // 따라서 정렬 안 된 기준값보다 ... 들을 정렬해줘야 한다
  // 그 정렬 방식은 여태까지 했던 quickSort와 같다.
  // 정렬이 진행되면 기준값의 인덱스는 고정되게 되기 때문에 이 과정을 계속해서 반복하면 모든 요소가 정렬될 수 있다.
  return [...quickSort(left), pivot, ...quickSort(right)]
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));
