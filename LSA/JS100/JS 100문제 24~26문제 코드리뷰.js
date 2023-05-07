// # 문제24 : 대문자로 바꿔주세요!

// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는 전부 소문자, 어떤 이는 전부 대문자로 써져 있는 등 형식이 제각각이었습니다.

// 민지를 위해 **이름이 입력되면 전부 대문자로 출력되는 프로그램**을 만들어주세요.

// 입출력

// 입력 : mary
// 출력 : MARY

const txt = 'marry'

const toUpperCaseTxt = txt.toUpperCase();
console.log(toUpperCaseTxt)

//toUpperCase()는 문자열의 모든 문자를 대문자로 변환합니다.
// 1. 대문자로 변환 : txt.toUpperCase()
// 2. 소문자로 변환 : txt.toLowerCase()


// # 문제25 : 원의 넓이를 구하세요

// 원의 넓이는 `반지름의 길이 x 반지름의 길이 x 3.14`로 구할 수 있습니다.
// 함수를 사용하여 원의 넓이를 구하는 코드를 작성해봅시다.

// **입력으로 반지름의 길이 정수 n이 주어지면 원의 넓이를 반환하는 함수**를 만들어 주세요.

//return 함수내에서 사용하고, 함수가 호출된 장소로 돌아간다

function circle(radius){
    let PI = 3.14;
    return radius * radius * PI;
}

const n = prompt("원의 반지름을 입력하세요");
console.log(circle(n))



// # 문제26 : 행성 문제2

// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune입니다.

// **행성의 한글 이름을 입력하면 영어 이름을 반환하는 프로그램**을 만들어 주세요.

// Object.keys()
// Object.keys() 메서드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환합니다.

const planets = {
    수성 :' Mercury',
    금성 : 'Venus',
    지구 : 'Earth',
    화성 : 'Mars',
    목성 : 'Jupiter',
    토성 : 'Saturn',
    천왕성 : 'Uranus',
    해왕성: 'Neptune',
};
const from = prompt(" 어느 행성에서 왔나요?");
 console.log(planets[from])

 //한글을 입력받으면 키값을 통해 영어이름으로 접근해 반환한다
 //객체에 접근 [] 
 //마침표 연산자는 접근이 안됨/마침표연산자 다음에는 프로퍼티이름이 식별자로 들어가야 한다(수성,금성,지구,,,,)
