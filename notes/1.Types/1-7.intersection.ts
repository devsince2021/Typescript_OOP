{
  /**
   * Intersection: And
   * Union: Or
   */

   type Student = {
     name: string;
     score: number;
   };

   type Worker = {
     employeeId: number;
     work:() => void;
   }

   function internWork(person: Student & Worker ) {
     console.log(person.name, person.score, person.employeeId, person.work());
   }

   internWork({
     name: 'ellie',
     score: 3.5,
     employeeId: 123,
     work: () => {}
   })
}