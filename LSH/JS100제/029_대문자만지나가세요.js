// # 문제29 : 대문자만 지나가세요

// 진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

// **알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.

// 키코드 활용
function solution(alphabet){
    let code = alphabet.charCodeAt()
    if(code >= 65 && code <= 90){
        console.log('YES')
    }else{
        console.log('NO')
    }
}

// toUpperCase() 활용

function solution2(alphabet){
    if (alphabet === alphabet.toUpperCase()){
        console.log('YES');
    }else{
        console.log('NO')
    }
}
solution('h') // NO
solution('H') // YES

solution2('a') // NO
solution2('A') // YES

