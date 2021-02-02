{
  // JavaScript
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript ✨
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // // JavaScript
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript ✨✨
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  //JavaScript => TypeScript
  // Optional parameter1.
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName);
  }

  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Anna', undefined);


  // Optional parameter2.
  function printName2(firstName: string, lastName: string | undefined) {
    console.log(firstName);
    console.log(lastName);
  }

  printName2('Steve', 'Jobs');
  //printName2('Ellie'); // printName2('Ellie', undefined); 언디파인드를 필수로 전달해야함.
  printName2('Anna', undefined);

  //Default parameter
  function printMessage(message: string = 'default message'): void {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...rest: number[]): number {
    return rest.reduce((acc: number, val: number): number => {
      return acc += val;
    }, 0);
  }

  // console.log(addNumbers(1, 2, '2')); //숫자만 가능한 배열
  console.log(addNumbers(1,2,3,4));
}