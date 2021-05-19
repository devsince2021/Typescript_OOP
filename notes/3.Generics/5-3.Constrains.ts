interface Employee {
  pay: () => void;
};

class FulltimeEmployee implements Employee {
  pay() {
    console.log('fulltime');
  }

  workFulltime() {
    console.log('workFulltime 2nd func');
  }
}

class PartTimeEmployee implements Employee {
  pay() {
    console.log('part-time');
  }

  workPartTime() {
    console.log('workParTime 2nd func');
  }
}


const payBad = (employee: Employee): Employee => {
  employee.pay();
  return employee;
};

const pay = <T extends Employee>(employee: T): T => {
  employee.pay();
  return employee;
}

const ellie = new FulltimeEmployee();
const bob = new PartTimeEmployee();
ellie.workFulltime();

const ellieAfterPay = pay(ellie);
const bobAfterPay = pay(bob);

const obj = {
  name: 'ellie',
  age: 20,
};

const obj2 = {
  animal: 'dog'
};

// getValue(obj, 'name'); // ellie

const getValue = <T, K extends keyof T>(obj, key): T[K] => {
  return obj[key];
};

// const getValue = (obj: T, key: K): V => {

// };