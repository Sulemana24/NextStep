import React, { useState, useEffect } from "react";
import "./jobs.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Jobs() {
  const jobs = [
    {
      title: "Frontend Developer",
      company: "CityKey",
      location: "Remote",
      tags: ["JavaScript", "React", "HTML", "CSS"],
      datePosted: "2 days ago",
    },
    {
      title: "UI/UX Intern",
      company: "NextDesign Labs",
      location: "Accra, Ghana",
      tags: ["Figma", "Adobe XD", "Design"],
      datePosted: "5 days ago",
    },
    {
      title: "Community Manager",
      company: "NextStep",
      location: "Remote",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "1 day ago",
    },
    {
      title: "ReactJs Developer",
      company: "Facebook",
      location: "USA",
      tags: ["JavaScript", "ReactJs", "HTML", "CSS"],
      datePosted: "13 days ago",
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Kumasi, Ghana",
      tags: ["Figma", "Java", "C++"],
      datePosted: "1 month ago",
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago",
    },
    {
      title: "HR Manager",
      company: "Hayate Cosmetics",
      location: "Tanoso, Kumasi",
      tags: ["Communication", "Conflict Resolution", "Team leader"],
      datePosted: "10hrs ago",
    },
    {
      title: "Full Stack Developer",
      company: "Simdi Dev",
      location: "Yendi, Ghana",
      tags: ["Node.Js", "JavaScript", "MySql", "PHP"],
      datePosted: "9 days ago",
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", resume: null });
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [visibleCount, setVisibleCount] = useState(
    getVisibleCount(window.innerWidth)
  );

  const increment = 3;

  function getVisibleCount(width) {
    if (width >= 1024) return 6;
    if (width >= 768) return 4;
    return 3;
  }

  useEffect(() => {
    const handleResize = () =>
      setVisibleCount((prev) =>
        Math.max(prev, getVisibleCount(window.innerWidth))
      );
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openModal = (job) => {
    setSelectedJob(job);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedJob(null);
    setForm({ name: "", email: "", resume: null });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries({ ...form, jobTitle: selectedJob.title }).forEach(
      ([key, val]) => formData.append(key, val)
    );

    try {
      const response = await fetch("http://localhost:5000/api/apply", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        toast.success("Application submitted successfully!");
        closeModal();
      } else {
        toast.error("Submission failed. Try again.");
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while submitting.");
    }
  };

  const highlightMatch = (text, query) =>
    query
      ? text.replace(new RegExp(`(${query})`, "gi"), "<mark>$1</mark>")
      : text;

  const uniqueLocations = [...new Set(jobs.map((job) => job.location))];
  const uniqueTags = [...new Set(jobs.flatMap((job) => job.tags))];

  const filteredJobs = jobs.filter((job) => {
    const query = searchQuery.toLowerCase();
    const matchesQuery =
      [job.title, job.company, job.location].some((field) =>
        field.toLowerCase().includes(query)
      ) || job.tags.some((tag) => tag.toLowerCase().includes(query));
    const matchesLocation = selectedLocation
      ? job.location === selectedLocation
      : true;
    const matchesTag = selectedTag ? job.tags.includes(selectedTag) : true;
    return matchesQuery && matchesLocation && matchesTag;
  });

  return (
    <div className="job-board-container" id="jobs">
      <div className="job-board">
        <h1>Find Your Next Big Opportunity!</h1>

        <div className="filters">
          <input
            type="text"
            className="search-bar"
            placeholder="Search by title, company, location or tag..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setVisibleCount(increment);
            }}
          />
          <div className="job-filters">
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
            >
              <option value="">All Locations</option>
              {uniqueLocations.map((loc) => (
                <option key={loc} value={loc}>
                  {loc}
                </option>
              ))}
            </select>
            <select
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
            >
              <option value="">All Tags</option>
              {uniqueTags.map((tag) => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div id="jobsContainer">
          {filteredJobs.length === 0 && <p>No matching jobs found.</p>}
          {filteredJobs.slice(0, visibleCount).map((job, idx) => (
            <div className="job-card" key={idx}>
              <div
                className="job-title"
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(job.title, searchQuery),
                }}
              />
              <div
                className="company"
                dangerouslySetInnerHTML={{
                  __html: highlightMatch(
                    `${job.company} | ${job.location}`,
                    searchQuery
                  ),
                }}
              />
              <div>
                {job.tags.map((tag, i) => (
                  <span
                    className="tag"
                    key={i}
                    dangerouslySetInnerHTML={{
                      __html: highlightMatch(tag, searchQuery),
                    }}
                  />
                ))}
              </div>
              <div className="date">{job.datePosted}</div>
              <button className="apply-btn" onClick={() => openModal(job)}>
                Apply Now
              </button>
            </div>
          ))}
        </div>

        {visibleCount < filteredJobs.length && (
          <div className="load-more-container2">
            <button
              className="btn1"
              onClick={() => setVisibleCount((prev) => prev + increment)}
            >
              Load More <i className="ri-arrow-right-up-line"></i>
            </button>
          </div>
        )}

        {modalOpen && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h2>Apply for {selectedJob.title}</h2>
              <form onSubmit={handleSubmit} className="apply-form">
                <ToastContainer position="top-right" autoClose={3000} />
                <label>
                  Name:
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </label>
                <label>
                  Email:
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    required
                  />
                </label>
                <label>
                  Resume:
                  <input
                    type="file"
                    onChange={(e) =>
                      setForm({ ...form, resume: e.target.files[0] })
                    }
                    accept=".pdf,.doc,.docx"
                  />
                </label>
                <div className="modal-buttons">
                  <button type="submit" className="btn-submit">
                    Submit Application
                  </button>
                  <button
                    type="button"
                    className="btn-cancel"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Jobs;
