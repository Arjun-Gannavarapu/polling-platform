import React from 'react';
import successImage from '../../src/components/sucess.png';
import { Link } from 'react-router-dom';

import {Button} from 'react-bootstrap'
const Published = () => {
  return (
   <>
    <div>
     <h1 className='published-title'>Published SucessFully</h1>
      <img src={successImage} alt='Successfully published' className='image' />
      
    </div>
    <div className='grace-main'>
    
    <Link to='/mywork'><Button className='grace-btn back-btn'>continue</Button></Link>

    </div>
   </>
  );
}

export default Published;
