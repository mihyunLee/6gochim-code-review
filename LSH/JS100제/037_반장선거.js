// # 문제37 : 반장 선거

// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

// 입력
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력
// 혜원(이)가 총 4표로 반장이 되었습니다.

function solution(str){
    let obj = str.split(' ').reduce((acc,cur)=>{
        if(!acc[cur]){
            acc[cur] =1;
        }else{
            acc[cur] +=1;
        }
        return acc; // 초기값 object
    },{})

    const objMaxVal = Math.max.apply(null,Object.values(obj))
    const objectLength = Object.keys(obj).length

    let result =''
    let cnt =0; // 동률인 경우를 판별하기 위함

    for(let i=0; i<objectLength; i++){
        // value값이 최대값과 같은 경우
        if(Object.values(obj)[i] === objMaxVal){
            result = `${Object.keys(obj)[i]}(이)가 총 ${objMaxVal}표로 반장이 되었습니다.`
            cnt++
        }
    }
    // 득표수가 동률인 경우 재투표하라고 출력해주기
    if(cnt >=2){
        result = '표 수가 같은 학생이 있습니다.'
        console.log('재투표해주세요!')
    }
    return result
}

console.log(solution('원범 원범 혜원 혜원 혜원 혜원 유진 유진')) // 혜원(이)가 총 4표로 반장이 되었습니다.
