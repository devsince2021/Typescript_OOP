
/**
 * Print Loading State
 */
//type alias, define type
export type LoadingState = {
  state: 'loading';
};

//type alias, define type
export type SuccessState = {
  state: 'success';
  response: {
    body: string;
  };
};

//type alias, define type
export type FailState = {
  state: 'fail';
  reason: string;
};

// type alias
// union type
export type ResourceLoadState = LoadingState | SuccessState | FailState;

export const printLoginState = (loadState: ResourceLoadState) => {
  if (loadState.state === 'loading') {
    // console.log(`👀 ${loadState.state}...`);
    return 'loading';
  } else if (loadState.state === 'success') {
    // console.log(`😃 ${loadState.response.body}`);
    return 'success';
  } else {
    // console.log(`😱 ${loadState.reason}`);
    return 'fail';
  }
}

printLoginState({ state: 'loading' }); // 👀 loading...
printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
  