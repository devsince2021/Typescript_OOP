{
  /**
   * Inheritance
   * 1. 익스텐드를 쓰려면 부모 클래스의 constructor가 프라이빗이면 안된다.
   * 2. 자식 클래스에서 오버라이트를 해도, 부모 클래스에 있는 함수의 인자와 리턴 값을 따르는 한도에서 변경 가능
   * 3. 자식 클래스에서 constructor를 사용하려면 super()를 써야한다.
   * 4. 자식 클래스의 constructor 속의 super에는 부모 클래스의 constructor에서 인자로 전달된 매개변수가 전달되어야한다.
   *    따라서, 자식 클래스를 new로 호출할 때는 부모의 인자 + 새로 추가된 자식의 인자가 들어간다.
   * 5. super + 닷노테이션으로 부모 클래스에 있는 함수들을 자식 클래스에서 호출 할 수 있다.
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }

  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans = 0;

    constructor(coffeeBeans: number) {
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

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(coffeeBeans: number, public readonly serialNumber: string) {
      super(coffeeBeans)
    }
    private steamMilk() {
      console.log('Steaming some milk...');
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      this.steamMilk();
      return {
        ...coffee,
        hasMilk: true,
      }
    }
  }

  const machine = new CoffeeMachine(23);
  const latteMachine = new CaffeLatteMachine(23, 'sss');
  const coffee = latteMachine.makeCoffee(1);
  console.log(coffee)


}
