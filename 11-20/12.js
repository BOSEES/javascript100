// 다음 소스코드에서 클래스를 작성하여 게임 캐릭터의 능력치와 "파이어볼"이 출력되게 만드시오
// 주어진 소스코드를 수정해서는 안됩니다.

{/* <여기에 class를 작성하세요.> */}
class Wizard{
  //생성자 함수.
  constructor(health,mana,armor){
    //this를 지정하여 인스턴스를 분명하게 해야할 필요가 있다.
    this.health = health;
    this.mana = mana;
    this.armor = armor;
  }
  //클래스 안에 함수를 작성할때 앞에 function을 사용하지 않는다. 이건 솔리디티와 분명한차이점이 있음. 유의 해야함.
  attack(){
    console.log("파이어볼");
  }
}

const x = new Wizard(545, 210, 10);
console.log(x.health, x.mana, x.armor);
x.attack();

// 출력 545 210 11
//     파이어볼
