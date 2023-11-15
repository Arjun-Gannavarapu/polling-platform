import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'react-bootstrap'

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState(" ")
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(email,password)
  }
  

  return (
    <div  className='wavo-login'>
      <h1 className='wavo-title'>Wavo</h1>
      <div className='wavo-login2'>
        <h2>Create a free Account or</h2>
        <span className='register-login2'>login to your account</span>
      <form onSubmit={submitHandler}>
        <div className='login-space'>
          <label htmlFor="username">Email:</label>
          <input
            type="email"
            id="username"
           
            value={email}
            className='login-space2'
            onChange={(e)=>setEmail(e.target.value)}
            
          />
        </div>
        <div className='login-space' >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            className='login-space2'

            onChange={(e)=>setPassword(e.target.value)}
           
            
          />
          <span className='register-login2'>forgotten password</span>
        </div>
        <Link to='/grace'><Button type="submit"  className='poll-btn4' onSubmit={submitHandler}>Signin</Button></Link>
      </form>
      </div>
      
    </div>
  );
};

export default Login;
