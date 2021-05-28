class TimeoutError extends Error {}
class OfflineError extends Error {}

class NetworkClient {
  tryConnect(): void {
    throw new OfflineError('no network')
  }
}

class UserService {
  constructor(private client: NetworkClient) {}

  login() {
    this.client.tryConnect();
  }
}
class App {
  constructor(private userService: UserService) {}
  
  run() {
    try {
      this.userService.login();
      // 타입스트립트에서 error는 any 타입으로 전달
      // error instanceof OfflineError 를 사용못함
    } catch (error) {
      if (error instanceof OfflineError) {
        //
      }
    }
  }
}

const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();


/**
 * try catch하는 곳에서 의미있는 처리를 할 수 있는가를 생각해보기
 */

// class NetworkClient {
//   tryConnect(): void {
//     throw new Error('no network')
//   }
// }

// class UserService {
//   constructor(private client: NetworkClient) {}

//   login() {
//     this.client.tryConnect();
//   }
// }
// class App {
//   constructor(private userService: UserService) {}
  
//   run() {
//     try {
//       this.userService.login();
//     } catch (error) {
//       //show dialog to user
//     }
//   }
// }


// const client = new NetworkClient();
// const service = new UserService(client);
// const app = new App(service);
// app.run();


/** 
 * case1: class UserService에서 catch하면?
 * 캐치는 잡히나, 최초 호출 레이어인 app에서는 무슨상황인지 인지할 수 없음.
 * userClass에서는 잡아봐야 우아하게 핸들링이 안됨.
 * 그래서 catch는 핸들링 할 수 있는 곳에서 잡아준다.
 * /

// class NetworkClient {
//   tryConnect(): void {
//     throw new Error('no network')
//   }
// }

// class UserService {
//   constructor(private client: NetworkClient) {}

//   login() {
//     try {
//       this.client.tryConnect();
//     } catch (error) {
//       console.log('catech')
//     }
//   }
// }
// class App {
//   constructor(private userService: UserService) {}
  
//   run() {
//     this.userService.login();
//   }
// }


// const client = new NetworkClient();
// const service = new UserService(client);
// const app = new App(service);
// app.run();
*/