import React from 'react';
import './footer.css';
import logo from '../Images/logo.jpg';

function Footer() {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-col">
            <div className="footer-logo">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <ul className="footer-links">
              <li>
                <a href="tel:+233551333780">
                  <i className="ri-phone-line"></i> +233 551 333 780
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/aamusted+(formerly+uew-kumasi)+sunyani+road+kumasi/@6.6976281,-1.6833419,17.96z/data=!5m1!1e1?entry=ttu&g_ep=EgoyMDI1MDEyOS4xIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-map-pin-line"></i> AAMUSTED, Tanoso
                </a>
              </li>
              <li>
                <a href="mailto:info@hayatecosmetics.com">
                  <i className="ri-mail-line"></i> info@NextStep.com
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-col2">
            <h4>Menu</h4>
            <ul className="header-links">
              <li><a href="#hmtl">Home</a></li>
              <li><a href="#about-company">About</a></li>
            </ul>
            <div className="social-share">
              <a href="https://web.facebook.com/" target="_blank" rel="noopener noreferrer" title="Follow us on Facebook">
                <i className="ri-facebook-line"></i>
              </a>
              <a href="https://www.x.com/" target="_blank" rel="noopener noreferrer" title="Follow us on X">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="https://www.youtube.com/watch?v=DjY-01S_dgs" target="_blank" rel="noopener noreferrer" title="Subscribe to our channel">
                <i className="ri-youtube-line"></i>
              </a>
            </div>
          </div>

          <div className="footer-col6" id="column">
            <h2>Join our newsletter</h2>
            <p>Stay turned for new product updates</p>
            <form
              action="/"
              onSubmit={(e) => {
                e.preventDefault();
                // Optional: validate form or handle submit
              }}
            >
              <input type="email" id="email" placeholder="Enter your email" required />
              <button className="btn" title="Subscribe to our newsletter">Subscribe</button>
            </form>
          </div>
        </div>
      </footer>

      <div className="footer-bar">
        <p>
          <i className="ri-copyright-line"></i>
          {new Date().getFullYear()} NextStep. All rights reserved.
        </p>
        <p>Developed by Simdi Technologies</p>
      </div>
    </>
  );
}

export default Footer;
