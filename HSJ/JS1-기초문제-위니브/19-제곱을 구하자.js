//
// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하세요.

function powerCalculator() {
  const nums = prompt("두 숫자를 공백으로 구분하여 입력하세용💡").split(" ");

  let calculator = Number(nums[0] ** nums[1]);

  console.log(calculator);
}

powerCalculator();

// Math.pow 두 수를 거듭제곱하는 내장함수 사용

const nums = prompt("두 숫자를 공백으로 구분하여 입력하세용💡").split(" ");
let calculator = Math.pow(nums[0], nums[1]);

console.log(calculator);
