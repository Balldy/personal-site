module.exports = {
  siteMetadata: {
    title: `Christopher Ball: Software Engineer`,
    description: `Christopher Ball is a Software Engineer based in Barcelona. Interested in DevOps, Node.js, React and Clojure.`,
    author: `chrisball02@gmail.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/pictures/`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/src/assets/icons`
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `christopherball.info`,
        short_name: `christopherball`,
        start_url: `/`,
        lang: `en`,
        // background_color: `#663399`,
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.png`
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};
