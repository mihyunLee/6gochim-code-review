// # 문제50 : 버블정렬 구현하기

// 버블정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말합니다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용됩니다.

function bubble(arr) {
  // 배열 복사
  let result = arr.slice(); 

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j <  result.length-i; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j+1];
        result[j+1] = temp;
      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));
