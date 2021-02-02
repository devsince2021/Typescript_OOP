{
/**
 * Type Inference
 * 함수는 필수
 * 원시타입도 그냥적어라 왠만하면
 */

 let text = 'hello';
 text = 'hi'; // possible
 //text = 1; // impossible;

 function print(message) { // message에 any가 할당됨.
   console.log(message);
 }

 print('hello');
 print(1);

 function add(x: number, y: number) {
   return x + y;
 }

 const result = add(1,2); // result는 자동으로 타입이 number가 됨
}