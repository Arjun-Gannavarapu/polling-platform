import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'
const Feutures = () => {
  return (
    <section className='main'>
    
        <h3>What topic is describe for your poll</h3>
    <div className='head-grace'>
    <div className='grace'>
        
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>Technology</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>EnvirpnMent</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>politics</Button></Link>
        </div>
        
        
        </div>
        <div className='grace'>
            
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>SocialFeatures</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>Enterntainment</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>Science</Button></Link>
        </div>
        
        
        </div>
        <div className='grace'>
            
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>Economics</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>Finance</Button></Link>
        </div>
        <div>
            <Link><Button className='grace-btn'><input type='checkbox'/>Culture</Button></Link>
        </div>
        
        
        </div>
        <div className='grace-main'>
    <Link to='/grace'><Button className='grace-btn continue-btn'>back</Button></Link>
    <Link to='/idea'><Button className='grace-btn back-btn'>continue</Button></Link>

    </div>
    </div>
    
   


  
</section>
  )
}

export default Feutures
