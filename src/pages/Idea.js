import React, { useState } from 'react';


 
const Idea = () => {
  const [title, setTitle] = useState('');
  const [idea, setIdea] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(title, idea);
  };
  

  return (
    <>
      <h1 className='idea-title'>Shape The Future With Your Idea</h1>

      <div className='idea-box'>
        <h2 className='title-1'>Share your idea in words</h2>
        <div className='form-line'>
          <form className='form' onSubmit={submitHandler}>
            <label className='label-name' htmlFor='title'>Title</label>
            <input type='text' name='title' id='title' className='input-form' value={title} onChange={(e) => setTitle(e.target.value)} />
            <label className='label-name2' htmlFor='idea'>Elaborate Your Idea</label>
            <input type='text' name='idea' className='input-form2' id='idea' value={idea} onChange={(e) => setIdea(e.target.value)} />
           <button type='submit' className='btn2' onClick={()=>alert("response submited")}> Post</button>
           
            
          </form>
        </div>
      </div>
    </>
  );
};

export default Idea;