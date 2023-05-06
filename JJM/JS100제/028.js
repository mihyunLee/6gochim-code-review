// # 문제28 : 2-gram

// 2-gram이란 문자열에서 2개의 연속된 요소를 출력하는 방법입니다. 

// 예를 들어 'Javascript'를 2-gram으로 반복해 본다면 다음과 같은 결과가 나옵니다.

const input = prompt('문자를 입력해주세요^^, 앞에서부터 두자리씩 출력해줍니다')

for(let i= 0; i<input.length-1; i++) {
  console.log(input[i], input[i+1])
}
