{
  // 타입스크립트가 강력한 이유! 바로 타입 엘리어스가 가능해서!
  /**
   * Type Aliases - 내가 새로운 타입을 정의할 수 있다.
   */

   type Text = string;
   const name: Text = 'han';
   const name2: string = 'han';

   type Num = number;
   const number: Num = 1;
   const number2: number = 2;

   type Student = {
     name: string,
     age: number,
   };

   const student: Student = {
    name: 'han',
    age: 32
   };

  //  const animal: Student = {
  //    animal: 'han',  완전 똑같아야함
  //    age: 32
  //  };

   type Student2 = {
     name: Text,
     age: Num,
   };

   const student2: Student2 = {
     name: 'lin',
     age: 32
   };

   /**
    * String Literal Types
    */
   type Name = 'name';
   let ellieName: Name;
   ellieName = 'name';
  //  ellieName = 'han'  name만 할당가능

  type JSON = 'json';
  const json: JSON = 'json';

  
}