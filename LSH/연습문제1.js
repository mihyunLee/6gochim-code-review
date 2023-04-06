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
let bunsan = arr.map((v)=>{
    return (v - avg)**2
})
console.log(bunsan)

// 2. string의 평균 값을 구하기
let str = '5, 4, 10, 2, 5'
let sum2= 0
let numArr = str.split(',').map(v=>{
    return parseInt(v)
})
numArr.forEach((v)=>{
    sum2+=v
})
console.log(sum2/numArr.length)

// 3. 다음 array의 각 자리수의 합을 구하기
const arr2 = [11,22,33,111,2]
let sum3 = 0
let newArr2 = arr2.join('').split('').map(v=>{
    return parseInt(v)
})
newArr2.forEach((v)=>{
    sum3 +=v
})
console.log(sum3)

// 4
// 반복문만 사용하여 숫자단위 콤마찍기
// 어떻게 하면 좋을까요...?
// 일단은 올리고 좀 더 고민해볼게요

// 반복문만 사용하여 숫자단위 콤마 없애기

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
    lotto.push(num)
}
lotto.sort((a,b)=>{return a-b})
console.log(lotto)





