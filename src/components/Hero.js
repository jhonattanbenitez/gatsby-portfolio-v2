import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import SocialLinks from "../constants/socialLinks";
// ...GatsbyImageSharpFluid

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Jhonattan</h1>
            <h4>Front-end Developer</h4>
            <Link to="/contact" className="btn">
              Contact me
            </Link>
            <SocialLinks />
          </div>
        </article>
        <StaticImage src="../assets/Jhonattan.png" className="hero-img" />
      </div>
    </header>
  );
};

export default Hero;
