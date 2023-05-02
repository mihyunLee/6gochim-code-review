// # 문제20 : 몫과 나머지

// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.**

function solution(num){
    let newArr = num.split(' ').map(v=>Number(v))
    let [a,b] = [newArr[0],newArr[1]]
    console.log(Math.floor(a/b)+' '+a%b)

}
solution('10 2')

