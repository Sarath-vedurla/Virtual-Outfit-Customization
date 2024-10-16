import React from 'react';
import { Link } from 'react-router-dom';
import './css/CustomizeMen.css'; // Ensure this CSS file exists

const CustomizeMen = () => {
  return (
    <>
      {/* First Container */}
      <div className="main container_1">
        <div className="image_container"></div>
        <div className="text_container">
          <h1>MENS SHIRTS</h1>
          <h2>Design Your Own Men's Shirts And Explore Your Passion</h2>
          <Link to="/shirtcustomization" className="customize_button_one">Customize Now</Link>
        </div>
      </div>

      {/* Second Container */}
      <div className="main container_2">
        <div className="text_container">
          <h1>MENS PANTS</h1>
          <h2>Design Your Own Men's Pants And Explore Your Passion, Enjoy Your Comfort</h2>
          <Link to="/phantcustomization" className="customize_button_two">Customize Now</Link>
          {/* Removed the 'Explore Now' button here */}
        </div>
        <div className="image_container"></div> {/* Image comes second */}
      </div>
    </>
  );
};

export default CustomizeMen;
