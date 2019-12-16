const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

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
                name
              }
              frontmatter {
                title
              }
            }
          }
        }
        allFile(
          filter: {
            sourceInstanceName: { eq: "talks" }
            extension: { eq: "jpg" }
          }
        ) {
          nodes {
            name
            publicURL
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
      const image = result.data.allFile.nodes.find(
        f => f.name === node.fields.name,
      )
      createPage({
        path: `/talks${node.fields.slug}`,
        component: path.resolve(`./src/talks/TalkInfoPage.js`),
        context: {
          id: node.id,
          image: (image && image.publicURL) || null,
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

  {
    // Stuff
    const result = await graphql(`
      {
        allMarkdownRemark(limit: 1000) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `)
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach(edge => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(`src/stuff/StuffInfoPage.js`),
        context: { id },
      })
    })

    // Tag pages:
    // let tags = []
    // // Iterate through each post, putting all found tags into `tags`
    // posts.forEach(edge => {
    //   if (_.get(edge, `node.frontmatter.tags`)) {
    //     tags = tags.concat(edge.node.frontmatter.tags)
    //   }
    // })
    // // Eliminate duplicate tags
    // tags = _.uniq(tags)

    // // Make tag pages
    // tags.forEach(tag => {
    //   const tagPath = `/tags/${_.kebabCase(tag)}/`

    //   createPage({
    //     path: tagPath,
    //     component: path.resolve(`src/templates/tags.js`),
    //     context: {
    //       tag,
    //     },
    //   })
    // })
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
      createNodeField({
        name: 'name',
        node,
        value: parent.name,
      })
    }
  }

  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = '/stuff' + createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
