import {
  printLoginState,
  LoadingState,
  SuccessState,
  FailState,
} from '../loading';

// toMatch는 regex 스타일로 /character/ 슬래쉬 속의 문자열을 포함하는지 확인한다.
// toContain object를 순회하면서 값을 매치 할 때 사용


test('if the state of parameter is "loading", then it would return "loading"', () => {
  let testLoading: LoadingState = {
    state: 'loading'
  }

  expect(printLoginState(testLoading)).toMatch(/loading/);
  expect(printLoginState(testLoading)).toContain('l'); // 문자열을 돌면서 확인하는듯?
  expect(printLoginState(testLoading)).toEqual('loading');
  expect(printLoginState(testLoading)).toBe('loading');
});

test('if the state of parameter is "success", then it would return "success"', () => {
  let testSuccess: SuccessState = {
    state: 'success',
    response: {
      body: 'success'
    }
  }

  expect(printLoginState(testSuccess)).toMatch(/success/);
  expect(printLoginState(testSuccess)).toContain('su'); // 문자열을 돌면서 확인하는듯?
  expect(printLoginState(testSuccess)).toEqual('success');
  expect(printLoginState(testSuccess)).toBe('success');
});

test('if the state of parameter is "fail", then it would return "fail"', () => {
  let testFail: FailState = {
    state: 'fail',
    reason: 'fail'
  }

  expect(printLoginState(testFail)).toMatch(/fail/);
  expect(printLoginState(testFail)).toContain('l'); // 문자열을 돌면서 확인하는듯?
  expect(printLoginState(testFail)).toEqual('fail');
  expect(printLoginState(testFail)).toBe('fail');
});
