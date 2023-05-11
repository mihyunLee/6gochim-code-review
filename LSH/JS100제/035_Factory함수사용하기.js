// # 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n){
    function two(v){
        return v**n
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10)); // 100
console.log(b(10)); // 1000
console.log(c(10)); // 10000

// 클로저 예시
function counter() {
    let count = 0;
  
    return function() {
      count++;
      console.log(count);
    };
  }

const increment = counter();

increment() // 1
increment() // 2
increment() // 3


