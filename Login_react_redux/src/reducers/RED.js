
/*const initialState = {

   username: '',
   loginSuccessfull:''

};
*/

const LoginReducer = (state = {}, action) => {
  console.log("inside reducer");
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state,{
              loginSuccessfull:true,
              username: action.id,
              invalidCredentials:false
                      })
        case 'LOGOUT':
        return action.id
        case 'LOGINFAIL':
        return  Object.assign({}, state, {
                                    loginSuccessfull: false,
                                    invalidCredentials:true

                })

    default:
      return state
  }
}


export default LoginReducer
