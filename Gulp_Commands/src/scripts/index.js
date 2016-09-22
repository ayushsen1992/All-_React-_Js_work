//import 'babel-polyfill'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
//import createLogger from 'redux-logger'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory,browserHistory,IndexRoute } from 'react-router';
import { Provider } from 'react-redux'
import App from './App'


import mainReducer from './index_reducer'

import Home from './home'

import LoginSuccessContainer from './LoginSuccessContainer'


//const loggerMiddleware = createLogger();

const logger = store => next => action => {
  console.log('******dispatching*****', action)
  let result = next(action)
  console.log('******next state******', store.getState())
  return result
}


let store = createStore(mainReducer,applyMiddleware(
      thunkMiddleware,
      //loggerMiddleware,
	  logger
    ));
console.log("stotres state");
console.log(store.getState());
let rootElement = document.getElementById('root');

render(
   <Provider store={store}>
      <Router history={hashHistory}>
      <Route path="/" component={Home}/>
        <Route path="/login"  component={App} />
          <Route path="/home"  component={Home} />
            <Route path="/useraccount"  component={LoginSuccessContainer} />



      </Router>
   </Provider>,
   rootElement
);
