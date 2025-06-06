import React, { useState } from 'react';
import './hero.css';
import heroImage from '../Images/crowd-3127293_1280.jpg';

function Hero() {
  const [query, setQuery] = useState('');

  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${heroImage})`,
      }}
    >
      <div className="hero-content">
        <h1>Your Community, Your Platform</h1>
        <p>
          Connect, learn, contribute, and thrive right here. Explore our diverse sections
          designed to meet your local needs, from community projects and skills
          development to local jobs and supporting our vibrant arts and nature scene.
          Welcome!
        </p>
      </div>
    </section>
  );
}

export default Hero;
