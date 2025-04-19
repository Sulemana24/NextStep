import React from 'react';
import './featured.css';

function Articles() {
  const categories = [
    {
      title: 'Marketplace',
      icon: 'ri-store-line',
      description: 'Buy and sell goods easily within your community.',
      link: '#marketplace'
    },
    {
      title: 'Jobs',
      icon: 'ri-briefcase-line',
      description: 'Find job opportunities or post openings locally.',
      link: '#jobs'
    },
    {
      title: 'Education',
      icon: 'ri-book-open-line',
      description: 'Access courses, tutorials, and educational resources.',
      link: '#education'
    },
    {
      title: 'Community',
      icon: 'ri-community-line',
      description: 'Connect with groups, forums, and local initiatives.',
      link: '#community'
    }
  ];

  return (
    <section className="features-section">
      <h2 className="section-title">Explore Categories</h2>
      <div className="features-grid">
        {categories.map((category, index) => (
          <a href={category.link} className="feature-card" key={index}>
            <i className={category.icon}></i>
            <h3>{category.title}</h3>
            <p>{category.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Articles;
