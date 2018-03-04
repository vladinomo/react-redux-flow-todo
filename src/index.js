// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 妙なことやってるけどflowの動作チェック用にDOMを変数に格納している
// 型がanyなのはFlowがまっとうなDOM要素か判断できないためとりいそぎこうしている
const rootElement: any = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
