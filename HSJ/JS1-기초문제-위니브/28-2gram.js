const data = prompt("문자를 입력하세요.");

for (let i = 0; i < data.length - 1; i++) {
  console.log(data[i], data[i + 1]);
}

//조건식에서 -1을 하지 않으면 마지막 글자의 다음 글자를 출력하려고 할 때 문자열의 범위를 벗어나 에러 발생
