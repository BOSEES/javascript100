// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

// const input = 101112131415;
// const arr = input.toString().split("");
// let sum = 0;

// for (let i = 0; i < arr.length; i++){
//   sum = sum + parseInt(arr[i],10);
// }

// console.log(sum);

let arr = [];
let sum = 0;

for (let i = 0; i < 20; i++){
  arr[i] = i + 1;
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})
console.log(sum);

//forEach() 메소드는 array의 엘리먼트 를 돌면서 출력하는 함수;
