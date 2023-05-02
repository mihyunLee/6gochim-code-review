// 입출력 예시

// 입력 : 김다정
//출력 : 안녕하세요. 저는 김다정입니다.

// let name = String(prompt("이름이 뭐야 👀?"));
// let sayHello = `안녕 나는 ${name}(이)야. 방가워 🙌`;
// console.log(sayHello);

// 문제 풀 때 함수로 묶어보기

const sayHello = prompt("이름이 뭐야 👀?");

function answer(name) {
    console.log(`안녕 나는 ${name}(이)야. 방가워 🙌`);}

    answer(sayHello);