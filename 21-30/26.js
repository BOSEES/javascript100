// 우리 태양계를 이루는 행성은 수성, 금성, 지구, 화성, 목성, 토성, 천왕성, 해왕성이 있습니다.
// 이 행성들의 영어 이름은 Mercury,Venus,Earth, Mars, Jupiter, Saturn, Uranus, Neptune 입니다.

const planets = {
  "수성": "Mercury",
  "금성": "Venus",
  "지구": "Earth",
  "화성": "Mars",
  "목성": "Jupiter",
  "토성": "Saturn",
  "천왕성": "Uranus",
  "해왕성": "Neptune",
}
const korean = prompt("행성이름(한글)");
console.log(planets[korean]);