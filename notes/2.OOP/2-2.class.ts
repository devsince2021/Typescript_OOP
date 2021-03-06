{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    coffeeBeanGram: number;

    static BEANS_GRAM_PER_SHOT: number = 10;

    constructor(gram: number) {
      this.coffeeBeanGram = gram;
    };

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeanGram < shots * CoffeeMachine.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      this.coffeeBeanGram -= shots * CoffeeMachine.BEANS_GRAM_PER_SHOT;

      return {
        shots,
        hasMilk: false,
      };
    }
  };

  const firstCoffeeMachine = new CoffeeMachine(100);
  console.log(firstCoffeeMachine, 'fcm')
  console.log(firstCoffeeMachine.coffeeBeanGram, '1');
  const coffeeByFCM = firstCoffeeMachine.makeCoffee(2);
  console.log(coffeeByFCM);
  console.log(firstCoffeeMachine.coffeeBeanGram, '2');
}