// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만
// 제한 무게를 넘으면 무조건 다음 기구를 타야합니다.
// 원범이와 친구들이 총 몇 명 탈수 있는지 알수있는 프로그램을 작성해주세요.
// 첫번쨰 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 찬구들의 수 n이 주어 집니다.
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// 입력)
// 50
// 5
// 20
// 20
// 20
// 20
// 20
// 출력)
// 2

const limit = prompt("제한");
const person = prompt("인원수");
let totalWeight = 0;
let count = 0;

for (let i = 0; i < person; i++){
  totalWeight = totalWeight + parseInt(prompt("몸무게를 입력해라"),10);
  if(limit >= totalWeight){
    count++;
  }
}
console.log(count);

//여기서 중요한건 parseInt()를 넣어 타입에 유의해야한다.