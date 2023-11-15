import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

const MyWork = () => {
  return (
    <>
     <div className='big-bar'>
        <div className='left-navbar'>
            <div className='left-grid'>
            <div className='matters'>
             <h4>MyWorkPlace</h4>
             <p>Archieve</p>
             <p>recyclebin</p>
             <p>Settings</p>

            </div>
            <div className='matters'> 
            <p>privacty</p>
            <p>helpcenter</p>
            <p>FAQ</p>
            <p>Guides</p>
            </div>
            </div>
        </div>
        <div className='main-bar'>
            <div className='small-bar'>
            <h3>My Work Space</h3>
            <Link to='/idea'><Button className='btn6'>Create new Poll</Button></Link>   
            </div>
            <div className='tooty-bar'>
            <div className='mini-bar'>
                <div><h5>pollName</h5></div>
                <div className='mini-bar2'>

                    <p>Questions</p>
                    <p>Response</p>
                    <p>Compltion</p>
                    <p>Updated</p>
                </div>
            </div>
            </div>

            <div className='tooty-bar'>

            <div className='mini-bar'>
           
           <div><h5>The ethical of Ai documentation</h5></div>
       
           <div className='mini-bar2'>

               <p>5</p>
               <p>5</p>
               <p>5</p>
               <p>04/06/2008</p>
           </div>
       </div>
            </div>
            </div>
        

        </div>
   
    
    </>
  )
}

export default MyWork
