{

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  /**
   * abstract keyword
   * 클래스 앞에 abstract가 붙으면 생성자의 기능 상실, 객체를 생성할 수 없음.
   */

  abstract class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans = 0;

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
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

    // protected > abstract 순으로 키워드 나열
    // 메소드의 내용이 존재하지 않는다.
    // 상속받은 클래스에서 항상 따로 내용을 구현해야함.

    protected abstract extract(shots: number): CoffeeCup;

    clean() {
      console.log('cleaning')
    }

    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans)
    }
    private steamMilk() {
      console.log('Steaming some milk...');
    }

    protected extract(shots: number): CoffeeCup {
      this.steamMilk();
      return {
        shots,
        hasMilk: true,
      }
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    private syrup: number;

    constructor(coffeeBeans: number, syrup: number) {
      super(coffeeBeans);
      this.syrup = syrup;
    }

    addSyrup(syrupShot: number) {
      console.log(`put ${syrupShot} syrup`);
    }
    
    protected extract(shots: number): CoffeeCup {
      this.addSyrup(shots);
      return {
        shots,
        hasSugar: true,
      }
    }
  }

  const machines: CoffeeMaker[] = [
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16, 2),
    new CaffeLatteMachine(16, '1'),
    new SweetCoffeeMaker(16, 3),
  ];

  machines.forEach(machine => {
    console.log('------');
    machine.makeCoffee(1);
  });
}
