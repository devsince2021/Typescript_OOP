type NetworkErrorState = {
  result: 'fail';
  reason: 'offline' | 'down' | 'timeout';
}

type SuccessState = {
  result: 'success';
}
type ResultState = SuccessState | NetworkErrorState;

class NetworkClient {
  tryConnect(): ResultState {
    
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
      
    }
  }
}


const client = new NetworkClient();
const service = new UserService(client);
const app = new App(service);
app.run();