// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.

// 입출력)
// 입력: 1 2 3 4 5
// 출력: 5 4 3 2 1

// 입력: 2 4 6 7 8
// 출력: 8 7 6 4 2

const n = "1 2 3 4 5";
console.log(n.split(" ").reverse().join(" ")); // 메소드 체이닝을 사용하면 간단하게 한줄로 끝낼수 있다.

//그러나 메소드 체이닝을 사용하지 않고 집적 함수를 만든다면
// function test(num){
//   let arr = num.split(" ");
//   let result = "";
//   for(let i = arr.length - 1 ; i >= 0; i--){
//     result = result + (arr[i] + " ");
//   }
//   console.log(result);
// }

// test("30 20 40 50");