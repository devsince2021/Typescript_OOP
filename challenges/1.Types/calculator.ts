/**
 * Let's make a calculator 🧮
 */

{
  const calculate = (operation: string, para1: number, para2: number): number => {
    switch (operation) {
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
    }
  };

  console.log(calculate('add', 1, 3)); // 4
  console.log(calculate('substract', 3, 1)); // 2
  console.log(calculate('multiply', 4, 2)); // 8
  console.log(calculate('divide', 4, 2)); // 2
  console.log(calculate('remainder', 5, 2)); // 1
}
