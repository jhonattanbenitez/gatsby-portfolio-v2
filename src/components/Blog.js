import React from "react";
import PropTypes from "prop-types";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const Blog = ({ title, id, image, date, category, slug, desc }) => {
  const img = getImage(image);

  return (
    <Link to={`/blogs/${slug}`} key={id} className="blog">
      <article>
        <GatsbyImage image={img} alt="alt" className="blog-img" />
        <div className="blog-card">
          <h4>{title}</h4>
          <p>{desc}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>{date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

Blog.propTypes = {};

export default Blog;