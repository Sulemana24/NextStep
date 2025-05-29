import React, { useState } from "react";
import "./jobs.css";
import "./events.css";
import event1 from "../Images/event1.jpg";
import event2 from "../Images/event2.jpg";
import event3 from "../Images/event3.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Events() {
  const eventsData = [
    {
      title: "Digital Skills Workshop",
      date: "April 20, 2025",
      description: "Learn digital tools & creative tech skills.",
      image: event1,
      link: "#",
      month: "April",
      type: "Workshop",
    },
    {
      title: "Community Clean-Up Day",
      date: "May 2, 2025",
      description: "Help clean and beautify the neighborhood.",
      image: event2,
      link: "#",
      month: "May",
      type: "Community",
    },
    {
      title: "Youth Innovation Summit",
      date: "May 15, 2025",
      description: "Young minds present community solutions.",
      image: event3,
      link: "#",
      month: "May",
      type: "Summit",
    },
  ];

  const [selectedMonth, setSelectedMonth] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const filteredEvents = eventsData.filter(
    (event) =>
      (selectedMonth === "all" || event.month === selectedMonth) &&
      (selectedType === "all" || event.type === selectedType)
  );

  const openModal = (eventTitle) => {
    setSelectedEvent(eventTitle);
    setModalOpen(true);
    setFormData({ name: "", email: "" });
    setSubmitted(false);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email) {
      toast.warn("⚠️ Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/events/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            eventTitle: selectedEvent,
          }),
        }
      );

      const data = await response.json();

      if (response.ok && data.message) {
        setSubmitted(true);
        toast.success("🎉 Registration successful!");
        setTimeout(() => closeModal(), 2000);
      } else {
        toast.error(`❌ ${data.error || "Registration failed."}`);
      }
    } catch (error) {
      console.error("Error registering:", error);
      toast.error("🚫 Something went wrong. Please try again.");
    }
  };

  return (
    <>
      <section className="events-section">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="event-filters">
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
          >
            <option value="all">All Months</option>
            <option value="April">April</option>
            <option value="May">May</option>
          </select>

          <select
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="Workshop">Workshop</option>
            <option value="Community">Community</option>
            <option value="Summit">Summit</option>
          </select>
        </div>
        <div className="events-container">
          {filteredEvents.length === 0 ? (
            <p className="no-events-message">
              No events found for the selected filters.
            </p>
          ) : (
            filteredEvents.map((event, index) => (
              <div className="event-card" key={index}>
                <img
                  src={event.image}
                  alt={event.title}
                  className="event-img"
                />
                <div className="event-content">
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                  <button
                    className="register-btn"
                    onClick={() => openModal(event.title)}
                  >
                    Register
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {modalOpen && (
        <div
          className="modal fade-in"
          onClick={(e) => {
            if (e.target.classList.contains("modal")) closeModal();
          }}
        >
          <div className="modal-content">
            <span className="close-btn" onClick={closeModal}>
              &times;
            </span>
            <h3>Register for {selectedEvent}</h3>

            {submitted ? (
              <p className="success-message">🎉 Registration successful!</p>
            ) : (
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

                <input
                  type="text"
                  name="eventTitle"
                  value={selectedEvent}
                  disabled
                  style={{ marginBottom: "10px" }}
                />
                <input
                  type="date"
                  name="registrationDate"
                  value={new Date().toISOString().split("T")[0]}
                  readOnly
                />
                <button type="submit" className="btn">
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default Events;
