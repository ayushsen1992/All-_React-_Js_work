
import { connect } from 'react-redux'
import { logOut } from './actions'
import Header from './header'







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

onLogOut:()=>{
  dispatch(logOut());
}


   }
};


const HeaderContainer =connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
export default HeaderContainer;
