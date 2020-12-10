// 사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램을 만들어주세요.

// 예를 들어
// 18234 = 1+8+2+3+4 이고 정답은 18입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

// 입출력)
// 입력: 18234
// 출력: 18

// 입력: 3849
// 출력: 24

// const input = 3849;
// const num = input.toString().split("");
// let output = 0;
// for (let i = 0; i <num.length; i++){
//   output = output + parseInt(num[i],10);
// }

// console.log(output);

let input = "3849";
let output = 0;

while(input){
  output = output + input % 10;
  input = Math.floor(input/10);
}

console.log(output);