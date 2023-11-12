import React, { useState } from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {Button}  from 'react-bootstrap'

const ProfilePage = () => {
  // Simulated user data
  const [user, setUser] = useState({
    name: 'Arjun',
    email: 'arjun@gmail.com',
    bio: 'i am very passinate about the coding',
  });

  // State for editable fields
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUser(editedUser);
    setIsEditing(false);
  };

  return (
    <div className='profile-page'>
      <h1 className='title-profile'>Profile Page</h1>
      {isEditing ? (
        <form onSubmit={handleFormSubmit}>
          <div>
          <div >
            <label htmlFor="name"  className='name'>Name:</label>
            <input
              type="text"
              id="name"
              value={editedUser.name}
              onChange={(e) =>
                setEditedUser({ ...editedUser, name: e.target.value })
              }
            />
          </div>
          <div >
            <label htmlFor="email" className='email'>Email:</label>
            <input
              type="email"
              id="email"
              value={editedUser.email}
              onChange={(e) =>
                setEditedUser({ ...editedUser, email: e.target.value })
              }
            />
          </div>
          <div  >
            <label htmlFor="bio" className='bio'>Bio:</label>
            <textarea
              id="bio"
              value={editedUser.bio}
              onChange={(e) =>
                setEditedUser({ ...editedUser, bio: e.target.value })
              }
            />
          </div>
          </div>
          <button type="submit" className='edit'>Save</button>
        </form>
      ) : (
        <div>
          <p>
            <strong>Name:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio}
          </p>
          <button onClick={() => setIsEditing(true)} className='edit'>Edit Profile</button>
        </div>
      )}
      <Link to='/ideas-rang'><Button className='btn'>explore ideas</Button></Link>
    </div>
  );
};

export default ProfilePage;
