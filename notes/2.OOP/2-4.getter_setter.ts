{

  /**
   * getter & setter 사용 이유
   * 함수를 통해 프라이빗 값에 접근하거나 수정하는 기능;
   * 프라이빗 필드의 값을 확인 할 수 있도록 하는 기능 getter;
   * 프라이빗을 수정할 수 있도록, 하지만 내가 정한 가이드에 따라서만 수정이 가능하도록
   * 통제할 수 있는 방법 setter;
   */

  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;
    private coffeeBeans = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) throw new Error('value for beans should be greater than 0');

      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num === 10) return
      this.internalAge = num;
    }

    constructor(
      private firstName: string,
      private lastName: string
    ) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);

  console.log(user.age);
  user.age = 10;
  console.log(user.age);



}