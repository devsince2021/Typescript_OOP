{
  /**
   * getter & setter 사용 이유
   * 함수를 통해 프라이빗 값에 접근하거나 수정하는 기능;
   * 프라이빗 필드의 값을 확인 할 수 있도록 하는 기능 getter;
   * 프라이빗을 수정할 수 있도록, 하지만 내가 정한 가이드에 따라서만 수정이 가능하도록
   * 통제할 수 있는 방법 setter;
   */

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    private internalAge = 4;
    
    get age(): number {
      return this.internalAge;
    }

    set age(num: number) {
      if (num === 10) return
      this.internalAge = num;
    }

    constructor(
      private firstName: string,
      private lastName: string
    ) {}
  }

  const user = new User('Steve', 'Jobs');
  console.log(user.fullName);

  console.log(user.age);
  user.age = 10;
  console.log(user.age);
}
