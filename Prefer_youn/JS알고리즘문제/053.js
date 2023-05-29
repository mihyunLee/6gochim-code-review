// 문제53 : 괄호 문자열
// 입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.

// const bracket = prompt("괄호 문자열을 입력하세요");
function isBracketMatching(bracket) {
  const stack = [];

  for (let i = 0; i < bracket.length; i++) {
    const char = bracket[i];

    if (char === '{' || char === '(' || char === '[') {
      stack.push(char); // '{'를 스택에 추가
    } else if (char === '{' || char === ')' || char === ']') {
      if (stack.length === 0) {
        return false; // 스택이 비어있는데 '}'를 만남 (매칭되지 않은 상황)
      }
      stack.pop(); // 매칭되는 '{'를 스택에서 제거
    }
  }

  return stack.length === 0; // 스택이 비어있으면 모든 괄호가 매칭되었음을 의미
}

const bracket = '{{{{{}}}}}';
const isMatching = isBracketMatching(bracket);

console.log(isMatching); // true
