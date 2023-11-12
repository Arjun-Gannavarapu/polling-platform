import React, { useState } from 'react';

const IdeasPage = () => {
  // Mock data for ideas
  const initialIdeas = [
    { id: 1, text: 'Idea 1', likes: 0, comments: [] },
    { id: 2, text: 'Idea 2', likes: 0, comments: [] },
    // Add more ideas as needed
  ];

  const [ideas, setIdeas] = useState(initialIdeas);

  const handleLike = (ideaId) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea.id === ideaId ? { ...idea, likes: idea.likes + 1 } : idea
      )
    );
  };

  const handleComment = (ideaId, commentText) => {
    setIdeas((prevIdeas) =>
      prevIdeas.map((idea) =>
        idea.id === ideaId
          ? { ...idea, comments: [...idea.comments, commentText] }
          : idea
      )
    );
  };

  return (
    <div className='registration'>
      <h2>Ideas Page</h2>
      {ideas.map((idea) => (
        <div key={idea.id}>
          <p>{idea.text}</p>
          <button className='ideas-btn' onClick={() => handleLike(idea.id)}>Like ({idea.likes})</button>
          <div>
            <input
              type="text"
              placeholder="Add a comment"
              // You may want to use a controlled input here
            />
            <button className='ideas-btn' onClick={() => handleComment(idea.id, 'New comment')}>
              Comment
            </button>
            <ul>
              {idea.comments.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IdeasPage;
