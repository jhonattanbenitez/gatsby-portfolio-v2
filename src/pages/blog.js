import React from "react";
import Layout from "../components/Layout";
import Blogs from "../components/Blogs";
import { graphql } from "gatsby";
import Seo from "../components/Seo";

const Blog = ({
  data: {
    allStrapiBlogs: { nodes: blogs },
  },
}) => {
  return (
    <Layout>
      <Seo
        title="Blog Page"
        description="Here you'll find all the blog posts"
      />
      <section className="blog-page">
        <Blogs blogs={blogs} title="blog" />
      </section>
    </Layout>
  );
};
export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        title
        slug
        desc
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

export default Blog;
