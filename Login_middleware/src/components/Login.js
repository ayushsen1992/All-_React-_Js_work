
import React, { Component, PropTypes } from 'react'
import {Form, FormGroup, ControlLabel, FormControl} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import ReactDOM from 'react-dom';

class Login extends Component {
set setTitle(title){
  this.title  = title
}
get getTitle(){
  return this.title;
}
   render () {
      return (
  <div>
   <Form  onSubmit={(e) => this.handleSubmit(e)}>
  <FormGroup controlId="formInlineName">
    <ControlLabel>User Name</ControlLabel>
    {' '}
    <FormControl type="text"  id="username" placeholder="enter you username" />
  </FormGroup>
  {' '}
  <FormGroup controlId="formInlineEmail">
    <ControlLabel>Password</ControlLabel>
    {' '}
    <FormControl type="password" id="password" placeholder="enter you password" />
  </FormGroup>
  {' '}
  <Button  onClick={(e) => this.handleSubmit(e)} bsStyle="success">Login</Button>
</Form>

        </div>
    )
  }


  handleSubmit(e) {
     e.preventDefault();
    console.log("inside bootstrap form");
    //console.log(ReactDOM.findDOMNode(login).value);
    // console.log(this.login.value+"....."+ this.password.value);
    this.props.onSubmit(ReactDOM.findDOMNode(username).value, ReactDOM.findDOMNode(password).value);
  }

}

export default Login;
