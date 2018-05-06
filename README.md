# [dt.in.th](https://dt.in.th/)

My website/portfolio.

## Tech stack

This website uses a custom static site generator.

[`src/index.js`](src/index.js) exports the `pages` (all pages to render) and the
`renderPageToHTML` function. It is compiled using
[webpack](https://webpack.js.org/), resulting in a CommonJS bundle. The build
script ([`bin/site.js`](bin/site.js)) reads the bundle and calls
`renderPageToHTML` on each page, resulting in a static site. During development
([`bin/dev.js`](bin/dev.js)),
[webpack-isomorphic-dev-middleware](https://github.com/moxystudio/webpack-isomorphic-dev-middleware)
is used for hot-reloading the website bundle.

Each page is written in React (JSX), and
[ReactDOMServer](https://reactjs.org/docs/react-dom-server.html) is used to turn
each page into HTML markup. (React is not used on the browser.)
[styled-components](https://www.styled-components.com/) is used so that each
component can declare its own style. When rendering, the CSS used in the page is
collected and inlined into the HTML file.
[html-minifier](https://github.com/kangax/html-minifier) is used to minify the
resulting HTML.

[`src/browser.js`](src/browser.js) contains the code that will be run in the
browser. It is compiled using [webpack](https://webpack.js.org/) and inlined
into the resulting HTML.
