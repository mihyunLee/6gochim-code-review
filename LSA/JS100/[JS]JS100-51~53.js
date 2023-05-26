//코드를 보니 다시 어려워져서 열심히 분석해 보았습니다 

// # 문제51 : merge sort를 만들어보자

// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// > 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
// >

//분할부분
function mergeSort(arr){
//만약에 배열 길이가 1보다 작거나 같다면 정렬이 되어있다 
    if (arr.length <= 1){
      return arr;
    }
  //중간값,왼쪽 오른쪽 변수를 선언해준다 
  //중간값까지 slice() 해준다 
    const mid = Math.floor(arr.length / 2);
  
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
  
    //잘린부분을 반복해주기 위해 재귀함수를 사용해준다  
    return merge(mergeSort(left), mergeSort(right));
  }
  
  //정렬하고 합치는 부분
  function merge(left, right){
    let result = [];
  //길이가 있는 동안 
    while (left.length && right.length){
        //만약에 0번째 비교해서 left가 작다면   result.push(left.shift());해준다 
      if (left[0] < right[0]){
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    while (left.length) {
      result.push(left.shift());
    }
    while (right.length) {
      result.push(right.shift());
    }
  
    return result;
  }
  
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  
  console.log(mergeSort(array));




//   # 문제52 : quick sort

// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
//기준값을 설정해준다 (가운데,pivot)
//[1, 3, 2, 7, 5, 6, 4, 8, 9, 10]
//[1, 3, 2, 5, 4]+[6]+[7, 8, 9, 10]
//[나보다 작은 값] + [pivot] + [나보다 큰 값]
//[1] + [2] +[3, 5, 4] + [6] + [7, 8] [9] [10]
//하나일때는 숫자로 리턴해준다
//1 + 2+ [3 [5] 4] + 6 + [7, 8] + 9 + 10
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10


function quickSort(arr){
    if (arr.length <= 1){
      return arr;
    }
  
    //배열의 첫번째 or 중앙값 or 마지막값으로 pivot설정가능 
    const pivot = arr[0]; //기준점
    const left = [];
    const right = [];
  //pivot보다 작으면 left 크면 right

    for (let i=1; i<arr.length; i++){
        //0번재를 위에서 기준점으로 잡고 있기 때문에 1부터 시작한다 
      if(arr[i] < pivot){ 
        //만약에 배열의 i 번째가 피봇보다 작다면 
        left.push(arr[i]);
        //left에 푸쉬~해준다
      } else {
        right.push(arr[i]);
        //그렇지 않다면 right에 푸쉬~해준다 
      }
    }
    return quickSort(left).concat(pivot, quickSort(right));
    //배열로 만들어주기 위해 concat을 사용해서 배열로 이어 붙여준다 
  }
  
  const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
  
  console.log(quickSort(array));


// # 문제53 : 괄호 문자열

// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

// 1.(()) 바른문자열
// 2.(((()()()()))) 바른문자열
// 3.()()() 바른문자열
// 4.)))((( 바른문자열이 아님
// 5.()) 바른문자열이 아님 
// 6.())( 바른문자열이 아님 

function baren (arr){
    let count = 0

    for (let i = 0; i<arr.length; i++){
        if (arr[i] === "("){
            //만약에 i번째가 ( 라면
            count++;
        }
        if (arr[i] === ')'){
            count--;
        }
    }
    if (count != 0){
        return false;
    }// 만약에 카운트가 0이 아니라면 false를 반환해준다 
    //즉 제대로된 가로가 아니라는 의미(짝이 안맞으면 0이 아니므로 )
    let n = []
    for (let i in arr){
        if (arr[i] === '('){
           n.push('(')
           //만약에 arr가  ( 라면 n 에 푸쉬해준다  
        }
        if (arr[i] === ')'){
            if (n.length === 0){
                return false;
            }
            //만약에 n 이 비어있는 상태였다면 잘못된 문자열이므로 false를 해준다 
            n.pop()
        }
    
    }
    return true;
    //이상이 없다면 true를 반환해준다 
}

const write = prompt("괄호를 입력해주세요").split('');
console.log(write);
if (baren(write) === true){
    console.log("YES")
}else (console.log("NO"))
