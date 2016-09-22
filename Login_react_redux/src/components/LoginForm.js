import React, { Component, PropTypes } from 'react'

class LoginForm extends Component {
   render () {
      return (
         <div>
            <form action="#" onSubmit={(e) => this.handleSubmit(e)}>
            username:   <input type="text" ref={node => { this.login = node }} placeholder="enter username" />
            <br/>
            password:   <input type="password" ref={node => { this.password = node }} placeholder="enter password" />
            <br/>
               <input type="submit" value="Login" />
            </form>
         </div>
      )
   }

   handleSubmit(e) {
      e.preventDefault();
      console.log(this.login.value+"....."+ this.password.value);
      this.props.onSubmit(this.login.value, this.password.value);
   }
}

LoginForm.propTypes = {
   onSubmit: PropTypes.func.isRequired
};

export default LoginForm;
