{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMachine {
    coffeeBeanGram: number;

    private BEANS_GRAM_PER_SHOT: number = 10;

    constructor(gram: number) {
      this.coffeeBeanGram = gram;
    };

    static updateCoffeeBeanGram (currentAmount: number, usedAmount: number): number {
      return currentAmount - usedAmount;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeanGram < shots * this.BEANS_GRAM_PER_SHOT) {
        throw new Error('Not enough coffee beans');
      }

      // coffeeBeanGram -= shots * BEANS_GRAM_PER_SHOT;
      this.coffeeBeanGram = CoffeeMachine.updateCoffeeBeanGram(this.coffeeBeanGram, shots * this.BEANS_GRAM_PER_SHOT)
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