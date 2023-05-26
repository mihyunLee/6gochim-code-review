// # 문제48 : 대소문자 바꿔서 출력하기

// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

// 입출력
// 입력 : AAABBBcccddd
// 출력 : aaabbbCCCDDD

let str = 'AAABBBcccddd';

function solution(str){
    let result =''
    for(let i=0; i<str.length; i++){
        if(str[i] === str[i].toLowerCase()){
            result += str[i].toUpperCase()
        } else{
            result += str[i].toLowerCase()
        }
    }

    return result
}

console.log(solution(str)) // aaabbbCCCDDD
