// 공백으로 구분하여 두 숫자 a와 b가 주어지면, a의 b승을 구하는 프로그램을 작성하시오.

function test(a, b) {
  let score = `${a} ${b}`;
  let arr = score.split(" ");

  console.log(Math.pow(parseInt(arr[0],10),parseInt(arr[1],10)));
}
test(2,2);

//Math.pow() 자바스크립트 내장 함수이다. 제곱을 구하는 메소드.
