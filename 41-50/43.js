// 우리가 흔히 사용하는 숫자 1, 8, 19, 28893 등등...은 10진수 체계입니다.
// 이를 컴퓨터가 알아 들을 수 있는 2진수로 바꾸려고 합니다. 어떻게 해야할까요?

// 사용자에게 숫자를 입력받고 이를 2진수를 바꾸고 그 값을 출력해주세요.

let input = "160";
const arrBinary = [];

// while(input){
//   arrBinary.push(input%2);
//   input = Math.floor(input/2);
// }

// console.log(arrBinary.reverse().join(""));
//여기서 while 문을 사용해 0이 된다면 false를 리던하게 만들어서 종료시키는 로직을 구성했다.

//더 쉬운 방법은 자바스크립트 내장객체를 이용하는 방법
console.log(parseInt(input, 10).toString(2));
// toString()메소드 이용하기 string type을 string으로 바꾸지 못하기 때문에 미리 유효성검사를 하기위해 parseInt()메소드로 확실하게 조건을 걸었다.
