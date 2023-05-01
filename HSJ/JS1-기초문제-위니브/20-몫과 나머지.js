// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번째 숫자를 나누었을 때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

function division() {
  const nums = prompt("두 숫자를 공백으로 구분하여 입력하세용💡").split(" ");
  let quotient = Number(nums[0] / nums[1]);
  let remainder = Number(nums[0] % nums[1]);
  console.log(`${quotient} ${remainder}`);
}

division();
