/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/posts/`,
      },
    },
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
          fonts: [
              `poppins:300,400,500,600,700`,
              `Montserrat`
          ], display: 'swap'       
      }
    },
    `gatsby-plugin-react-helmet`
  ],
}
