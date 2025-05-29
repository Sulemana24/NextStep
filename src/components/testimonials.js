import React from "react";
import "./testimonials.css";

const testimonials = [
  {
    name: "Sarah James",
    role: "Frontend Developer",
    message:
      "This platform helped me land my first tech job. The community is amazing!",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael Lee",
    role: "Startup Founder",
    message:
      "Thanks to this site, we found great talent and connected with passionate developers.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amina Yusuf",
    role: "Student",
    message:
      "The courses and events section kept me learning and growing consistently.",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2 className="testimonials-title">What People Are Saying</h2>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <img
              src={item.image}
              alt={item.name}
              className="testimonial-image"
            />
            <p className="testimonial-message">"{item.message}"</p>
            <h3 className="testimonial-name">{item.name}</h3>
            <span className="testimonial-role">{item.role}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
