// SignUp.js
import React, { useState } from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import './signup.css';


const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const navigate=useNavigate()


  const handleSignUp = async (e) => {
    navigate('/dashboard');

    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        body: JSON.stringify({ username, password }),
      });
      if (response.ok) {
        console.log('User created successfully');
        setUsername(e.target.value)

      } else {
        console.error('Error creating user');
      }
    } catch (error) {
      console.error('Error creating user', error);
    }

  };

  return (
    <div className="signup-container">
      <h2>Simplileap</h2>
      <h3>Sign Up</h3>
      <div className="form-group">
        <label>Name</label>
        <input type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleSignUp}>Sign Up</button>
      <p className="para">Already have an account? <NavLink to="/login">Log In</NavLink></p>
      <p className='para'>or</p>
      <button className="google-signup">Sign up with Google</button>
      <div className="welcome-container">
      <h2>Welcome to Simplileap</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <p class="text">3k+ agents have joined us, now it’s your turn!</p>
      </div>
    </div>
  );
};

export default SignUp;
