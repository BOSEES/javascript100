// 공백으로 구분하여 두 숫자가 주어집니다.
// 두번째 숫자로 첫번쨰 숫자를 나누었을때 그 몫과 나머지를 공백으로 구분하여 출력하세요.

// 입출력)
// 입력: 10 2
// 출력: 5 0

function test(a, b){
  let score = `${a}${b}`;
  let arr = score.split("");
  let val1 = Math.floor(parseInt(arr[0],10)/parseInt(arr[1],10));
  let val2 = parseInt(arr[0],10)%parseInt(arr[1],10);

  console.log(val1,val2);
}

test(7,2);

