import React, { useState } from 'react';
import './jobs.css';

function Jobs() {
  const allJobs = [
    {
      title: "Frontend Developer",
      company: "CityKey",
      location: "Remote",
      tags: ["JavaScript", "React", "HTML", "CSS"],
      datePosted: "2 days ago"
    },
    {
      title: "UI/UX Intern",
      company: "NextDesign Labs",
      location: "Accra, Ghana",
      tags: ["Figma", "Adobe XD", "Design"],
      datePosted: "5 days ago"
    },
    {
      title: "Community Manager",
      company: "NextStep",
      location: "Remote",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "1 day ago"
    },
    {
      title: "ReactJs Developer",
      company: "Facebook",
      location: "USA",
      tags: ["JavaScript", "ReactJs", "HTML", "CSS"],
      datePosted: "13 days ago"
    },
    {
      title: "Software Engineer",
      company: "Google",
      location: "Kumasi, Ghana",
      tags: ["Figma", "Java", "C++"],
      datePosted: "1 month ago"
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago"
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago"
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago"
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago"
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago"
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago"
    },
    {
      title: "Project Manager",
      company: "NextStep",
      location: "Tamale, Ghana",
      tags: ["Communication", "Events", "Outreach"],
      datePosted: "29 days ago"
    },
    // Add more jobs if needed for testing!
  ];

  const [searchQuery, setSearchQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(3); // Start with 3 jobs
  const increment = 3; // Load 3 more jobs each click

  // Filter jobs based on search query
  const filteredJobs = allJobs.filter(job =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    job.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Slice visible jobs based on count
  const visibleJobs = filteredJobs.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + increment);
  };

  return (
    <div className="job-board-container" id="jobs">
      <div>
        <h1>Find Your Next Big Opportunity!</h1>
        <input
          type="text"
          className="search-bar"
          placeholder="Search by title or company..."
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
            setVisibleCount(increment); // Reset visible count when searching
          }}
        />

        <div id="jobsContainer">
          {visibleJobs.map((job, index) => (
            <div className="job-card" key={index}>
              <div className="job-title">{job.title}</div>
              <div className="company">{job.company} | {job.location}</div>
              <div>
                {job.tags.map((tag, i) => (
                  <span className="tag" key={i}>{tag}</span>
                ))}
              </div>
              <div className="date">{job.datePosted}</div>
              <button className="apply-btn">Apply Now</button>
            </div>
          ))}
        </div>
      </div>

      {visibleCount < filteredJobs.length && (
        <div className="load-more-container2">
          <button className="btn1" onClick={handleLoadMore}>
            Load More <i className="ri-arrow-right-up-line"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Jobs;
