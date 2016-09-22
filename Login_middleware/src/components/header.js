
import React, { Component, PropTypes } from 'react'
import {Navbar, NavItem, Nav, MenuItem,NavDropdown} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'





const Header = ({data,onLogOut}) => (
<div>

<Navbar inverse>
<Navbar.Header>
<Navbar.Brand>
  <Link to="/home">React-Bootstrap</Link>
</Navbar.Brand>
<Navbar.Toggle />
</Navbar.Header>

<Nav>



      {data.loginSuccessfull? <NavItem>Hello  <span>{data.username}</span></NavItem>:<NavItem><Link to="/login">Login</Link></NavItem>
      }

    </Nav>

    <Nav pullRight>
    {data.loginSuccessfull?
    <NavDropdown eventKey={3} title={data.username} id="basic-nav-dropdown">
      <MenuItem eventKey={3.1}>myAccount</MenuItem>

      <MenuItem divider />
      <MenuItem eventKey={3.3} onClick={()=>onLogOut()} >Log Out</MenuItem>
    </NavDropdown>:null}

    </Nav>

</Navbar>


  </div>
)








export default Header;
