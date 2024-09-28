import React, { useState } from 'react';
import '../styles/home_page.css';

function HomePage() {
  const [targetUrl, setTargetUrl] = useState('');
  const [scanSummary, setScanSummary] = useState(null);
  const [error, setError] = useState('');

  const handleScan = async () => {
    if (!targetUrl) {
      setError('Please enter a URL.');
      return;
    }

    setError(''); // Clear any previous errors

    try {
      const response = await fetch(`http://localhost:3000/scan?url=${encodeURIComponent(targetUrl)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log('In frontend summary:', data);
      setScanSummary(data.alertsSummary); // Access alertsSummary here
    } catch (error) {
      console.error('Error during scan:', error);
      setError('Failed to scan the target. Please try again.');
    }
  };

  const renderSummary = () => {
    console.log('In renderSummary:', scanSummary);
    if (!scanSummary) return null;

    return (
      <div className="summary">
        <h2>Scan Summary</h2>
        <div>
          <p><strong>Total Alerts:</strong> {scanSummary.High + scanSummary.Medium + scanSummary.Low + scanSummary.Informational}</p>
          <p><strong>High Risk:</strong> {scanSummary.High || 0}</p>
          <p><strong>Medium Risk:</strong> {scanSummary.Medium || 0}</p>
          <p><strong>Low Risk:</strong> {scanSummary.Low || 0}</p>
          <p><strong>Informational:</strong> {scanSummary.Informational || 0}</p>
        </div>
      </div>
    );
  };

  return (
    <div className="scanner-container">
      <div className="details">
        <h1>What is XSS?</h1>
        <p>
          Cross-Site Scripting (XSS) is a security vulnerability that allows an
          attacker to inject malicious scripts into web pages viewed by other
          users. These scripts can steal information, manipulate web page content,
          or perform actions on behalf of the user without their consent.
        </p>
      </div>
      <div className="scan-box">
        <input
          style={{
            background: '#ffffffe6',
            color: '#000000'
          }}
          type="url"
          placeholder="https://www.example.com"
          value={targetUrl}
          onChange={(e) => setTargetUrl(e.target.value)}
        />
        <div className="consent">
          <input type="checkbox" id="consent" />
          <label htmlFor="consent" style={{ color: '#1a2a4a' }}>
            I am authorized to scan this target and I agree with the Terms of Service.
          </label>
        </div>
        <button className="scan-button" onClick={handleScan}>
          Start scan
        </button>
        {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}
        {renderSummary()}
      </div>
    </div>
  );
}

export default HomePage;
