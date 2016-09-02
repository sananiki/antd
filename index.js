import React from 'react';
import ReactDOM from 'react-dom';
//import { createStore ,applyMiddleware,compose} from 'redux';
//import { Provider } from 'react-redux';
//import thunk from 'redux-thunk';
//import todoApp from './app/container/reducers'
import App from './app/containers/App'
import { Calendar } from 'antd';
//import createLogger from 'redux-logger'  //日志输出中间件
//import 'antd-mobile/dist/antd-mobile.css'; 
//import './app/style/style.css'
//import { registerListeners} from './container/actions'
/*const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}*/ //自定义日志输出

//let createStoreWithMiddleware = compose(applyMiddleware( thunk,createLogger()),window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore) //dispath输出
//let store = createStore(todoApp);
//let store = createStoreWithMiddleware(todoApp); //增加日志输出console和redux工具
let rootElement = document.getElementById('root');

//store.dispatch(registerListeners())
ReactDOM.render(
    //<Provider store={store} >
        <App  />,
    //</Provider>,
    rootElement
)