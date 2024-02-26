// Login.js
import React, { useState } from 'react';
import {NavLink, useNavigate } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();


  const HandleLogin = async () => {
    navigate('/dashboard')
  };

  return (
    <div className="login-container">
      <h2>Simplileap</h2>
      <h3>Login</h3>
      <div className="form-group">
        <label>E-mail</label>
        <input type="email" placeholder="example@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <p className="forgot-password">Forgot Password</p>
      </div>
      <button onClick={HandleLogin}>Login</button>
      <p>Don't have an account yet? <NavLink to="/signup">Sign in</NavLink></p>
      <p>or</p>
      <button className="google-login">Login with Google</button>
      <div className="welcome-container">
      <h2>Welcome to Simplileap</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
      <p className='text'>3k+ agents have joined us, now it’s your turn!</p>
      </div>
    </div>
  );
};

export default Login;
