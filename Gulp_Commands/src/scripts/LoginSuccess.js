import React, { PropTypes } from 'react'
//import LoginSuccessContainer from '../containers/LoginSuccessContainer'
import {Alert} from 'react-bootstrap'

const LoginSuccess = ({data}) => (
<div>
  <Alert bsStyle="success">you logged Successfully...<strong>{data.username}</strong></Alert>



  </div>
)


export default LoginSuccess
