// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고있다., 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다.
// 그런데 오늘은 마침 사탕이 다 떨어져서 먼저 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러가기로 했다.
// 1위 ~3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생응까지 포함하여 사탕을 사기로 한다.
// 학생들의 점수를 공백으로 구분하여 입력 받고 사탕을 받을 학생의 수를 출력 하세요.

// 입출력)
// 입력: 97 86 75 66 55 97 85 97 97 95
// 출력: 6

const score = "97 86 75 66 55 97 85 97 97 95";
const array = score.split(" ");
let count = {};

for(let index in array){
  let val = array[index];
  count[val] = count[val] === undefined ? 1 : count[val] = count[val] + 1
}

const top3 = Object.keys(count).sort(function(a, b){
  return b - a;
}).splice(0, 3);


const total = top3.reduce((a, b) => {
  a += count[b];
  return a
},0);

console.log(count);
console.log(top3);
console.log(total);

//Object의 키값을 배열로 가져오는 keys() 메소드. 기억하자.