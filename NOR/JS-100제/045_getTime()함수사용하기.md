## 045. getTime()함수 사용하기

> Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.<br>
> 이를 이용하여 현재 연도(2019)를 출력해보세요.

<br>

### _💡 풀이_

```js
function solution() {
  let todayTime = new Date().getTime();

  console.log(Math.floor(todayTime / (1000 * 60 * 60 * 24 * 365)) + 1970);
}

solution();

// 밀리초 -> 년도 변환
// 1ms * 1000 -> 1s
// 1s * 60 -> 1m
// 1m * 60 -> 1h
// 1h * 24 -> 1d
// 1d * 365 -> 1y
```
