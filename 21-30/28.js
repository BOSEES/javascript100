// 2-gram 이란 문자열에서 2개의 연속된 요소를 출력하는 방법이다.
// 예를 들어 "javascript" 를 2-gram 으로 반복해 본다면 다음과 같은 결과가 나온다.

// 입력) javascript
// 출력)

const n = "javascript";
for(let i = 0; i < n.length - 1; i++){
  console.log(n[i],n[i + 1]);
}

//string 타입을 배열로 바꿀 필요가 없이 그냥 n[i]를 찍으면 string도 인덱스를 가지고 접근 할수있음.