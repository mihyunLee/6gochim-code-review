// # 문제53 : 괄호 문자열

// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

let str1 ='()()('
let str2 ='()(){}[]'
let str3 ='}[()()]{'

function solution(input){
    let left_small = 0;
    let right_small = 0;

    let right_middle = 0;
    let left_middle = 0;

    let right_big = 0;
    let left_big = 0;

    for(let i = 0; i < input.length; i++){
        if(input[i] === '(') left_small++
        if(input[i] === '{') left_middle++
        if(input[i] === '[') left_big++
        
        if(input[i] === ')') right_small++
        if(input[i] === '}') right_middle++
        if(input[i] === ']') right_big++

        // 마지막에 (, {, [ 가 오면 올바른 괄호가 될 수 없음
        if(input[input.length-1] ==='(' || input[input.length-1] ==='[' || input[input.length-1] ==='{'){
            return 'NO'
        }
    }
    
    if(left_small === right_small && left_middle === right_middle && left_big === right_big){
        return 'YES'
    }else{
        return 'NO'
    }


}

console.log(solution(str1)) // NO
console.log(solution(str2)) // YES
console.log(solution(str3)) // NO