import React from 'react'
import {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

   
  
const Settings = () => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
      };
  
   
        return (
    <div className='main-required'>
        <h1>settings</h1>
         <div className='required'>
         <h4>Required</h4>
         <div>
         <label>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      <p>Switch is {isChecked ? 'on' : 'off'}</p>
         </div>
      
         </div>
         <div className='required'>
         <h4>comments</h4>
         <div>
         <label>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      <p>Switch is {isChecked ? 'on' : 'off'}</p>
         </div>
      
         </div>
         <div className='required'>
         <h4>Randomize</h4>
         <div>
         <label>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      <p>Switch is {isChecked ? 'on' : 'off'}</p>
         </div>
      
         </div>
         <div className='required'>
         <h4>other options</h4>
         <div>
         <label>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      <p>Switch is {isChecked ? 'on' : 'off'}</p>
         </div>
      
         </div>
         <div className='required'>
         <h4>voting securely</h4>
         <div>
         <label>
        <input type="checkbox" checked={isChecked} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>

      <p>Switch is {isChecked ? 'on' : 'off'}</p>
         </div>
      
         </div>
         <div className='grace-main'>
        <Link to='/idea'><Button className='grace-btn continue-btn'>back</Button></Link>
        <Link to='/published'><Button className='grace-btn back-btn'onClick={()=>alert("Sucessfully idea published")}>publish</Button></Link>

        </div>
    </div>
  );
};
      
    



export default Settings
