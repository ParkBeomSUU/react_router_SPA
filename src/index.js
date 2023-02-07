import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

/* 리액트 라우터를 적용할때는 index.js에서 react-router-dom에 내장되어있는
  browserRouter,라는 컴포넌트를 사용하여 감싸면 된다.
  이렇게 하면 새로 불러오지 않고도 주소를 변경하고 현재 주소의 경로에 관련된정보를 
  리액트 펌토넌트에서 사용하게 해준다.

*/
