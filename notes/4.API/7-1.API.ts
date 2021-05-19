class Animal {}
class Cat extends Animal {
  isCat: boolean = true;
}

class Dog extends Animal {
  isDog: boolean = false;
}

const animal: Animal[] = [ new Cat(), new Cat(), new Dog()];

function isCat(animal: Animal): animal is Cat{
  console.log('## animal in is Cat ##', animal)
  const validated = (animal as Cat).isCat !== undefined;
  console.log('@@ val @@', validated);
  return validated;
}

const res = isCat(new Dog());
console.log('res', res)
// console.log('every', animal.every<Cat>(isCat));