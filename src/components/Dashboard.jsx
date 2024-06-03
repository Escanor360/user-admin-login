import React from 'react';
import { useNavigate } from 'react-router-dom';
import { getLoggedInUser, getUsers, logoutUser } from '../utils/localStorage';
import './Dashboard.css'

const Dashboard = () => {
  const user = getLoggedInUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/');
  };

  if (user === 'admin') {
    const users = getUsers();
    return (
      <div className='dashboard-container'>
        <h1>Admin Dashboard</h1>
        <button id='btn' onClick={handleLogout}>Logout</button>
        <h3>Registered Users</h3>
        <ul id='lists'>
          {users.map((user, index) => (
            <li key={index}>{user.username}</li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className='dashboard-container'>
      <h1>Welcome, {user}</h1>
      <button id='btn' onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
