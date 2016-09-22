

export function login(id, password) {
  console.log("inside action creater--login");
   return {
      type: 'LOGIN',
      id,
      password
   }
}

export function loginFail() {
  console.log("inside action creater --login fail");
   return {
      type: 'LOGINFAIL',

   }
}

export function logOut() {
  console.log("inside action creater --log out");
   return {
      type: 'LOGOUT',

   }
}

export function middlewarefunc(id,pass)
{
 console.log("inside middle ware function");
  console.log(id+"====="+pass);
 return (dispatch, getState) => {
                        console.log("starting");
                       console.log(id+"---"+pass);
                        //fetching data from server
                        //fetch(`http://www.reddit.com/r/${subreddit}.json`)
                        //by import fetch from 'isomorphic-fetch'
                         if(id==='ayush' && pass=='jagdish')
      {
         console.log("if");
       return dispatch(login(id,pass));
    }
    else {
       console.log("else");
        console.log("dispatch logout");
      return dispatch(loginFail());
    }
 }
}
