{

  /**
   * 상속의 문제점
   * 상속의 깊이가 깊어질 수록 복잡도가 증가한다. 족보가 꼬인다.
   * 부모클래스를 수정하면 이를 상속하는 모든 자식 클래스에 영향을 준다.
   * 타입스크립트는 복수의 부모를 상속할 수 없다.
   */

   /**
    * composition
    * 필요한 기능을 클래스 별로 넣는 것이 아니라
    * 필요한 클래스를 따로 만들고 클래스를 상황에 맞추어 가져다가 사용
    * 아래의 코드는 클래스 간에 커플링이 강하게 되어있어서 문제가 된다.
    */

   /**
    * dependency injection
    * 필요한 기능을 하는 다른 클래스를 인자로 받아서 사용.
    */

  type CoffeeCup = {
    shots: number;
    hasMilk?: boolean;
    hasSugar?: boolean;
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

  // 싸구려 우유 거품기
  class CheapMilkSteamer {
    private steamMilk() {
      console.log('Steaming some milk...');
    }

    makeMilk(cup: CoffeeCup): CoffeeCup {
      this.steamMilk();
      return {
        ...cup,
        hasMilk: true,
      }
    }
  }

  class AutomaticSugarMixer {
    private getSugar(): boolean {
      console.log('Getting sugar from jar');
      return true;
    }

    addSugar(cup: CoffeeCup): CoffeeCup {
      const sugar = this.getSugar();
      return {
        ...cup,
        hasSugar: sugar,
      };
    }
  }

  class CaffeLatteMachine extends CoffeeMachine {
    constructor(
      coffeeBeans: number,
      public readonly serialNumber: string,
      private milkFrother: CheapMilkSteamer
    ) {
      super(coffeeBeans);
    }
    

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.milkFrother.makeMilk(coffee);
    }
  }

  class SweetCoffeeMaker extends CoffeeMachine {
    constructor(private beans: number, private sugar: AutomaticSugarMixer) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      return this.sugar.addSugar(coffee);
    }
  }

  class SweetCaffeLatteMachine extends CoffeeMachine {
    constructor(
      private beans: number,
      private milkFrother: CheapMilkSteamer,
      private sugar: AutomaticSugarMixer,
    ) {
      super(beans);
    }

    makeCoffee(shots: number): CoffeeCup {
      const coffee = super.makeCoffee(shots);
      const sugarAdded = this.sugar.addSugar(coffee);
      return this.milkFrother.makeMilk(sugarAdded);
    }
  }
}
