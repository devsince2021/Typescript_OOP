{
  /**
   * Union Types: OR
   * 여러 케이스 중 하나를 입력하고 싶은 경우에 유니언 타입이용
   */

  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction): void {
    console.log(direction)
  }

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 8;

  // function: login => success, fail
  type SuccessState = {
    response: {
      body: string;
    }
  }

  type FailState = {
    reason: string;
  }

  type LoginState = SuccessState | FailState
  function login(): LoginState {
    return {
      response: {
        body: 'login'
      }
    }
  }

  // function login(id: string, password: string): Promise<LoginState> {
  //   return new Promise((resolve) => {
  //     return {
  //       response: {
  //         body: 'login'
  //       }
  //     };
  //   });
  // }

  //printLoginState(state: LoginState)
  // success => 🎉 body
  // fail => 😂 reason


  function printLoginState(state: LoginState): void {
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`)
    } else {
      console.log(`😂 ${state.reason}`)
    }
  }

  printLoginState({reason: 'wrong password'})
}