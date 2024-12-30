module.exports = {
  siteMetadata: {
    title: `Northern Voice Reels`,
    description: `Voice over reels and demos`,
    author: `Peter Broadhead`,
    siteUrl: `https://northernvoicereels.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
  ],
}
