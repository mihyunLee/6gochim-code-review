// # 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n){
    function two(v){
      return Math.pow(v,n);
    }
    return two;
}

const a = one(2); 
const b = one(3);
const c = one(4);

console.log(a(10));// 10 2제곱
console.log(b(10));// 10 3제곱
console.log(c(10));// 10 4제곱



//Math.pow(base, exponent);  
//base밑 값.
//exponent 밑을 제곱하기 위해 사용하는 지수.
//반환-주어진 밑 값을 주어진 지수 값으로 거듭제곱한 숫자 값.
