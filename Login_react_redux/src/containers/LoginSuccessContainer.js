
import { connect } from 'react-redux'
import { login,loginFail } from '../actions/actions'
import LoginSuccess from '../components/LoginSuccess'







const mapStateToProps = (state) => {
  console.log("mapStateToProps in loginsuccess")
  console.log(state.LoginReducer.loginSuccessfull);
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
