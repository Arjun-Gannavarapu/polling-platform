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
    <div className='login-form'>
      <h2 className='login-title'>Login</h2>
      <form onSubmit={submitHandler}>
        <div className='login-page'>
          <label htmlFor="username">Email</label>
          <input
            type="email"
            id="username"
            className='input-feed'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            
          />
        </div>
        <div className='login-page'>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            className='
            input-feed'
            onChange={(e)=>setPassword(e.target.value)}
           
            
          />
        </div>
        <Link to='/voting'><Button type="submit"  className='login-btn' onSubmit={submitHandler}>Login</Button></Link>
      </form>
    </div>
  );
};

export default Login;
