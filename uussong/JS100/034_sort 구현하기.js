// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다.

// 민주를 위해 키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

// 입출력

// 입력 : 176 156 155 165 166 169
// 출력 : NO

// 입력 : 155 156 165 166 169 176
// 출력 : YES

const height_list = prompt('키를 공백으로 구분하여 입력해주세요').split(' ')
// const height_list = '176, 156, 155, 165, 166, 169'.split(' ')
// const height_list = '155, 156, 165, 166, 169, 176'.split(' ')

let result = 'YES'
for (let i = 1; i < height_list.length; i++) {
  if (height_list[i - 1] > height_list[i]) {
    result = 'NO'
  }
}

console.log(result)