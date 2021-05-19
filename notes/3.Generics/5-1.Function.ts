// case1
const checkNotNullBad = (arg: number | null) => {
  if (arg == null) {
    throw new Error('####it is null');
  }
  return arg;
};

// const res = checkNotNullBad(123);
// console.log('res', res);
// checkNotNullBad(null); //error

// case2
const checkNotNullAnyBad = (arg: any | null): any => {
  if (arg == null) {
    throw new Error('####it is null');
  }
  return arg;
};
// const res2 = checkNotNullAnyBad('123');

// case3
function checkNotNull<T>(arg: T | null): T {
  if (arg == null) {
    throw new Error('####it is null');
  }
  return arg;
}

const number = checkNotNull(123);
console.log('number', number);

const string = checkNotNull('hi');
console.log('string', string);

const boolean: boolean = checkNotNull(true);
console.log('boolean', boolean);

const checkNull = <T>(arg: T | null): T => {
  if (arg == null) {
    throw new Error('####it is null');
  }
  return arg;
};

// function checkNotNull2<GENERIC>(arg:GENERIC):GENERIC {}