import { move, position } from '../game';

type Position = {
  x: number;
  y: number;
};

test('command "up" moves position y by 1', () => {
  const moveUp: Position = { x: 0, y: 1 };
  move('up');
  expect(position).toEqual(moveUp); // 객체라서 toBe는 안되고 toEqual 사용해야됨.
});

test('command "down" moves position y by -1', () => {
  const moveDown: Position = { x: 0, y: 0 };
  move('down');
  expect(position).toEqual(moveDown);
});

test('command "left" moves position x by -1', () => {
  const moveLeft: Position = { x: -1, y: 0 };
  move('left');
  expect(position).toEqual(moveLeft);
});

test('command "right" moves position x by 1', () => {
  const moveRight: Position = { x: 0, y: 0 };
  move('right');
  expect(position).toEqual(moveRight);
});