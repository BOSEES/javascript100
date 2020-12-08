//첫번쨰 입력에서는 학생의 이름이 고백으로 구분되어 입력되고, 두번째에는 그학생의 수학점수가 공백으로 구분되어 집니다.
//두 개를 합쳐 학생의 이름이 key 이고 value가 수학점수인 객체를 출력해주세요.

const name = prompt("이름은?").split(" ");
const score = prompt("점수는?").split(" ");
const obj = {};

for(let i = 0; i < name.length; i++){
  obj[name[i]] = score[i]; // 오브젝트에 키와 밸류를 넣을때에는 약간은 특이한 느김을 받을수 있다. 
}
console.log(obj);