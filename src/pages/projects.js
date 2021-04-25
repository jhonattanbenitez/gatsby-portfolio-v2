import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import Seo from "../components/Seo";

const ProjectsPage = ({
  data: {
    allStrapiProjects: { nodes: projects },
  },
}) => {
  return (
    <Layout>
      <Seo
        title="Projects Page"
        description="Here you'll find all of my projects"
      />
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  );
};
export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage;
