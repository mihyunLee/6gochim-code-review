// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// 제한 조건
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다.
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

function solution(a, b) {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const inputDate = new Date(2020, a - 1, b);
  //Date 객체에서 월을 나타내는 값이 0부터 시작하기 때문에 그것에 맞추기 위해서 -1 처리
  let dayIndex = inputDate.getDay();
  //getDay는 기본적으로 요일을 나타내는 숫자를 반환
  // 0 : 일요일 - 6 : 토요일
  let day = days[dayIndex];
  return day;
}
