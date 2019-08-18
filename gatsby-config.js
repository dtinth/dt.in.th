module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `src`,
    //     path: `${__dirname}/src/`,
    //   },
    // },
    // `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-4343503-1',
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `markdown-pages`,
    //     path: `${__dirname}/src/markdown-pages`,
    //   },
    // },
  ],
}
