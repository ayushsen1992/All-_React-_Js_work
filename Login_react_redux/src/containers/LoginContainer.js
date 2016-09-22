
import { connect } from 'react-redux'
import { login } from '../actions'
import App from '../components/App'


const mapStateToProps = (state) => {
  return {
    //need to implements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  //  onSubmit: (id,pass) => {
    //  dispatch(login(id,pass))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default LoginContainer
