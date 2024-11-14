import React from 'react';
import { Link } from 'react-router-dom';
import '../scss/HeroSection.scss';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-section__content">
        <h1>Experience Elegance</h1>
        <p>Discover premium quality with every click.</p>
        {/* <button className="hero-section__cta">Add Recipe</button> */}
        <Link  className="hero-section__cta" to={`/addrecipes`}>ADD RECIPE</Link>
      </div>
    </section>
  );
};

export default HeroSection;
