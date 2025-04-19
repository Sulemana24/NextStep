import React, { useState } from 'react';
import './about.css';

function About() {
  return(
    <section className="about-container">
    <div className="about-company">
        <h2>About Us</h2>
        <p>NextStep is a community-driven platform that empowers individuals and organizations to connect, learn, and contribute to their local communities. Our mission is to create a vibrant ecosystem where people can share knowledge, collaborate on projects, and support each other in their personal and professional growth.</p>
        <p>We believe that by harnessing the power of community, we can create positive change and make a lasting impact. Join us on this journey to build a better future for everyone.</p>
    </div>
    <div className="about-company">
        <h2>Our Mission</h2>
        <p>At NextStep, our mission is to empower individuals and communities to thrive by providing a platform that fosters collaboration, learning, and growth. We aim to create a space where people can connect, share knowledge, and work together to make a positive impact in their local communities.</p>
        <p>We believe that by harnessing the power of community, we can create a brighter future for everyone. Join us on this journey to build a better world, one step at a time.</p>
    </div>
    </section>

  );
};

export default About;