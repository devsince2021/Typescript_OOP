{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  const BEANS_GRAM_PER_SHOT = 7;
  let coffeeBeanGram = 0;

  const makeCoffee = (shots: number): CoffeeCup => {
    if (coffeeBeanGram < shots * BEANS_GRAM_PER_SHOT) {
      throw new Error('Not enough coffee beans');
    }

    coffeeBeanGram -= shots * BEANS_GRAM_PER_SHOT;
    return {
      shots,
      hasMilk: false,
    };
  }

  coffeeBeanGram += 3 * BEANS_GRAM_PER_SHOT;
  const coffee = makeCoffee(2);
  console.log(coffee);
}