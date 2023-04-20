//1번 다음 배열에서 [400, 500]제거
let nums = [100,200,300,400,500];

nums = nums.splice(0,3);

//2번 다음 배열애서 100과 300 사이에 10000 삽입
let arr = [200,100,300];

arr.splice(2, 0, 10000);

//3번 다음 출력값은?
const arr3 =[100,200,300];
console.log(typeof(arr3)); //object

//undefined, string, number는 기본(원시타입) 자료형

//4번 다음 변수 a를 typeof(a)로 넣었을때 연결이 옳지 않은것은?
console.log(typeof(1));
console.log(typeof(2.22)); //정답
console.log(typeof('p'));
console.log(typeof([1,2,3]));

//+a) boolean은 값이 true or false로 2개만 존재하는 자료형이다.