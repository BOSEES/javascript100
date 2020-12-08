// 민지는 국제 포럼에서 아르바이트를 하게 되었습니다. 민지는 각 국가에서 온 참가자들의 명단을 엑셀로 정리하고 있는데 참가자들 이름이 어떤 이는
// 전부 소문자, 어떤이는 전부 대문자로 써져 있는 등의 형식이 제각각 이었습니다.
// 민지를 위해 이름이 입력되면 전부 대문자로 출력되는 프로그램을 만들어주세여.

// 입출력)
// 입력: mary
// 출력: MARY

const name = prompt("이름이?");
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.trim());
//toUpperCase() 메소드는 소문자를 대문자로 바꿔준다.
//toLowerCase() 메소드는 대문자를 소문자로 바꿔준다.
//trim()은 맨 앞뒤 공백을 제거해주는 메소드이다.