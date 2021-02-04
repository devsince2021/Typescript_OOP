import { calculate } from '../calculator';

test('it operate 2nd and 3rd parameters based on 1st parameter', () => {
  expect(calculate('add', 1, 2)).toBe(3);
  expect(calculate('substract', 4, 2)).toEqual(2); // toEqual recursively check every fields of an object or an array;
  expect(calculate('multiply', 1, 2)).not.toBe(1);
  expect(calculate('divide', 4, 4)).toBeTruthy();  // check it is truthy in if statement
  expect(calculate('remainder', 4, 4)).toBeFalsy(); // check it is falsy in if statement
});

test('it could handle decimal nubmers', () => {
  expect(calculate('add', 0.1, 0.2)).not.toBe(0.3);
  expect(calculate('add', 0.1, 0.2)).toBeCloseTo(0.3);  // float conception
})

test('the typeof return value should be a number type', () => {
  const result = calculate('add', 2, 3);
  expect(typeof result).toMatch('number');
});

test('the typeof return value does not have a character "i".', () => {
  const result = calculate('add', 2, 3);
  expect(typeof result).not.toMatch(/i/);  // Use toMatch to test string types
  expect(typeof result).toMatch(/m/);
});