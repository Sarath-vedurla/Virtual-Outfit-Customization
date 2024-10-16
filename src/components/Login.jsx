import React, { useState } from 'react';
import './css/Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';
const Login = () => {
  const [emailId, setEmail] = useState('praveen@gmail.com');
  const [password, setPassword] = useState('Praveen@219');
  const [error, setError] = useState('');  
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const handleLogin = async(e) => {
    e.preventDefault();
    
    try {
        const res = await axios.post( BASE_URL+ "/login", {
          emailId,
          password,
        },
        { withCredentials:true}
    );
    
        // Log the response to check the structure
        
        dispatch(addUser(res.data));
        return navigate("/");
      } catch (error) {
        // Fallback for error responses without proper structure
        setError(error?.response?.data || "Something went wrong");
        console.error("Login error:", error);
      }
    
    
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email" 
              className="input-field" // Added class name for styling
              value={emailId} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
              required 
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              className="input-field" // Added class name for styling
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
              required 
            />
          </div>
          <p className='error_message'>{error}</p>
          <button type="submit" className="login-button">Login</button>
        </form>
      
      </div>
    </div>
  );
};

export default Login;
