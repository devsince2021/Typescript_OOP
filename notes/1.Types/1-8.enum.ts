{
  /**
   * Enum
   * 타입스크립트에서는 될 수 있으면 쓰지 않는다.
   * Union 타입으로 대체가능
   * 코틀린이나 스위프트를 이용하는 다른 모바일 프로그램과 통신할때 이넘 사용
   */

  // JavaScript
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MON = 0;
  const TUE = 1;
  const WED = 2;
  const THU = 3;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript

  // 1.문자열 지정
  // enum Days {
  //   Monday = 'monday',
  //   Tuesday = 'tuesday',
  //   Wednesday = 'wd',
  //   Thursday = 'th',
  //   Friday = 'friday',
  //   Saturday = 'sa',
  //   Sunday = 'sn'
  // }

  // console.log(Days.Friday)

  //2. 미지정

  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }

  console.log(Days.Monday);
  let day: Days = Days.Friday
  day = Days.Tuesday;
  day = 10; // 존재하지 않는 10을 사용해도 에러가 뜨지 않는다 🏮
  console.log(day)


  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let daysOfWeek: DaysOfWeek = 'Monday';
  daysOfWeek = 'Tuesday';
}
