

const initialState = {
   cid: null,
   username: '',
   logo: ''
};

const user = (state = initialState, action) => {
  console.log("in reducer");
  console.log("action type=="+action.type);
   switch (action.type) {
      case 'LOGIN':
         if(action.id==="ayush" && action.password==="abcd")
         {
           console.log("valid user");
         }
         else(
            console.log("Invalid user");
         )

         return state;

      case LOGOUT:

         return state;

      default:
         return state;
   }
};

export default user;
