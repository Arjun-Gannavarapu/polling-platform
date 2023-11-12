import React from 'react';
import {Nav} from 'react-bootstrap';
import './Header.css'



const Header = () => {
  return (
   
    <Nav  className='navbar' defaultActiveKey="/home" as="ul">
    <Nav.Item className='side-name'>
    
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item  className='side-name'>
      <Nav.Link href="/ideas-rang">IdeasRang</Nav.Link>
    </Nav.Item>
    <Nav.Item  className='side-name'>
      <Nav.Link href='/profile'>my-profile</Nav.Link>
     
    </Nav.Item>
  
    <Nav.Item  className='side-name'>
      <Nav.Link href='/'>Home</Nav.Link>
     
    </Nav.Item>
     
   
  </Nav>
  
  )
}

export default Header
