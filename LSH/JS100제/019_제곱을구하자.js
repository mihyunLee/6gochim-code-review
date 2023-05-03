// # 문제19 : 제곱을 구하자

// 공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.

function solution(num){
    let newArr = num.split(' ').map(v=>Number(v))
    let [a,b] = [newArr[0],newArr[1]]
    return a**b
}
console.log(solution('2 5')) // 32
