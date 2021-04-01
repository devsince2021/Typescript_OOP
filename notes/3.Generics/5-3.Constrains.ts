interface Employee {
  pay(): void;
};

class FulltimeEmployee implements Employee {
  pay() {
    console.log(`fulltime`);
  }

  workFullTime() {

  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log(`part time`);
  }

  workPartTime() {

  }
}

//세부적인 타입을 인자로 받아서 정말 추상적인 타입으로 다시 리턴하는 함수는 똥!
function payBad(employee: Employee): Employee {
  employee.pay();
  return employee;
};

function pay<T extends Employee>(employee: T): T {
  employee.pay();
  return employee;
}

const ellie = new FulltimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFullTime();
bob.workPartTime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: '🦨',
};

const getValues = <T, K extends keyof T>(obj: T, key: K): T[K] => {
  return obj[key];
};
