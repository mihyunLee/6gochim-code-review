const arr = [10,20,30,10,20,30,40,10]

//1.1 평균 구하기
let sum=0
let avg=0
arr.forEach((v)=>{
    sum += v
})
avg = sum/arr.length
console.log('평균 : ' + avg)

//1.2 분산 구하기
let b = 0;
for(let i=0;i<arr.length;i++){
    b += (arr[i]-avg) ** 2
}
console.log((b/arr.length).toFixed(2))

// 2. string의 평균 값을 구하기
let str = '5, 4, 10, 2, 5'
let sum2= 0
let numArr = str.split(',').map(v=> parseInt(v))

numArr.forEach((v)=> sum2+=v)
console.log(sum2/numArr.length)

// 3. 다음 array의 각 자리수의 합을 구하기
const arr2 = [11,22,33,111,2]
let sum3 = 0
let newArr2 = arr2.join('').split('').map(v=> parseInt(v))

newArr2.forEach((v)=> sum3 +=v)
console.log(sum3)

// 4
// 반복문만 사용하여 숫자단위 콤마찍기
// 예시) 100 1000 10000 100000 => 100 1,000 10,000 100,000
let str3 = '1000000'
for(let i = str3.length-3;i>0;i-=3){
    str3 = str3.slice(0,i) +',' +str3.slice(i)
} 
console.log(str3)


// 반복문만 사용하여 숫자단위 콤마 없애기
// 예시) 100 1,000 10,000 100,000 => 100 1000 10000 100000
let a = '1,000,000'
for(let i = a.length -3; i>0; i -=3){
    a = a.slice(0,i-2) + '0' + a.slice(i);
}
console.log(a)

//문자열 뒤집기
let str2 = 'hello world'
let reverseStr=''
for(let i=str2.length-1;i>=0;i--){
    reverseStr += str2[i]
}
console.log(reverseStr)

// 5. 로또 만들기
let lotto = [];
for(let i=0;i<6;i++){
    let num = parseInt((Math.random()*45)+1)
    if(!lotto.includes(num)){
        lotto.push(num)
    }
}
lotto.sort((a,b)=>a-b)
console.log(lotto)
