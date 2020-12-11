// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// > 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.

// 출처 : 위키피디아

// 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.


//분할 할 부분
function mergeSort(arr){
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2); //소수점을 없에서 중간을 명확하게 나눔
  const left = arr.slice(0, mid); // 0번쨰 인덱스부터 mid까지 리턴
  const right = arr.slice(mid); // mid번째부터 마지막 인덱스까지 리턴

  return merge(mergeSort(left),mergeSort(right));
}
//정렬하고 합치는 부분
function merge(left, right){
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

// const array = prompt("").split(" ").map((n) => {
//   return parseInt(n,10);
// })
const array = [1, 2, 3, 4, 5, 7, 6, 8, 9, 7, 5];
// console.log(array);
console.log(mergeSort(array));