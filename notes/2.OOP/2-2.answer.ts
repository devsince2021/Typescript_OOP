{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  /**
   * 클래스를 만든다는 것은..
   * 1. 관련 있는 데이터와 함수들을 한 곳으로 묶는 것
   * 2. obj를 찍어낼 수 있는 템플릿을 만들어내는 것
   */

   /**
   * 클래스 용법
   * 1. 변수 선언시 let, const 사용 안함.
   * 2. 클래스 속의 멤버 변수에 접근할 때는 this 사용.
   * 3. obj마다 새로 만들어져야되는 변수가 있다면 obj 레벨에서 생성
   * 4. 클래스 레벨에서 공유되는 것은 'static'이용해서 공유 가능
   * 5. 함수에도 static 키워드 사용가능
   */

   /**
    * static keyword
    * 포인트는 클래스 레벨에서 사용하고 싶을 때 붙인다는 것!!
    * 스태틱이 붙으면 new 키워드 없이 `const maker = CoffeeMaker.makeMachine();` 으로 사용 가능
    * 스태틱이 없으면 `const maker2 = new CoffeeMaker(); maker2.makeMachine()` 처럼 인스턴스에서 닷으로 호출해야함
    */

  class CoffeeMaker {
    static BEANS_GRAM_PER_SHOT = 7; // class level
    coffeeBeans = 0; // instance(obj) level

    constructor(coffeeBeans: number) {    //클래스를 가지고 obj를 만들 때 호출되는 함수
      this.coffeeBeans = coffeeBeans;
    }

    //constructor 대신 사용 가능
    //클래스 내부의 어떤 값도 필요하지 않기때문에 이렇게 사용가능
    //순수함수로
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }
    

    makeCoffee (shots: number): CoffeeCup {
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

  const maker = new CoffeeMaker(32);
  const maker2 = new CoffeeMaker(64);

  const maker3 = CoffeeMaker.makeMachine(100)
}