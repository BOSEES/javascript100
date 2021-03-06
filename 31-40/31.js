// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌것을 모두 고르시오.

// 1) arr[i]
// 2) arr.push(5)
// 3) arr.splice()
// 4) arr.pop()
// 5) arr.includes(5)

// 정답) 3번,5번

//includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별합니다. O(n)
//splice() 메서드는 배열의 기존 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경합니다. O(n)