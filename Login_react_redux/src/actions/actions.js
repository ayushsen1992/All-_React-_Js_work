

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
