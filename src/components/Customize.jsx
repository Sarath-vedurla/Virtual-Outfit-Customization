import React from 'react';
import { Link } from 'react-router-dom';
import './css/AllCustomize.css'; // Ensure this CSS file exists

const Customize = () => {
  return (
    <>
      <div className="container_one">
        <div className="content">
          
          <Link to="/mencustomization" className="customize_button_one">Customize Now</Link>
        </div>
      </div>

      <div className="container_two">
        <div className="content">
          
          <Link to="/waistcustomization" className="customize_button_two">Customize Now</Link>
        </div>
      </div>
    </>
  );
};

export default Customize;
