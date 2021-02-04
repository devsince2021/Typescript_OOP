{
  /**
   * Print Loading State
   */
{
  //type alias, define type
  type LoadingState = {
    state: 'loading';
  };

  //type alias, define type
  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  //type alias, define type
  type FailState = {
    state: 'fail';
    reason: string;
  };

  // type alias
  // union type
  type ResourceLoadState = LoadingState | SuccessState | FailState;

  const printLoginState = (loadState: ResourceLoadState) => {
    if (loadState.state === 'loading') {
      console.log(`👀 ${loadState.state}...`);
    } else if (loadState.state === 'success') {
      console.log(`😃 ${loadState.response.body}`);
    } else {
      console.log(`😱 ${loadState.reason}`);
    }
  }

    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
  }
}