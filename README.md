# React Study

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
### `npm start`

development mode로 실행합니다.

### `npm run build`

만든 app을 배포에 적합하게 변환합니다.
결과물은 /build에 생성됩니다.

## 초기 세팅 방법

1. node 설치 확인
   
   `node -v`
   
   버전이 나타나지 않는 다면 node 설치하기

2. 리액트 설치하기
   
   `npm install react`

3. 리액트 초기 환경 세팅하기
   
   `npx create-react-app 프로젝트이름`
   
   /프로젝트이름 안에 리액트 초기 환경을 만들어 줍니다.

4. 생성한 프로젝트로 이동
   
   `cd 프로젝트이름`

    이동 안 하고 `npm start`하면 오류 발생!

    프로젝트이름/package.json 안에 scripts에 `npm start`가 동작하게 되있기 때문에 오류가 발생합니다.
    ```
    "scripts": {
        "start": "react-scripts start",
        ...,
        }
    ```