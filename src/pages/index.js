import React from "react";
/* 
import Layout from "../components/Layout";
import Hero from "../components/Hero";


 */

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import Blogs from "../components/Blogs";
import { graphql } from "gatsby";

const Index = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
    allStrapiBlogs: { nodes: blogs },
  } = data;
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="fetured projects" showLink />
      <Blogs blogs={blogs} title="Latest articles" showLink />
    </Layout>
  );
};

export const query = graphql`
  {
    allStrapiProjects(
      filter: {
        fuature: { eq: true }
        image: { childImageSharp: { gatsbyImageData: {} } }
      }
    ) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
        stack {
          id
          title
        }
      }
    }
    allStrapiBlogs(sort: { fields: date, order: DESC }, limit: 3) {
      nodes {
        title
        desc
        slug
        date(formatString: "MMMM Do, YYYY")
        id
        category
        image {
          childImageSharp {
            gatsbyImageData(layout: CONSTRAINED)
          }
        }
      }
    }
  }
`;

/*  {
    allStrapiProjects(filter: { fuature: { eq: true } }) {
      nodes {
        github
        id
        description
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          title
        }
      }
    }
  } */

export default Index;
