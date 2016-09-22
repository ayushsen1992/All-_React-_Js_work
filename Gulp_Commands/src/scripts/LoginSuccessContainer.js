
import { connect } from 'react-redux'
import { login,loginFail } from './actions'
import LoginSuccess from './LoginSuccess'

import { browserHistory } from 'react-router'






const mapStateToProps = (state) => {
  console.log("mapStateToProps in loginsuccess");
  console.log(state.LoginReducer.loginSuccessfull);
if(!state.LoginReducer.loginSuccessfull){

  console.log("state.LoginReducer.loginSuccessfull");
  //debugger ;
  browserHistory.push('#/login');
}

   return {

      data : state.LoginReducer

   }
};
const mapDispatchToProps = (dispatch) => {
  console.log("inside mapDispatchToProps");
   return {



   }
};


const LoginSuccessContainer =connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginSuccess);
export default LoginSuccessContainer;
