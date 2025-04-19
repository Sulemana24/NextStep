import React, { useState } from 'react';
import './about.css';

function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="newsletter-section">
      <h2>Stay in the Loop</h2>
      <p>Join our mailing list to get updates on new features and events.</p>

      {subscribed ? (
        <p className="success-message">Thanks for subscribing!</p>
      ) : (
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </section>
  );
}

export default Newsletter;
