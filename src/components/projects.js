import React from 'react';
import './about.css';
import proj1 from '../Images/proj1.jpg';
import proj2 from '../Images/proj2.jpg';
import proj3 from '../Images/proj3.jpg';
import proj4 from '../Images/proj4.jpg';

function Projects() {
  return (
    <section className="highlight-projects" id="projects">
      <h2 className="section-title">Our Featured Projects</h2>
      <div className="projects-container">

        <div className="project-card">
          <img src={proj1} alt="Project 1" className="project-image" />
          <div className="project-info">
            <h3>Project One</h3>
            <p>We helped a local business streamline its operations with a custom software solution.</p>
            <a href="/projects/project1.html" className="view-details-btn">View Details</a>
          </div>
        </div>

        <div className="project-card">
          <img src={proj2} alt="Project 2" className="project-image" />
          <div className="project-info">
            <h3>Project Two</h3>
            <p>A digital transformation for an educational institution to provide remote learning.</p>
            <a href="/projects/project2.html" className="view-details-btn">View Details</a>
          </div>
        </div>

        <div className="project-card">
          <img src={proj3} alt="Project 3" className="project-image" />
          <div className="project-info">
            <h3>Project Three</h3>
            <p>We worked with a local NGO to create a platform for fundraising and donations.</p>
            <a href="/projects/project3.html" className="view-details-btn">View Details</a>
          </div>
        </div>

        <div className="project-card">
          <img src={proj4} alt="Project 4" className="project-image" />
          <div className="project-info">
            <h3>Project Four</h3>
            <p>A community-driven initiative to promote local arts and crafts through an online marketplace.</p>
            <a href="/projects/project4.html" className="view-details-btn">View Details</a>
          </div>
        </div>

        <div className="project-card">
          <img src={proj1} alt="Project 5" className="project-image" />
          <div className="project-info">
            <h3>Project Five</h3>
            <p>We helped a local business streamline its operations with a custom software solution.</p>
            <a href="/projects/project5.html" className="view-details-btn">View Details</a>
          </div>
        </div>

        <div className="project-card">
          <img src={proj2} alt="Project 6" className="project-image" />
          <div className="project-info">
            <h3>Project Six</h3>
            <p>A digital transformation for an educational institution to provide remote learning.</p>
            <a href="/projects/project6.html" className="view-details-btn">View Details</a>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;
