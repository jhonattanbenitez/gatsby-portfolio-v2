import React from "react";
/* 
import Layout from "../components/Layout";
import Hero from "../components/Hero";


import Blogs from "../components/Blogs"; */

import Layout from "../components/Layout";
import Hero from "../components/Hero";
import Jobs from "../components/Jobs";
import Services from "../components/Services";
import Projects from "../components/Projects";
import { graphql } from "gatsby";

const Index = ({ data }) => {
  const {
    allStrapiProjects: { nodes: projects },
  } = data;
  return (
    <Layout>
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="fetured projects" showLink />
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
