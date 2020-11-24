/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
    siteMetadata: {
        title: `Pawan Verma's Blog`,
        description: `A blog to share all the experiences that i had solving problems related to computer science and life.`,
        author: `Pawan Verma`,
    },
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
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pawan Verma's Blog`,
        short_name: `Pawan's Blog`,
        start_url: `/`,
        background_color: `#141414`,
        theme_color: `#99aab5`,
        display: `standalone`,
        icon : `/static/favicon.ico`
      },
    },
  ],
}
