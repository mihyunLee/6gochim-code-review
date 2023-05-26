// 바울랩에서는 3월 29일 제주대학교에서 '제주 빅데이터 사회혁신 해커톤' 행사를 주최하게 되었습니다. 이에 구글 설문지를 배포하였으나 제주대학생들이 중복해서 n개씩 설문지를 제출하였습니다.
// 중복된 데이터들을 삭제하여 실제 접수 명단이 몇 명인지 알고 싶습니다.

// 아래 주어진 데이터들로부터 중복을 제거하여 실제 접수 인원을 출력해 주세요.

const people = {
  이호준: "01050442903",
  이호상: "01051442904",
  이준호: "01050342904",
  이호준: "01050442903",
  이준: "01050412904",
  이호: "01050443904",
  이호준: "01050442903",
};

const result = {};
const peopleKey = Object.values(people);
//people 객체의 값을 배열로 추출
const realPeople = new Set(peopleKey);
//Set은 중복된 값을 허용하지 않음
for (const key in people) {
  if (realPeople.has(people[key])) {
    result[key] = people[key];
  }
}
//for in 반복문을 사용하여 객체의 각 키값을 확인
// has 매서드 : 객체에 주어진 요소가 존재하는지 여부를 판별하여 반환함

console.log(result);
