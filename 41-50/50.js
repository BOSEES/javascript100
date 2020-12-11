// 버블 정렬은 두 인접한 원소를 검사하여 정렬하는 방법을 말한다. 시간 복잡도는 느리지만 코드가 단순하기 때문에 자주 사용된다.

function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j <result.length - i; j++) {
      if (result[j] > result[j + 1]) {
        let value = result[j];
        result[j] = result[j + 1];
        result[j + 1] = value;
      }
    }
  }
  return result;
}

//map 을 돌리면서 스트링타입에 배열을 넘버타입의 배열로 다시 생성함.
const items = prompt("입력해주세요").split(" ").map((n) => {
  return parseInt(n,10);
})

console.log(bubble(items));