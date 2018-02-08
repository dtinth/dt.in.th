const mkdirp = require('mkdirp')
const site = require('../build/node/main')
const path = require('path')
const fs = require('fs')

const clientAsset = (name) => {
  return fs.readFileSync(path.join('build', name), 'utf8')
}

for (const pathname of Object.keys(site.pages)) {
  const target = path.join('dist', pathname, 'index.html')
  const page = site.pages[pathname]
  mkdirp.sync(path.dirname(target))
  Promise.resolve(site.renderPageToHTML(page, clientAsset))
    .then((html) => fs.writeFileSync(target, html))
    .then(() => { console.log(target) })
    .catch((e) => {
      console.error('Cannot render', target, e)
    })
}
