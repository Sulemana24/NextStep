import React, { useEffect, useRef } from 'react';
import './featured.css';


function Featured() {
  const stepsRef = useRef([]);

  useEffect(() => {
    const steps = stepsRef.current;

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const revealSteps = () => {
      steps.forEach((step) => {
        if (step && isInViewport(step)) {
          step.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', revealSteps);
    revealSteps();

    return () => {
      window.removeEventListener('scroll', revealSteps);
    };
  }, []);

  return (
    <section className="how-it-works">
      <h2 className="section-title">How It Works</h2>
      <div className="steps-container">
        {['Create Account', 'Explore & Connect', 'Contribute & Grow'].map((title, index) => {
          const descriptions = [
            'Sign up for free and become a part of your community’s digital network.',
            'Browse categories, find what you need, or connect with others.',
            'Post, offer help, find opportunities, and grow with your community.'
          ];
          const icons = [
            'ri-user-add-line',
            'ri-search-line',
            'ri-hand-heart-line'
          ];

          return (
            <div
              key={index}
              className="step"
              ref={(el) => (stepsRef.current[index] = el)}
            >
              <div className="step-icon"><i className={icons[index]}></i></div>
              <h3>{title}</h3>
              <p>{descriptions[index]}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Featured;
