import { combineReducers } from 'redux'

import LoginReducer from './RED'
//import user from './user'
//import user from './user'

const mainReducer = combineReducers({

  LoginReducer,
  //user
})

export default mainReducer
