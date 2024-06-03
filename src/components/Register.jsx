import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { getUsers, saveUser, findUser } from '../utils/localStorage';
import './Register.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = () => {
    if (findUser(username)) {
      alert('User already exists!');
      return;
    }
    saveUser({ username, password });
    navigate('/');
  };

  return (
    <div className="register-container">
      <div className='register-contain'>
      <h2>REGISTER</h2>
      <input className="register-input" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input className="register-input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button className="register-button" onClick={handleRegister}>Register</button>
      <p>
        Already a user? <Link to="/">Login</Link>
      </p>
      </div>
      
    </div>
  );
};

export default Register;
