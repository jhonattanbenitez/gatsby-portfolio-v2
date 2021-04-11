module.exports = {
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://165.232.151.50`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`],
      },
    },
  ],
};
