// 다음중 set 을 만드는 방법으로 올바른것을 모두 고르시오.

// 1) var x = {1,2,3,4,5,6,7};
// 2) var x = {};
// 3) var x = new Set("javascript");
// 4) var x = new Set(range(5));
// 5) var x = new Set();

// 정답) 3번 ,5번
// 출력)3번: Set { 'j', 'a', 'v', 'c', 'r', 'i', 'p', 't' }
//     5번: Set {}

//집합의 특성은 중복을 허용하지 않는다.(삽입하는 과정에서 일일이 확인함)그래서 배열과는 비슷하지만 경우에따라선 집합이 더 나은 선택이 될 수도 있다.( 전화번호부 등)
//크게 데이터를 연산하는 과정은 삽입,검색,읽기,삭제 로 4가지로 구분한다.
//알고리즘 성능을 굳이 얘기하자면 O(n)의 성능을 가지고 있음. 


// 새로운 set 을 만들고 인자로 전달된 iterable 로 인자를 채움
// let setB = new Set().add('a').add('b');
// setB.add('c');
// console.log(setB.size); // 3

// // has(): 주어진 값이 set 안에 존재할 경우, true 를 반환
// // indexOf() 보다 빠름. 단, index 가 없음
// console.log(setB.has('b')); // true

// // set 에서 주어진 값을 제거
// setB.delete('b');
// console.log(setB.has('b')); // false

// // set 안의 모든 데이터를 제거
// setB.clear();
// console.log(setB.size); // 0