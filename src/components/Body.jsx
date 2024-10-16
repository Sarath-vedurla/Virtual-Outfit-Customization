import React, { useEffect } from 'react';
import Navbar from './Navbar';
import { useNavigate, Outlet } from 'react-router-dom';
import Footer from './Footer';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((store)=> store.user);

  const fetchUser = async () => {
    if(userData) return;
    try {
      const res = await axios.post(
        BASE_URL + "/profile", 
        {},  // no data to send, so leave it empty
        {
          withCredentials: true // send cookies, including JWT token
        }
      );
      dispatch(addUser(res.data));
    } catch (error) {
      console.log(error);
      navigate("/login");  // navigate to login on error
    }
  };

  useEffect(() => {
  
    fetchUser();
    
  }, []);

  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Body;
