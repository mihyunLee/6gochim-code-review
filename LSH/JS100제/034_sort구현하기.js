// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

let input = '176 156 155 165 166 169'
// let input = '155 156 165 166 169 176'


// 버블 정렬 O(N^2)
function bubbleSort(input){
    let arr = input.split(' ').map((v)=>parseInt(v))
    // 인덱스와 인덱스+1 값을 사용하기 떄문에 arr.length -1 까지 비교를 해줘야 한다.
    for(let i=0; i <arr.length-1;i++){
        // 맨 끝으로 정렬된 마지막 숫자를 제외하고 정렬해줘야 하므로 버블정렬이 끝나면 i만큼 뺴준다.
        for(let j=0; j<arr.length -(1+i);j++){
            if(arr[j] > arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }
        }
    }

    let sortedNum = arr.join(' ')

    console.log(sortedNum) // 올바르게 정렬되는지 확인용

    if(input === sortedNum){
        console.log('YES')
    }else{
        console.log('NO')
    }

}
bubbleSort(input) // YES
