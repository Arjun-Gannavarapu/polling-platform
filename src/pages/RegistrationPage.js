import React, { useState } from 'react';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
const Registration = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [idProof, setIdProof] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setIdProof(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic (e.g., send data and ID proof to the server)
    console.log('Registration data:', formData);
    console.log('ID Proof:', idProof);

    // Reset the form
    setFormData({
      username: '',
      email: '',
      password: '',
    });
    setIdProof(null);
  };

  return (
    <section className='registration'>
        <div>
      <h2>Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <div className='reg-label'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className='reg-label'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className='reg-label'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className='reg-label'>
          <label htmlFor="idProof">ID Proof:</label>
          <input
            type="file"
            id="idProof"
            name="idProof"
            accept=".pdf, .jpg, .jpeg, .png"
            onChange={handleFileChange}
          />
        </div>
        <Link to='/idea'><Button type="submit" className='btn'>Register</Button></Link>
      </form>
    </div>
    </section>
  );
};

export default Registration;
