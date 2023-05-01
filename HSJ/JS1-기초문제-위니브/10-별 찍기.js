let input = 5;

function star(val) {
  for (let i = 1; i <= val; i++) {
    console.log(" ".repeat(val - i) + "*".repeat(2 * i - 1));
  }
}

star(input);

//repeat 매소드 사용
//공백도 문자열임을 기억하기

// i = 2
// "".repeat(5-2) + "*".repeat(2*2-1);
//"    *"

//i = 2
//"   ***"

//for문만을 사용해서도 출력 가능
