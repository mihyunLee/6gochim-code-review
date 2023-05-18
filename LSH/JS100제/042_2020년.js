// # 문제42 : 2020년

// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

// function solution(a,b){
//     if(a<=12 && )
// }
function solution(a,b){
    let date = new Date(`2020-${a}-${b}`)
    let day = ["SUN","MON","TUE","WED","THU","FRI","SAT"]
    let dayIndex = date.getDay();
    console.log(day[dayIndex])
}
solution(5,24)

//* new Date(): 현재 날짜와 시간을 가지는 Date 객체를 생성합니다.
//* new Date(value): 1970년 1월 1일 자정(UTC)부터 value 밀리초 이후의 날짜와 시간을 가지는 Date 객체를 생성합니다.
//* new Date(dateString): 주어진 문자열 형식의 날짜와 시간을 가지는 Date 객체를 생성합니다. 날짜 형식은 일반적으로 ISO 8601 형식을 따릅니다.

//* getFullYear(): 연도를 반환합니다.
//* getMonth(): 월을 반환합니다. (0부터 11까지의 값)
//* getDate(): 일을 반환합니다.
//* getDay(): 요일을 반환합니다. (0부터 6까지의 값, 0은 일요일)
//* getHours(): 시간을 반환합니다.
//* getMinutes(): 분을 반환합니다.
//* getSeconds(): 초를 반환합니다.
//* getTime(): 1970년 1월 1일 자정(UTC)부터 해당 날짜까지의 밀리초 수를 반환합니다.


