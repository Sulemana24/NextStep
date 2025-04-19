import React, { useEffect, useRef } from 'react';
import './hero.css';

function Works() {
  const countersRef = useRef([]);

  useEffect(() => {
    const counters = countersRef.current;

    counters.forEach(counter => {
      const targetValue = counter.getAttribute("data-target");
      let target;

      if (targetValue.includes('K')) {
        target = parseFloat(targetValue.replace('K', '')) * 1000;
      } else {
        target = +targetValue;
      }

      let count = 0;
      let speed = target / 100;

      const formatNumber = (number) => {
        if (number >= 1000) {
          return (number / 1000).toFixed(1) + "K";
        } else {
          return number;
        }
      };

      const updateCounter = () => {
        if (count < target) {
          count += Math.ceil(speed);
          counter.textContent = formatNumber(count);
          setTimeout(updateCounter, 30);
        } else {
          counter.textContent = formatNumber(target);
        }
      };

      updateCounter();
    });
  }, []);

  return (
    <section className="works-container">
    <div className="works-div">
      {[
        { target: "10K", label: "community members" },
        { target: "300", label: "projects completed" },
        { target: "150", label: "jobs connected" },
        { target: "50", label: "community partners" }
      ].map((item, index) => (
        <div className="works" key={index}>
          <h4>
            <span
              className="counter"
              data-target={item.target}
              ref={el => (countersRef.current[index] = el)}
            >
              0
            </span>
            +
          </h4>
          <p>{item.label}</p>
        </div>
      ))}
    </div>
  </section>
);
};

export default Works;