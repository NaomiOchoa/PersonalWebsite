/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Naomi Ochoa`,
    siteUrl: `https://www.naomiochoa.com`,
    description: `A bit about me, a portfolio of project, and more.`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Naomi Ochoa`,
        short_name: `Naomi Ochoa`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `/public/PersonalFavicon3.png`,
      },
    },
  ],
}
