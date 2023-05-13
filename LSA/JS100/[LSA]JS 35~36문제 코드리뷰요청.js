// # 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다.

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n) {
  function two(x) {
    //pass
    return Math.pow(x, n);
    //어떤값의 제곱이니까 x의 n
    //x는 two함수가 실행될 때 받는 매개변수
    //n은 one함수가 실행될때 받는 매개변수
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));

//  100
//  1000
//  10000

//10의 제곱이므로 100
//10의 3제곱이므로 1000
//10의 4제곱이므로 10000

//Math.pow(값 , 지수)
//**Math.pow()**함수는base^exponent처럼 값에 지수를 제곱한 값을 반환합니다.

// # 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.

// 입출력

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18

const num = prompt("구구단을 외자 구구단을 외자!");
let result = "";

for (let i = 0; i < 9; i++) {
  result = result + num * (i + 1) + " ";
  //i 가 0부터 이기 때문에 곱하면 0이 나오므로 + 1을 해준다
}

console.log(result);

//i 가 0일때 입력받은 숫자 * (0 + 1)
//3을 입력하면 3 6 9 12 15 18 21 24 27

