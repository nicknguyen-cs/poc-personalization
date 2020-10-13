module.exports = {
  siteMetadata: {
    title: `Starter Landing Page`,
    description: `A barebone landing page starter with some minimal styles.`,
    author: `@gillkyle`,
    siteUrl: `https://gatsby-starter-landing-page.netlify.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "YOUR_GOOGLE_ANALYTICS_TRACKING_ID",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-contentstack`,
      options: {
        api_key: 'blt4bc040d0d95765c8',
        delivery_token: 'csc33b1d9f859d2038e13bc1df',
        environment: 'production',
      },
    },

  ],
}
