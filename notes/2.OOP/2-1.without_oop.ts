{

  /**
   * 내 생각의 개선점
   * 나는 'coffee'라는 string을 리턴했는데, 영상에서는 'coffeecup'이라는 객체를 리턴했다.
   * 객체 지향이니까, 더 많은 정보를 추상적으로 담을 수 있고 추가적으로 확장 및 재사용이 용이한 객체형태로 표현하는게 좋은 듯.
   * 추상화
   */

  /**
   * 이 코드의 문제
   * 상수, 커피콩 등 데이터들이 밖에서 뒹굴고 있다.
   */

  type CoffeeBean = {
    specise: string;
    amount: number;
  };

  const guatemala: CoffeeBean = {
    specise: 'guatemala',
    amount: 0
  };

  const BEANS_GRAM_PER_SHOT = 10;

  const makeCoffee = (shots: number): string => {
    if (guatemala.amount < BEANS_GRAM_PER_SHOT * shots) throw new Error('Please buy more coffee beans');

    guatemala.amount -= BEANS_GRAM_PER_SHOT * shots;
    return `${shots}shots coffee`;
  };

  guatemala.amount += 100;
  console.log(guatemala.amount);
  makeCoffee(1);
  console.log(guatemala.amount);
  makeCoffee(4);
  console.log(guatemala.amount);
}
