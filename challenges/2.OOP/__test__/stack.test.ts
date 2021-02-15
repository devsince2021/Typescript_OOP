import Stack from '../stack';

let stack: Stack;

beforeEach(() => {
  stack = new Stack();
});

test('It should stack input by push method', () => {
  expect(stack.log).toBe(null);
  stack.push('test1');
  expect(stack.log).toBe('test1');
});

test('It should pop out data from the data pushed at the end', () => {
  stack.push('case1');
  stack.push('case2');
  stack.push('case3');
  expect(stack.pop()).toBe('case3');
  expect(stack.pop()).toBe('case2');
  expect(stack.pop()).toBe('case1');
});

test('It should throw an error when pop method invoked with an empty stack', () => {
  expect(() => {stack.pop()}).toThrow('It is an empty stack!');
});