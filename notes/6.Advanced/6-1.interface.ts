type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

// Object ⭐️
// 오브젝트를 정의하고 할당
const obj1: PositionType = {
  x: 1,
  y: 2,
};

const obj2: PositionInterface = {
  x: 3,
  y: 4,
}

// Class ⭐️
class Pos1 implements PositionType {
  x: 1;
  y: 2;
};

class Pos2 implements PositionInterface {
  x: 3;
  y: 4;
}

// Extends
interface ZpositionInterface extends PositionInterface {
  z: 1;
}

type ZpositionType = PositionType & { z: number };



// 🎾 Only interface can be merged!
interface PositionAdd {
  x: number;
  y: number;
}

const obj3: PositionAdd = {
  x: 1,
  y: 2,
  // 추가 된 인터페이스의 내용도 포함해야함
  z: 3,
}

interface PositionAdd {
  z: number;
}

// 🏉 type aliases can use computed propertites.
type Person = {
  name: string;
  age: number;
};

type employee = Person['name'];
type NumberType = number;
type direction = 'left' | 'right';


/**
 *  타입과 인터페이스
 *  1. 인터페이스는 클래스를 구현한하는 규약, 계약서 이다.
 *  구현 목적
 *  이 클래스에는 '이러 이러한 기능이 들어있다.' 를 보여준다.
 * 
 *  2. 타입
 *  데이터를 담는 목적
 *  내용을 담고 있는 경우 타입을 사용
 */