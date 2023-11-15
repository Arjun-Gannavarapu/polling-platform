import React from 'react';
import {Button, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './Header.css'



const Header = () => {
  return (
   
    <Nav  className='navbar' defaultActiveKey="/home" as="ul">
      
     <Nav.Item  className='side-name'>
      <Nav.Link href="/ideas-rang">Start poll</Nav.Link>
    </Nav.Item>
    <Nav.Item className='side-name'>
    
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    
    <Nav.Item  className='side-name'>
      <Nav.Link href='/profile'>Browse</Nav.Link>
     
    </Nav.Item>
    <Link to='/login'><Button className='btn-login'>Login</Button></Link>
    <Nav.Item  className='side-name'>
      <Nav.Link href='/register'>signIn</Nav.Link>
     
    </Nav.Item>

    
     
   
  </Nav>
  
  )
}

export default Header
