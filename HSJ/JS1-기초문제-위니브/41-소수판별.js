// 숫자가 주어지면 소수인지 아닌지 판별하는 프로그램을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

function isPrime(input) {
  for (let i = 2; i < input; i++) {
    if (input % i === 0) {
      return false;
    }
  }
  return true;
}
// input 숫자가 소수인지를 판별하는 함수
// 현재 숫자 i로 input을 나눴을 때 나머지가 0이면 소수가 아니므로 false 반환
// i가 input과 동일해지는 경우는 판별할 이유가 없음
// for루프를 다 돌고 나서도 나누어 떨어지는게 없는지 확인해야하기 때문에 return문이 if문 밖에 위치

const num = parseInt(prompt("궁금한 숫자를 입력해보세용"));
if (isPrime(num)) {
  alert("YES");
} else {
  alert("NO");
}
