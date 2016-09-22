
import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import rootReducer from './reducers'
import user from './reducers'
import mainReducer from './reducers'

let store = createStore(mainReducer);
console.log("stotres state");
console.log(store.getState());
let rootElement = document.getElementById('root');

render(
   <Provider store={store}>
      <App />
   </Provider>,
   rootElement
);
