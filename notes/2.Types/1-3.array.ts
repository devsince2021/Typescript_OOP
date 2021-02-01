{
  // Array
  const fruit: string[] = ['tomato', 'banana'];
  const scores: Array<number> = [1, 2, 3];

  function printArray(fruits: readonly string[]): void {
    //fruits.push // readonly인 변수는 변경 불가 ( readonly string[] - 가능 / readonly Array<string> - 불가능 )
  }

  // Tuple -> interface, type alias, class 등으로 대체해서 사용 권장
  // 내가 무엇인가 동적으로 리턴하는 경우, 클래스나 인터페이스로 묶기 애매한 경우, 동적으로 타입을 묶는 경우, 사용자가 이름을 설정해서 쓰는경우에 사용
  // 리액트의 useState
  
  let student: [string, number];
  student = ['Ellie', 1];
  student[0] // Ellie
  student[1] // 1
  
  // [0], [1]에 어떤 값이 들어있는지 따로 확인해야지 알수 있어서 가독성이 떨어진다
  // student.name, student.age 와 같은 방식으로 쓰면 더 가독성이 좋다.

  const [ name, age ] = student; // 정 쓰고 싶다면 디스트럭쳐링. 그래도 처음 정해진 곳이 아닌 사용되는 곳에서 다시 변수명을 설정하게됨. 별로임
}