import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom'
import {Button} from 'react-bootstrap'


//import Idea from './Idea';
//import VotingPage from './VotingPage';

const Home = () => {
  return (
    <section className='container-1'>
      <div>
        <h1>Create safe,fast and reliable poll votes</h1>
      </div>
      <div>
        <p>our pllatform utilises Alogorand blockChain technology to create a secure  and transparent polling 
          system,guarenting the integrity of each vote and providing rapid verifiability</p>
      </div>
      <div className='btns'>
        <Link to='/register'><Button className='poll-btn'>start poll</Button></Link>
        <Link to='/ideas-rang'><Button className='poll-btn2'>become an observer</Button></Link>
      </div>
    
     
    </section>
    
    
  )
}

export default Home
