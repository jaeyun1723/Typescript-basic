// .eslintrc.js
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-unused-vars": ["warn"], // 사용 안한 변수 warn
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
        singleQuote: false,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: "avoid",
      },
    ],
  },
  parserOptions: {
    parser: "@typescript-eslint/parser",
  },
};

/*
"error": Prettier의 규칙을 위반하는 경우 에러를 발생시킵니다. 이렇게 하면 개발자가 코드 스타일을 준수하도록 강제할 수 있습니다.
endOfLine: "auto": 파일의 끝에 있는 줄바꿈 문자를 자동으로 설정합니다. 다양한 운영 시스템 간의 줄바꿈 차이를 자동으로 처리합니다.
singleQuote: false: 문자열을 쓸 때 단일 인용부호(') 대신 이중 인용부호(")를 사용하도록 지정합니다.
semi: true: 명령문 끝에 세미콜론(;)을 붙이도록 설정합니다. 이는 명령문의 끝을 명확하게 표시하는데 도움이 됩니다.
useTabs: false: 들여쓰기에 탭 대신 공백을 사용합니다. 공백을 사용하면 코드가 다양한 에디터와 환경에서 동일하게 보일 수 있습니다.
tabWidth: 2: 탭을 사용하지 않고 공백을 사용할 때, 한 탭의 너비를 2개의 공백으로 설정합니다.
printWidth: 80: 한 줄의 최대 길이를 80자로 설정합니다. 이를 통해 가독성을 높이고 코드의 복잡성을 줄일 수 있습니다.
bracketSpacing: true: 객체 리터럴의 중괄호({}) 사이에 공백을 추가합니다. 예를 들어 { foo: bar }와 같이 표현됩니다.
arrowParens: "avoid": 화살표 함수에서 단일 매개변수에 대해 괄호를 생략하도록 설정합니다. 예를 들어, x => x * 2와 같이 표현됩니다.
*/
