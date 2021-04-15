import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { FaGithubSquare, FaShareSquare } from "react-icons/fa";
const Project = ({ description, title, github, stack, url, image, index }) => {
  const img = getImage(image);
  return (
    <article className="project">
      <GatsbyImage image={img} className="project-img" alt="project-image" />
      <div className="project-info">
        <span className="project-number">0{index + 1}.</span>
        <h3>{title}</h3>
        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map((item) => {
            const { id, title } = item;
            return <span key={id}>{title}</span>;
          })}
        </div>
        <div className="project-links">
          <a href={github}>
            <FaGithubSquare className="project-icon" />
          </a>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <FaShareSquare className="project-icon" />
          </a>
        </div>
      </div>
    </article>
  );
};

Project.propTypes = {};

export default Project;