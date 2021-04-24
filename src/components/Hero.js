import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

import SocialLinks from "../constants/socialLinks";

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
        <StaticImage
          src="http://165.232.151.50/uploads/Jhonattan_c0aa6fd59f.png"
          className="hero-img"
          alt="profile-pic"
        />
      </div>
    </header>
  );
};

export default Hero;
