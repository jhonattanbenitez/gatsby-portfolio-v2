module.exports = {
  plugins: [
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
