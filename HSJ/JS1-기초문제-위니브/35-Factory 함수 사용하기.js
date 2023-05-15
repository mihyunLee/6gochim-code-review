// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n) {
  function two(r) {
    return Math.pow(n, r);
  }
  return two;
}

// 챗센세 도움을 받아서 Math.pow 매소드 사용하는것은 이해 했으나 저렇게 함수가 중첩(?)된 것이 너무 어렵읍니다 .. 🥺

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));
