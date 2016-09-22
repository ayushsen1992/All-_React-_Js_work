import React, { Component } from 'react'
import { connect } from 'react-redux'
import { login,loginFail,middlewarefunc } from '../actions/actions'
import LoginForm from '../components/LoginForm'
import LoginSuccess from '../components/LoginSuccess'
import LoginSuccessContainer from './LoginSuccessContainer'
import Login from '../components/Login'
import {Alert} from 'react-bootstrap'
import Header from '../components/header'
import HeaderContainer from './HeaderContainer'

const App = ({  responseData,onLoginClick }) => (
  <div>
      <HeaderContainer />
  {
        responseData.invalidCredentials?<Alert bsStyle="danger">please Enter valid credentials<strong></strong></Alert>:<span></span>
      }
      {responseData.loginSuccessfull?<LoginSuccessContainer />  : <Login onSubmit={(id, pass) =>
         onLoginClick(id,pass)
      } />

    }

  </div>
)

const mapStateToProps = (state) => {
  console.log("mapStateToProps")
  console.log(state.LoginReducer);
   return {
      responseData:state.LoginReducer

   }
};
const mapDispatchToProps = (dispatch) => {
  console.log("inside mapDispatchToProps");
   return {

     onLoginClick: (id,pass) => {
       //we make ajax call here and on its response we set condition
    /*  if(id==='username' && pass=='password')
      {
      dispatch(login(id,pass));
    }
    else {
        console.log("dispatch logout");
    dispatch(loginFail());
    }
    */

    dispatch(middlewarefunc(id,pass));
     }

   }
};
export default connect(mapStateToProps,mapDispatchToProps)(App);
