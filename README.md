# React Study

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
### `npm start`

development mode로 실행합니다.

### `npm run build`

만든 app을 배포에 적합하게 변환합니다.
결과물은 /build에 생성됩니다.
<details>
<summary>초기 세팅 방법</summary>
<div markdown="1">

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

+. index.css에 Reset CSS 적용하기
</div>
</details>

<details>
<summary>컴포넌트 만들기</summary>
<div markdown="1">

1. src/Component 폴더 만들기
2. src/Component/makeComponent 폴더 만들기
   
   필수는 아니지만, 나중에 컴포넌트가 늘어나면 관리하기 편하게 하기위해 미리 분리
3. src/Component/makeComponent 안에 js 파일 만들기
   
   함수명의 시작은 대문자로, 마지막은 export default로 내보내기
   
```
function Button({children, ...props}) {
    return (
    <>
      <button className='Button'
        {...props}
      >{children}</button>
    </>
    );
  }
  
  export default Button;
```

</div>
</details>


<details>
<summary>props 넘기기</summary>
<div markdown="1">

props를 받을 자식 컴포넌트의 함수에 props를 받을 수있게 하고

부모에서 import후 속성값으로 넣어주면 됩니다.

```
// props를 받을 자식 컴포넌트
function Button({children, ...props}) {
    return (
    <>
      <button className='Button'
        {...props}
      >{children}</button>
    </>
    );
  }
  
  export default Button;
```
```
// props를 넘길 부모
import Button from '../../Componet/button';

const HomePage = () =>{
    return(
        <>
        <h2>HomePage</h2>
        <Button name={'ㅁㄴㅇ'}/>
        </>
    );
};

export default HomePage;
```
</div>
</details>


<details>
<summary>react-router-dom</summary>
<div markdown="1">

1. react-router-dom 설치
   
```
npm install react-router-dom
```

2. RouterProvider 설정

```
// main.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import rootRouter from './router/router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={rootRouter}/>
  </React.StrictMode>
);
```

3. src/router/router.js 생성

```
import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Layout from '../Layouts/Layout.js'
import HomePage from '../Pages/Home/home.js'
import DetailPage from '../Pages/detail/detail.js'
const route = (
    <Route element={<Layout/>}>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail" element={<DetailPage />} />
    </Route>
);

const rootRouter = createBrowserRouter(
    createRoutesFromElements(route));
export default rootRouter
```

`createBrowserRouter`DOM History API를 사용하여 URL을 업데이트하고 history 스택을 관리합니다.

`createRoutesFromElements`는 <Route> 요소에서 경로 객체를 생성하는 도우미입니다. 
객체 대신 JSX로 경로를 생성하려는 경우 유용합니다.

</div>
</details>

<details>
<summary>modal component</summary>
<div markdown="1">

1. useState를 이용하여 모달on/off 관리하기
2. 모달의 내용이 있는 부분은 클릭해도 안 닫히도록 버블링 방지
   
   `onClick={(e) => e.stopPropagation()}`

   버블링(bubbling): 한 요소에 이벤트가 발생하면, 이 요소에 할당된 핸들러가 동작하고, 이어서 부모 요소의 핸들러가 동작합니다. 
   가장 최상단의 조상 요소를 만날 때까지 이 과정이 반복되면서 요소 각각에 할당된 핸들러가 동작합니다.
```
// modal.js
import './modal.css';
import { useState } from 'react';

const Modal = ({children}) => {
    const [modalOpen, setmodalOpen] = useState(false)
    const showModal = () =>{
        setmodalOpen(!modalOpen);
    }

    return(
<>
<button onClick={showModal}>modal open</button>
{modalOpen && 
  <div className="modalBackground" onClick={showModal}>
      <div className="modalContainer" 
      // 현재 이벤트가 캡처링/버블링 단계에서 더 이상 전파되지 않도록 방지
      onClick={(e) => e.stopPropagation()}>
          <h3>Modal</h3>
          <p>{children}</p>
          <Button onClick={showModal}>close modal</Button>
      </div>
  </div>
}
</>
    )
}

export default Modal;
```

3. z-index를 이용하여 모달창을 페이지 위에 띄우기
4. `position: abolute;` 로 CSS nomal flow에서 제외하기

```
.modalBackground{
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100vw;
    height: 100vh;
    position: absolute;
    top:0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}
.modalContainer{
    z-index: 2;
    background-color: white;
    width: 300px;
}
```

</div>
</details>