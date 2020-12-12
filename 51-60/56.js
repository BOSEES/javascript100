// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.
// **데이터**
// nationWidth = {
//      'korea': 220877,
//      'Rusia': 17098242,
//      'China': 9596961,
//      'France': 543965,
//      'Japan': 377915,
//      'England' : 242900,
// }

// **출력**
// England 22023


nationWidth = {
       'korea': 220877,
       'Rusia': 17098242,
       'England' : 242900,
       'France': 543965,
       'China': 9596961,
       'Japan': 377915,
  }

//객체 안에 코리아를 비교하기 위해서 따로 변수에 저장.
const koreaWidth = nationWidth["korea"] ;

//delete 를 이용해 비교할때 안에 코리아가 존재함으로 비교대상에서 제외하기 위해서 "korea"에 해당하는 key와 value를 삭제. 
delete nationWidth["korea"];

//객채상태에서는 비교할수 없기 떄문에, 내장함수인 Object를 이용해 entries() 메소드를 사용함. entries는 객체를 배열의 형태로 변환하는 메소드이다.
const entry = Object.entries(nationWidth);

//객체의 벨류값을 배열의 향태로 가져오는 values메소드.
const values = Object.values(nationWidth);

//객체의 키값을 배열의 형태로 가져오는 keys 메소드.
const keys = Object.keys(nationWidth);

//gap에 최대값을 저장;
let gap = Math.max.apply(null ,values);
let item = [];


//O(n)의 시간복잡도를 가지는 알고리즘. 결국 전체다 순회를해야 결과를 도출할수있는 for in문이다.
for(let i in entry){
  if (gap > Math.abs(entry[i][1] - koreaWidth)) {
    gap = Math.abs(entry[i][1] - koreaWidth);
    item = entry[i];
  }
}

console.log(item);
console.log(Math.abs(entry[0][1] - koreaWidth));
console.log(entry);
console.log(values);
console.log(keys);
console.log(gap);