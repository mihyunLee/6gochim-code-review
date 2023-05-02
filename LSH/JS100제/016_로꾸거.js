// # 문제16 : 로꾸거

// 문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

function solution(str){
    let answer =''
    for(let i = str.length-1; i>=0;i--){
        answer += str[i]
    }
    return answer
}

function solution2(str){
    return str.split('').reverse().join('')
}

console.log(solution('hello'))
console.log(solution2('안녕하세요'))