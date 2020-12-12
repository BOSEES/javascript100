const s = "hello world";

const n = 25 + parseInt((s.length/2), 10);

//왼쪽부터 채우기
const a = s.padStart(n, "=");

//오른쪽 채우기
const b = a.padEnd(50, "=");
console.log(b);

//padStart(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 왼쪽부터 주어진 문자열로 채움
//padEnd(길이, 채울 문자열) : 주어진 길이만큼 원래 문자열의 오른쪽부터 주어진 문자열로 채움