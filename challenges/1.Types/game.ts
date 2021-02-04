/**
 * Let's make a game 🕹
 */
{
  // type alias : type 내가 타입을 정의 할 수 있다.
  // string literal types
  // union type: Or - type alias를 사용하는 방법 중 하나.
  
  type Direction = 'up' | 'down' | 'left' | 'right';

  // type alias
  type Position = {
    x: number;
    y: number;
  };

  const position: Position = {
    x: 0,
    y: 0,
  };

  const move = (direction: Direction): void => {
    switch (direction) {
      case 'up':
        position.y++;
        return;
      case 'down':
        position.y--;
        return;
      case 'left':
        position.x--;
        return;
      case 'right':
        position.x++;
        return;
    }
  }

  console.log(position); // { x: 0, y: 0}
  move('up');
  console.log(position); // { x: 0, y: 1}
  move('down');
  console.log(position); // { x: 0, y: 0}
  move('left');
  console.log(position); // { x: -1, y: 0}
  move('right');
  console.log(position); // { x: 0, y: 0}
}