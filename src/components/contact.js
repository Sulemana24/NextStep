import React, { useState } from "react";
import "./contact.css";

function Contact() {
  return (
    <section className="contact-section">
      <div className="container">
        <div className="content">
          <div className="left-side">
            <div className="address details">
              <i className="bx bxs-map"></i>
              <div className="topic">Address</div>
              <div className="text-one">Yendi, N/R</div>
              <div className="text-two">Ghana, West Africa</div>
            </div>
            <div className="phone details">
              <i className="bx bxs-phone"></i>
              <div className="topic">Phone</div>
              <div className="text-one">+233 551 333 780</div>
              <div className="text-two">+233 508 211 181</div>
            </div>
            <div className="email details">
              <i className="bx bxs-envelope"></i>
              <div className="topic">Email</div>
              <div className="text-one">iddrisusulemana</div>
              <div className="text-one">665@gmail.com</div>
            </div>
          </div>
          <div className="right-side">
            <div className="topic-text">Send us a message</div>
            <p>Lets get interative, Send us a message for all enquiries</p>
            <form action="#">
              <div className="input-box">
                <input type="text" placeholder="Enter your name" />
              </div>
              <div className="input-box">
                <input type="text" placeholder="Enter your email" />
              </div>
              <div className="input-box message box">
                <textarea></textarea>
              </div>
              <div className="button">
                <input type="button" value="Send now" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
