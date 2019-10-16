module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    { resolve: `gatsby-plugin-mdx`, options: { commonmark: true } },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-4343503-1',
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: ['Arimo:400,700'],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'songs',
        path: `${__dirname}/src/music/songs/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'talks',
        path: `${__dirname}/src/talks/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/PageWrapper.js`),
      },
    },
  ],
}
