module.exports = {
  siteMetadata: {
    title: `Jhonattan Benitez Portfolio`,
    description: `Front-End developer portfolio, experience, projects, services and blog`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://jhonattan.dev`,
    twitterUsername: `@jhonb07`,
    image: `/cover.PNG`,
    siteUrl: `https://jhonattan.dev`,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://165.232.151.50`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
  ],
};
