import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { Button } from 'react-bootstrap';

 
const Idea = () => {
  const [title, setTitle] = useState('');
  const [idea, setIdea] = useState('');
  
    const [selectedOption, setSelectedOption] = useState('');
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, idea);
  };
  
  
  return (
    <>
    
     
        <div className='idea-page'>
          <form className='form' onSubmit={submitHandler}>
            <label className='label-name' htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' className='input-form' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label className='label-name2' htmlFor='idea'>Description</label>
            <input type='text' name='idea' className='input-form2' id='idea' value={idea} onChange={(e) => setIdea(e.target.value)} />
            <button type='submit' className='poll-btn5'>post</button>
            <h4>after posting the just click the continue button</h4>
            <div className='grace-main'>
             <Link to='/features'><Button className='grace-btn continue-btn'>back</Button></Link>
            <Link to='/settings'><Button className='grace-btn back-btn'>continue</Button></Link>

        </div>
        <div>
      <h2>Voting type</h2>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="">Select an option</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>

      {selectedOption && (
        <div>
          <h3>Selected Option: {selectedOption}</h3>
        </div>
      )}
    </div>
    
           
            
          </form>
         
        </div>
    
    </>
  );
};


export default Idea;