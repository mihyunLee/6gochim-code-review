// https://paullabworkspace.notion.site/bd7905dbc2194415b429074e75cdb7f7
/* 💡 연습문제 1번

[1-1]. 다음 값의 평균을 구하세요.
[1-2]. 다음 값의 분산을 구하세요.
[*hint] 분산 => (각 값에 - 평균) ** 2 값들의 평균
[*hint] 또 다른 분산식 => 각값의 제곱의 평균 - 평균의 제곱
[*hint] 루트는 ** 0.5로 씌울 수 있다.

[10, 20, 30, 10, 20, 30, 40, 10]

*/
// --- 풀이 --
const arr=[10,20,30,10,20,30,40,10];
let average = 0;
let sum = 0;
//average
//for
for(let i=0 ; i < arr.length; i++){
    sum += arr[i];
    // console.log(sum);
}
// for of로 구하기
for(const index of arr){
    sum += index;
    // console.log(sum);
}
//for in
for(const index in arr){
    sum += arr[index];
    // console.log(sum);
}
//reduce
average = arr.reduce((acc, cur, i ,{lenght}) => {
    i === length-1 ? (acc + cur) / lenght : acc + cur;
});

//average
average = sum / (arr.length);
console.log(average);
//-------------------------------------
//variance
let variance = 0;
let sum_square = 0;
let average_square =0;
for(const index of arr){
    sum_square += index**2;
    // console.log(sum_square);
}
average_square = sum_square / arr.length;
variance= average_square-average**2;
console.log(variance);
//평균 21.25 분산 110.9357
/* 💡 연습문제 2번

[2]. 다음 string의 평균 값을 구하세요.
[*hint] '5, 4, 10, 2, 5'.split(',')

'5, 4, 10, 2, 5'

*/

// --- 풀이 ---
const string = "5, 4, 10 ,2, 5";
let sum1 = 0;
let aver1 =0;
const num1 = string.split(',').map(Number); 
console.log(num1);

for(const index of num1){
    sum1 += index;
    // console.log(sum1);
}
aver1 = sum1 / (num1.length);
console.log(aver1);
/* 💡 연습문제 3번

[3]. 다음 array의 각 자리수의 합을 구하세요.
[*hint] 문자열로 변환해서 풀어주세요!
// 1+1, 2+2, 3+3, 1+1+1, 2
// 2, 4, 6, 3, 2
// 정답 : 17
[11, 22, 33, 111, 2]

*/

// --- 풀이 ---
const arr3 = [11, 22, 33, 111, 2];
let sum3 = 0;
for(let i=0; i<arr3.length; i++){
    let temp = arr3[i].toString();
    // console.log(temp)
    while(temp>0){
        sum3 += temp % 10;
        temp = Math.floor(temp / 10);
        // console.log(sum3);
    }
}
console.log(sum3);

/* 💡 연습문제 4번

[4-1]. 반복문만 사용하여 숫자단위 콤마 찍기
예시) 100 1000 10000 100000 => 100 1,000 10,000 100,000
[4-2]. 반복문만 사용하여 숫자단위 콤마 없애기
얘시) 100 1,000 10,000 100,000 => 100 1000 10000 100000
[4-3]. 문자열 뒤집기
예시) 'hello world' => 'dlrow olleh'

*/

// --- 풀이 ---
// 4-1
let number = window.prompt("값을 입력해주세요!");
console.log(number.length);
console.log(number);
const str = String(number);
console.log(str)
for(let i = (number.length -3); i > 0; i-=3){
    number = number.slice(0,i)+ ',' + number.slice(i);
}
console.log(number);
// 4-2
console.log(number.length);
for(let i = 0; i<number.length; i++){
    // console.log(i);
    if(number[i]===','){
        console.log(i);
        console.log(number[i]);
        number = number.slice(0,i-1)+number[i-1]+ number.slice(i+1);
        console.log(number);
    }
}
console.log(number);
//4-3
let str_exam = window.prompt("문자열을 입력해주세요!");
let temp = "";
console.log(str_exam);
for(let i = 0; i<str_exam.length;i++){
    console.log(str_exam[i])
    temp = temp + str_exam[str_exam.length - i - 1]; 
}
console.log(temp);
/* 💡 연습문제 5번

[5]. 로또 번호를 추첨하는 코드를 작성해주세요.

*/

// --- 풀이 ---
let num;
let lotto = [];

for(let i=0; i<7; i++){
    num = Math.random()*45+1;
    lotto[i] = parseInt(num);
    console.log(i);
    for(let j = 0; j<i ; j++){
        if(lotto[i]===lotto[j]){
            console.log(false);
            i--;
            break;
        }
    }
}
lotto.sort(function(a, b)  {
    if(a > b) return 1;
    if(a === b) return 0;
    if(a < b) return -1;
});
console.log(lotto);