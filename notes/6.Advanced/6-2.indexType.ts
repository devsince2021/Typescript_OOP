const obj = {
  name: 'ellie',
};

obj.name;
obj['name'];

type Animal = {
  name: string;
  age: number;
  gender: 'male' | 'female';
};

type Name = Animal['name'];
const text: Name = 'hi';

type Gender = Animal['gender'];

type Keys = keyof Animal;
const keys: Keys = 'age';

type Person = {
  name: string;
  gender: Animal['gender'];
};

const han: Person = {
  name: 'han',
  gender: 'male',
};


