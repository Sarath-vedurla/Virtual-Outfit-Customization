import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <>
      {/* Welcome Section */}
      <div className="welcome_container">
        <div className="welcome_content">
          <h1 className="main_heading">Welcome to Fashion Society</h1>
          <h2 className="sub_heading">Customize your own outfit</h2>
          
        </div>
      </div>

      {/* Features Section */}
      <div className="features_container">
        <div className="feature_box feature_box1">
          <img src="images/coust.jpeg" alt="Outfit Customization" />
          <h1>Outfit Customization</h1>
        </div>
        <div className="feature_box feature_box2">
          <img src="images/free-removebg-preview.png" alt="Free Shipping" />
          <h2>Free Shipping</h2>
        </div>
        <div className="feature_box feature_box3">
          <img src="images/offer-removebg-preview.png" alt="Offers" />
          <h3>Offers</h3>
        </div>
        <div className="feature_box feature_box4">
          <img src="images/service-removebg-preview.png" alt="Support" />
          <h4>Support</h4>
        </div>
      </div>
    </>
  );
};

export default Home;
