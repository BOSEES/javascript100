// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다. 그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 학생들이 뽑은 후보들을 입력 받으면
// 뽑힌 학생의 이름과 받은 표수를 출력하는 프로그램을 작성하기로 했다.

// 입력)
// 원범 원범 혜원 혜원 혜원 혜원 유진 유진

// 출력)
// 혜원(이)가 총 4표로 반장이 되었습니다.

const name = "원범 원범 혜원 혜원 혜원 혜원 유진 유진";
const arr = name.split(" ");
let obj = {};
let winner = "";

for (let index in arr){
  let val = arr[index];
  obj[val] = obj[val] === undefined ? 1 : obj[val] = obj[val] + 1;
}

winner = Object.keys(obj).reduce(function(a, b){
  console.log(a, b);
  return obj[a] > obj[b] ? a : b;
})
console.log(`${winner}(이)가 총 ${obj[winner]}표로 반장이 되었습니다.`);

// 객체에 키를 모두 반환하는 메소드는 Object.keys()라는 메소드이다.