module.exports = {
  siteMetadata: {
    title: `Christopher Ball: Software Engineer`,
    description: `Christopher Ball is a Software Engineer based in Barcelona. Interested in DevOps, Node.js, React and Clojure.`,
    author: `Chris Ball <chrisball02@gmail.com>`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `christopherball.info`,
        short_name: `Christopher Ball`,
        start_url: `/`,
        lang: `en`,
        theme_color: `##dd067d`,
        display: `minimal-ui`,
        icon: `src/assets/icons/favicon.png`
      }
    }
  ]
};
