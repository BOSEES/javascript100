// 2제곱,3제곱,4제곱을 할수 있는 factory 함수를 만들려고합니다.
// <pass> 에 코드를 작성하여 two 함수를 작성하시요.

function one(n){
  function two(x){
    //pass
    return Math.pow(x, n);
  }
  return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));