// components/Homepage.jsx
import React from 'react';
import Header from './Header';


function Homepage() {
  return (
    <div className="homepage">
      <Header />
      {/* Placeholder for your chill GIF */}
      <img src="/path-to-your-chill-gif.gif" alt="Chill GIF" className="chill-gif" />

      <h1 className="main-title">Sebastian Alturck-Carlos</h1>

      <div className="section about">
        <h2 className="section-title">About Me</h2>
        <p>Short bio or description about yourself.</p>
      </div>

      <div className="section projects">
        <h2 className="section-title">Projects</h2>
        <p>Details about your projects.</p>
      </div>
    </div>
  );
}

export default Homepage;
