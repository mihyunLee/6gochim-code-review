// # 문제30 : 문자열 속 문자 찾기

// 문자 pineapple에는 apple이라는 문자가 숨어 있습니다. 원범이는 이렇듯 문자열 속에 숨어있는 문자를 찾아보려고 합니다.

// 첫번째 입력에서는 문자열이 입력되고, 두번째에는 찾을 문자가 입력되어야 합니다.
// **그 문자가 시작하는 index를 반환하는 프로그램**을 만들어 주세요

// indexOf() 활용한 방법
function solution(){
    let str = prompt("문자열 입력");
    let word = prompt("찾을 문자 입력");
    // let str = 'pineapple is good'
    // let word = 'apple'
    return str.indexOf(word);
}
// console.log(solution())


// search() 활용한 방법
// 변수를 입력받아서 사용할때는 new RegExp()를 통해 동적으로 정규식을 만들어서 사용하면 된다.
function solution2(){
    let str = prompt("문자열 입력");
    let word = prompt('찾을 문자 입력')
    // let str = 'pineapple is good'
    // let word = 'apple'
    const regex = new RegExp(`${word}`,'g')
    // console.log(regex) // /apple/g
    return str.search(regex)
}
// console.log(solution2())

//? indexOf("찾을 문자열", "시작 위치")
// console.log('he,llo w,orl,d'.indexOf(',')) // indexOf 시작위치
//? 첫 번째 찾은 문자열의 위치를 반환한다. 찾는값이 없을경우 -1 반환한다.

//? search("찾을 문자열")
//? indexOf()함수와 마찬가지로 동일하게 문자열을 찾을 수 있다.
//? 다만, 시작위치는 지정할 수 없다.
//? 정규식 사용이 가능하다! 


