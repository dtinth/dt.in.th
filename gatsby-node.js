const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  {
    // Talks
    const result = await graphql(`
      query Talks {
        allMdx(
          filter: { fields: { sourceInstanceName: { eq: "talks" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    const talks = result.data.allMdx.edges
    const talkEdgeToContext = ({ node } = {}) => {
      return (
        node && {
          id: node.fields.slug,
          title: node.frontmatter.title,
        }
      )
    }
    createPage({
      path: `/talks/`,
      component: path.resolve(`./src/talks/TalkIndexPage.js`),
    })
    talks.forEach(({ node }, index) => {
      createPage({
        path: `/talks${node.fields.slug}`,
        component: path.resolve(`./src/talks/TalkInfoPage.js`),
        context: {
          id: node.id,
          olderTalk: talkEdgeToContext(talks[index + 1]),
          newerTalk: talkEdgeToContext(talks[index - 1]),
        },
      })
    })
  }

  {
    // Music
    const result = await graphql(`
      query Songs {
        allMdx(
          filter: { fields: { sourceInstanceName: { eq: "songs" } } }
          sort: { order: DESC, fields: frontmatter___date }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `)
    if (result.errors) {
      reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
    }
    const songs = result.data.allMdx.edges
    const songEdgeToContext = ({ node } = {}) => {
      return (
        node && {
          id: node.fields.slug,
          title: node.frontmatter.title,
        }
      )
    }
    createPage({
      path: `/music/`,
      component: path.resolve(`./src/music/SongIndexPage.js`),
    })
    songs.forEach(({ node }, index) => {
      createPage({
        path: `/music${node.fields.slug}`,
        component: path.resolve(`./src/music/SongInfoPage.js`),
        context: {
          id: node.id,
          olderSong: songEdgeToContext(songs[index + 1]),
          newerSong: songEdgeToContext(songs[index - 1]),
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const parent = getNode(node.parent)

    if (parent.internal.type === 'File') {
      createNodeField({
        name: 'sourceInstanceName',
        node,
        value: parent.sourceInstanceName,
      })
      createNodeField({
        name: 'slug',
        node,
        value: createFilePath({ node, getNode }),
      })
    }
  }
}
