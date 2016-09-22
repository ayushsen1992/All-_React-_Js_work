
const initialState = {

loginSuccessfull:false,
username: '',
invalidCredentials:false

};


const LoginReducer = (state = initialState, action) => {
  console.log("inside reducer");
  switch (action.type) {
    case 'LOGIN':
      return Object.assign({}, state,{
              loginSuccessfull:true,
              username: action.id,
              invalidCredentials:false
                      })


        case 'LOGOUT':
        return Object.assign({}, state, {
                                    username:'',
                                    loginSuccessfull: false,
                                    invalidCredentials:false

                })

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
