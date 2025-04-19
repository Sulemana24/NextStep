import React, { useState } from 'react';
import './footer.css';
import backImage from '../Images/community-909149_1280.jpg';

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is NextStep all about?",
      answer: "NextStep is a community-driven platform where individuals and organizations connect, learn, and contribute to local development.",
    },
    {
      question: "Is it free to join?",
      answer: "Yes! Signing up and participating in the community is completely free.",
    },
    {
      question: "How do I contribute to community projects?",
      answer: 'You can browse active projects on the platform and use the "Join" or "Support" buttons to get involved.',
    },
    {
      question: "Can organizations use the platform?",
      answer: "Absolutely! Organizations can create profiles, post jobs or projects, and collaborate with the community.",
    },
  ];

  return (
    <section className="faq-wrapper">
      <div className="faq-image">
        <h2 className="section-title">Have a Question in Mind?</h2>
        <p>
          All Your Questions are in a document, in question and answer format, that introduces newcomers to a topic or answers common questions.
        </p>
        <div className="conner-image">
          <div className="container">
            <div className="split-image-container">
              {[1, 2, 3, 4].map((q) => (
                <div
                  key={q}
                  className={`quadrant quadrant-${q}`}
                  style={{ backgroundImage: `url(${backImage})` }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="faq-section">
        <div className="faq-container">
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${openIndex === index ? 'open' : ''}`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span className="toggle-icon" />
              </button>
              <div className={`faq-answer ${openIndex === index ? 'visible' : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faqs;
