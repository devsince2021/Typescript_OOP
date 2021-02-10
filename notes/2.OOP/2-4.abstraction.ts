{
  /**
    * abstrction
    * 접근제어자를 통해서 구현 가능, 인터페이스 없는 경우, 정보은닉을 통해서 추상화 가능
    * interface를 통해서 추상화, 타입 제한 가능
    * 하나의 클래스로 다르게 작동하는 여러개의 인스턴스를 만들 수 있음.
   */
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
    * interface
    * 클래스에 대한 표준안, 스펙을 제시하는 느낌
    * '내 인터페이스를 가져다 쓰려면 내가 제시하는 조건을 충족해야한다.'
    * 이름은 interface ICoffeeMaker / class CoffeeMakerImpl 같이 네이밍

    * class CoffeeMachine implements CoffeeMaker
    * class CoffeeMachine은 interface CoffeeMaker를 따라서 구현되었다는 뜻.
    * 인터페이스를 따르는 클래스에서는, 인터페이스에 명시되어있는 모든 함수를 구현해야한다.
    * 인터페이스는 타입 제한을 할 수 있다!!!
   */

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  interface CommercialCoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
    fillCoffeeBeans(shots: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error('value for beans should be greater than 0');

      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log(`grinding beans for ${shots}`);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;
    }

    private preheat() {
      console.log('heating up...');
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling ${shots} shots...`);

      return {
        shots,
        hasMilk: false,
      };
    }

    clean() {
      console.log('cleaning')
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  // const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // maker.fillCoffeeBeans(100);
  // maker.makeCoffee(2);

  // const maker2: CoffeeMachine = CoffeeMachine.makeMachine(32);
  // // maker2.fillCoffeeBeans(100); // 사용못하게 됨.
  // maker2.makeCoffee(2);

  // const maker3: CommercialCoffeeMaker = CoffeeMachine.makeMachine(32);
  // maker3.fillCoffeeBeans(100);
  // maker3.makeCoffee(2);
  // maker3.clean();


  // interface의 응용으로 하나의 클래스를 여러가지 형태로 운용할 수 있음.
  class AmateurUser {
    private machine: CoffeeMaker;

    constructor(machine: CoffeeMaker) {
      this.machine = machine;
    }

    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee)
    }
  }

  class ProBarista {
    constructor(private machine: CommercialCoffeeMaker) {}
    makeCoffee() {
      const coffee = this.machine.makeCoffee(2);
      console.log(coffee)
      this.machine.fillCoffeeBeans(45);
      this.machine.clean();
    }
  }

  const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  const amateur = new AmateurUser(maker);
  const pro = new ProBarista(maker);
  pro.makeCoffee();
}
