const path = require(`path`)
const { createFilePath } = require('gatsby-source-filesystem')

exports.createPages = async ({ graphql, actions }) => {
  // TODO: Don’t hardcode pages here, source data from files.
  const talkIds = [
    'smells-in-react-apps',
    'code-mania-110',
    'dfd8464f036645128c8dcb1d59f55419',
    'react-live-coding',
    'web-midi-instruments-lightning-talk',
    'hoc',
    'taskworld-react',
    'tdd',
    'spring',
    'functional-reactive-programming',
    'codemania2015',
    'vim',
    'recursion',
  ]
  const songIds = [
    'just-look-at-my-eyes-bms',
    '422',
    'butter-fly-cover-collab',
    'everyday-evermore',
    'bursting-music-star',
    'over-whelming-joy',
    'running-out-2015',
    'only-love-remix',
    'by-my-side-ambient-house-mix',
    'auto-synchro',
    'reminiscentia',
    'by-my-side',
    'sawasdee-new-year',
    'dont-wake-me-up-re-remix',
    'type-your-text-here',
    'opaque-space',
  ]
  const pages = [
    '/',
    '/talks/',
    ...talkIds.map(id => `/talks/${id}/`),
    '/music/',
    // ...songIds.map(id => `/music/${id}/`),
  ]
  const { createPage } = actions
  pages.forEach(p => {
    createPage({
      path: p,
      component: path.resolve('./src/gatsby-page.js'),
      context: {
        pagePath: p,
      },
    })
  })

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
  const songToContext = ({ node } = {}) => {
    return (
      node && {
        id: node.fields.slug,
        title: node.frontmatter.title,
      }
    )
  }
  songs.forEach(({ node }, index) => {
    createPage({
      path: `/music` + node.fields.slug,
      component: path.resolve(`./src/song-page.js`),
      context: {
        id: node.id,
        olderSong: songToContext(songs[index + 1]),
        newerSong: songToContext(songs[index - 1]),
      },
    })
  })
  // body
  // frontmatter {
  //   title
  //   artist
  //   youtube
  //   soundcloud
  //   type
  //   genre
  //   date
  // }
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
