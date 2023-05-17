// # 문제41 : 소수판별

// 숫자가 주어지면 **소수인지 아닌지 판별하는 프로그램**을 작성해주세요.
// 소수이면 YES로, 소수가 아니면 NO로 출력해주세요.
// (소수 : 1과 자기 자신만으로 나누어떨어지는 1보다 큰 양의 정수)

function isPrime(num){
    let result =''
    if(num ===1) result ='1이상의 수를 입력해주세요'
    if(num ===2) result = 'YES'
    for(let i=2; i < num; i++){
        if(num % i ==0){
            result = 'NO'
            break
        }else{
            result = 'YES'
        }
    }
    console.log(result)
}
isPrime(1) // 1이상의 수를 입력해주세요
isPrime(2) // YES
isPrime(4) // NO
isPrime(7) // YES
