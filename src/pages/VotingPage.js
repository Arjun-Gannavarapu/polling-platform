import React from 'react';
import {useState} from 'react';


const VotingPage = () => {
  const [vote,setVote]=useState(0)
  const voteHandler=()=>{
    setVote(vote+1)
    console.log(vote)

  }
  return (
   <>
    <div>
      <h2 className='vote-title'>vote the best Idea</h2>
      <div className='polling'>
      <h2 className='vote-subtitle'>idea</h2>
      <button className='vote-btn' value={vote} onClick={voteHandler}>
        vote
      </button>
      </div>
    </div>
    <div>
      
      <div className='polling'>
      <h2 className='vote-subtitle'>idea</h2>
      <button className='vote-btn' value={vote} onClick={voteHandler}>
        vote
      </button>
      </div>
    </div>
    <div>
      
      <div className='polling'>
      <h2 className='vote-subtitle'>idea</h2>
      <button className='vote-btn' value={vote} onClick={voteHandler}>
        vote
      </button>
      </div>
    </div>
    <div>
      
      <div className='polling'>
      <h2 className='vote-subtitle'>idea</h2>
      <button className='vote-btn' value={vote} onClick={voteHandler}>
        vote
      </button>
      </div>
    </div>
   </>
  )
}

export default VotingPage
