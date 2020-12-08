// 영하네 반은 국어, 수학, 영어 시험을 보았습니다. 영하는 친구들의 평균 점수를 구해주기로 했습니다.
// 공백으로 구분하여 세 과목의 점수가 주어지면 전체 평균 점수를 구하는 프로그램을 작성하세요.

// 입출력)
// 입력: 20 30 40
// 출력: 30

const score = "25 36 42";
const arr = score.split(" ");
let ratio = 0;

for(let i = 0; i < arr.length; i++) {
  ratio += parseInt(arr[i]);
}
console.log(ratio / arr.length);
console.log(Math.floor(ratio / arr.length));

//parseInt()  string 타입을 int타입으로 변경하는 메소드
//Math.floor() 주어진 값보다 이하의 가장 큰 정수를 반환한다. 72.8 => 72, 72.1 => 72