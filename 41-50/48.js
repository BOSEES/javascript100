// 문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프고그램을 작성하세요

// 입출력)
// 입력: AAABBBcccddd
// 출력: aaabbbCCCDDD

const input = "AAABBBcccddd";
const arr = input.split("");
let output = "";

for (let i = 0; i <arr.length; i++){
  if(arr[i] === arr[i].toUpperCase()){
    output = output + arr[i].toLowerCase();
  } else {
    output = output + arr[i].toUpperCase();
  }
} 

console.log(output);