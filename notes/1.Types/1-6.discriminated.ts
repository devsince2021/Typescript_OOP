{
  // function: login => success, fail
  type SuccessState = {
    result: 'success',
    response: {
      body: string;
    }
  }

  type FailState = {
    result: 'fail',
    reason: string;
  }

  type LoginState = SuccessState | FailState
  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'login'
      }
    }
  }
  //printLoginState(state: LoginState)
  // success => 🎉 body
  // fail => 😂 reason


  function printLoginState(state: LoginState): void {
    if (state.result === 'success') { // success/fail 둘다 result를 가지고 있기 때문에 사용가능
      console.log(`🎉 ${state.response.body}`)
    } else {
      console.log(`😂 ${state.reason}`)
    }
  }

}