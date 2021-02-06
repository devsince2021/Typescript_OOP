/**
 * Let's make a calculator 🧮
 */


type Command = 'add' | 'substract' | 'multiply' | 'divide' | 'remainder';
export const calculate = (command: Command, para1: number, para2: number): number => {
  switch (command) {
    case 'add':
      return para1 + para2;
    case 'substract':
      return para1 - para2;
    case 'multiply':
      return para1 * para2;
    case 'divide':
      return para1 / para2;
    case 'remainder':
      return para1 % para2;
    default:
      throw new Error('unknown command');
  }
};

// console.log(calculate('add', 1, 3)); // 4
// console.log(calculate('substract', 3, 1)); // 2
// console.log(calculate('multiply', 4, 2)); // 8
// console.log(calculate('divide', 4, 2)); // 2
// console.log(calculate('remainder', 5, 2)); // 1
