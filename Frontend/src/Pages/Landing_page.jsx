import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';
import XSS_image from '../assets/XSS.jpeg';

const LandingPage = () => {
  return (
    <div>
      <h1>Tool Selection</h1>
      <div className="card-container">
        
        {/* XSS Scanner Card */}
        <div className="card">
          <Link to="/XSS">
            <img src={XSS_image} alt="xss image" />
            <div className="card-content">
              <h2>XSS Scanner</h2>
              <p>Click to use the XSS scanning tool.</p>
              <button className="card-button">Go to XSS Tool</button>
            </div>
          </Link>
        </div>

        {/* Dummy Tool 1 Card */}
        <div className="card">
          <Link to="/Pass_check">
            {/* Replace with actual image */}
            <img src="https://via.placeholder.com/260x160" alt="Dummy Tool 1" />
            <div className="card-content">
              <h2>Password strenth check</h2>
              <p>This is a placeholder for another tool.</p>
              <button className="card-button">Go to Pass_check Tool </button>
            </div>
          </Link>
        </div>

        {/* Dummy Tool 2 Card */}
        <div className="card">
          <Link to="/dummy-tool-2">
            {/* Replace with actual image */}
            <img src="https://via.placeholder.com/260x160" alt="Dummy Tool 2" />
            <div className="card-content">
              <h2>Dummy Tool 2</h2>
              <p>This is a placeholder for another tool.</p>
              <button className="card-button">Go to Tool 2</button>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LandingPage;
