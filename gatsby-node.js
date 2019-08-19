const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
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
    ...songIds.map(id => `/music/${id}/`),
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
}
