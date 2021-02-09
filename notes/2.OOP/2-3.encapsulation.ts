{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    private coffeeBeanGram: number;
    private static BEANS_GRAM_PER_SHOT: number = 10;

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

  const maker = new CoffeeMachine(11)
  maker.makeCoffee(1)
}