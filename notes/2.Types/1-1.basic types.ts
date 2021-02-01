{
  /** 
    * Javascript
    * Primitive: number, string, boolean, bigint,
    * Object: func, array,
  */

  // number
  const num: number = -6;

  // string
  const str: string = 'hi';

  // boolean
  const boal: boolean = true;

  // undefined
  let name: undefined; // 💩
  let age: number | undefined; // optional type
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return undefined;
  }

  // null
  let person: null; // 💩
  let person2: string | null;  // null 보다 undefined를 이용하는 것이 통상적


  // unknown  💩
  // 자바스크립트 라이브러리를 사용할 때, 라이브러리에서 리턴해주는 값이 무엇인지 모를 경우 사용하라고 만듬.
  // 그래도 될 수 있으면 타입을 명시하도록 한다.
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any 💩
  // unknown과 any는 될 수 있으면 사용하지마라
  let anything: any = 0;
  anything = 'hello';

  //void
  function print(): void {
    console.log('1');
    return;
  }

  let unusable: void = undefined; // 💩

  
  // never
  // 절대 리턴하지 않는다.
  function throwError(message: string): never {
    // message => server (log)
    // 1.throw new Error(message);
    while(true) {}
  }
  let neverending: never; // 💩

  // object
  // 함수, 객체, 배열 다 할당 가능함
  // 될수 있으면 이렇게 사용하면 안됨
  let obj: object // 💩
  function acceptSomeObject(obj: object) {} 
  acceptSomeObject({name: 'ellie'});
  acceptSomeObject({animal: 'dog'});
}