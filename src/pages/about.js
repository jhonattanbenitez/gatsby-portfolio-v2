import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import Title from "../components/Title";

const About = ({ data }) => {
  const { title, image, info, stack } = data.strapiAbout;
  const img = getImage(image);
  return (
    <Layout>
      <section className="about-page">
        <div className="section-center about-center">
          <GatsbyImage
            image={img}
            alt="jhonattan benitez"
            className="about-img"
          />
          <article className="about-text">
            <Title title={title} />
            <p>{info}</p>
            <div className="about-stack">
              {stack.map((item) => {
                return <span key={item.id}>{item.title}</span>;
              })}
            </div>
          </article>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    strapiAbout {
      title
      info
      stack {
        id
        title
      }
      image {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`;
export default About;
