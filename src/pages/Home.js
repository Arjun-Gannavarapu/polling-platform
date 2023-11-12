import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import { Button } from 'react-bootstrap';
//import Idea from './Idea';
//import VotingPage from './VotingPage';

const Home = () => {
  return (
    <>
    <h2 className='title'> Welcome To The Voting Platform</h2>
     <div className='main-box'>
     <div className='box'>
      
      <div className='idea'>
       <h2>Share Your Idea</h2>
       <p className='para'>change the world with your idea</p>
       <Link to='/register'><Button className='btn'> Become a Voter</Button></Link>
      </div>
     
      
    </div>
    <div className='vote'>
      <h2>Vote The idea</h2>
      <div>
        <p>vote for the right idea that change the future</p>
        <Link to='/login'><Button>Become a Observer</Button></Link>
      </div>
    </div>
   
     </div>

     
    </>
    
    
  )
}

export default Home
