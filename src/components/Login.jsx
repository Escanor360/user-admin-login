import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { authenticateUser, setLoggedInUser } from '../utils/localStorage';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (authenticateUser(username, password)) {
      setLoggedInUser(username);
      navigate('/dashboard');
    } else {
      alert('Invalid username or password!');
    }
  };

  return (
    <div className="login-container">
      <div className='login-contain'>
      <h2>LOGIN</h2>
      <input className="login-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="login-input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="login-button" onClick={handleLogin}>Login</button>
      <p>
        Haven't registered? <Link to="/register">Register</Link>
      </p>
      </div>
      
    </div>
  );
};

export default Login;
