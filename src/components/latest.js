import React, { useState } from "react";
import "./featured.css";
import proj1 from "../Images/proj1.jpg";
import proj2 from "../Images/proj2.jpg";
import proj3 from "../Images/proj3.jpg";

function Latest() {
  const allArticles = [
    {
      image: proj1,
      date: "April 10, 2025",
      title: "Building Stronger Communities Through Tech",
      description:
        "Explore how digital platforms are transforming local collaboration and opportunities for everyone.",
      category: "Technology",
      link: "#",
    },
    {
      image: proj2,
      date: "April 5, 2025",
      title: "Empowering Youth With Skill-Based Learning",
      description:
        "Discover how learning programs are shaping the future workforce.",
      category: "Education",
      link: "#",
    },
    {
      image: proj3,
      date: "March 30, 2025",
      title: "The Role of Community in Sustainable Growth",
      description:
        "Learn about initiatives that encourage sustainability through shared responsibility.",
      category: "Community",
      link: "#",
    },
  ];

  const [filteredArticles, setFilteredArticles] = useState(allArticles);
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setFilteredArticles(allArticles);
    } else {
      setFilteredArticles(
        allArticles.filter((article) => article.category === category)
      );
    }
  };

  return (
    <section className="latest-articles">
      <h2 className="section-title">Latest Articles</h2>

      <div className="filter-buttons">
        {["all", "Technology", "Education", "Community"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${activeCategory === cat ? "active" : ""}`}
            onClick={() => handleFilter(cat)}
            data-category={cat}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="articles-container">
        {filteredArticles.map((article, index) => (
          <article className="article-card" key={index}>
            <img src={article.image} alt={article.title} />
            <div className="article-content">
              <span className="article-date">{article.date}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <a href={article.link} className="read-more">
                Read More →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="load-more-container2">
        <button id="load-more-btn" className="btn1">
          Load More <i className="ri-arrow-right-up-line"></i>
        </button>
      </div>
    </section>
  );
}

export default Latest;
