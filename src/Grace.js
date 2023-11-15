import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap';

const Grace = () => {
  return (
    <section className='main'>
        <h3>Hello grace,</h3>
            <h3>What is the range of poll</h3>
        <div className='grace'>
            
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>Local</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>regeniol</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>global</Button></Link>
        </div>
        </div>
        <div className='grace-main'>
        <Link to='/login'><Button className='grace-btn continue-btn'>back</Button></Link>
        <Link to='/features'><Button className='grace-btn back-btn'>continue</Button></Link>

        </div>


      
    </section>
  )
}

export default Grace
