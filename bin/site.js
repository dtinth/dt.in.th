const mkdirp = require('mkdirp')
const site = require('../build/node/main')
const path = require('path')
const fs = require('fs')

const clientAssets = {
  'main.js': fs.readFileSync('build/browser/main.js', 'utf8')
}

for (const pathname of Object.keys(site.pages)) {
  const target = path.join('dist', pathname, 'index.html')
  const page = site.pages[pathname]
  mkdirp.sync(path.dirname(target))
  Promise.resolve(site.renderPageToHTML(page, clientAssets))
    .then((html) => fs.writeFileSync(target, html))
    .catch((e) => {
      console.error('Cannot render', target, e)
    })
}
