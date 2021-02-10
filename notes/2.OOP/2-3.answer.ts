{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 접근 제어자
   * public - 별도 설정 없으면 기본으로 public
   * private
   * protected - instance에서는 접근 가능 / 외부에서는 불가능
   */


  class CoffeeMaker {
    private static BEANS_GRAM_PER_SHOT = 7;  // 외부에서 CoffeeMaker.BEANS_GRAM_PER_SHOT으로 선택이 안됨.
    private coffeeBeans = 0; // fillCoffeeBeans함수를 통해서 조절 가능하도록

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    // static을 이용해서 obj를 만들 수 있는 생성자 함수를 제공한다면
    // 기존 constructor는 private 처리하면 좋다.
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
}