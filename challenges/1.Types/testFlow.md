# How to test typescript

## 🧬 Install

<br />

### 1. jest 설치

<br />

```
  npm i -D typescript

  npm i -D jest

  npm i -D @types/jest  //bring types of the typescript

  npm i -D ts-jest //make code to complie before test
```

<br />

### 2. ts-jest conifg

<br />

- 타입 체크를 하고 싶으면 바벨 대신에 ts-jest 사용하세요.

- https://github.com/kulshekhar/ts-jest

```
  npx ts-jest config:init  // jest.config.js 파일이 생성

```

- jest.config.js 설정

```
  module.exports = {
    roots: ['<rootDir>/challenges/1.Types'],   // 테스트를 할 파일의 위치를 설정
    transform: {
      '^.+\\.tsx?$': 'ts-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  }
```

<br />

### 3. tsconfig.json

<br />

- tsconfig.json 파일 만들거나
- 명령어 $tsc --init;
- conifg 설정

```
  {
    "compilerOptions": {
      "target": "es5",
      "module": "commonjs",
      "lib": ["es2015"],
      "strict": true,
      "declaration": true,
      "outDir": "dist",
      "sourceMap": true
    },
    "include": ["challenges/**/*"],
    "exclude": ["node_modules", "**/*.spec.ts"]
  }
```
