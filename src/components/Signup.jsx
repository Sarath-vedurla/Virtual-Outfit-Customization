import React, { useState } from 'react';
import './css/Login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const Signup = () => {
  const [userName, setUserName] = useState('');
  const [emailId, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignup = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post(BASE_URL + "/signup", {
        userName,
        emailId,
        password,
      }, { withCredentials: true });
      dispatch(addUser(res.data));
      // Notify success
      setSuccess("User added Sucessfully");
      setError(''); // Reset any previous error
      setTimeout(() => navigate("/"), 2000); // Redirect to login page after 2 seconds

    } catch (error) {
      // Handle error and show message
      setError(error?.response?.data || "Something went wrong");
      console.error("Signup error:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>SIGNUP</h2>
        <form onSubmit={handleSignup}>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input 
              type="text" 
              id="username" 
              className="input-field"
              value={userName}
              onChange={(e) => setUserName(e.target.value)} 
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="input-field"
              value={emailId} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email"
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input 
              type="password" 
              id="password" 
              className="input-field"
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password"
              required 
            />
          </div>
          {error && <p className="error_message">{error}</p>}
          {success && <p className="success_message">{success}</p>}
          <button type="submit" className="login-button">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
