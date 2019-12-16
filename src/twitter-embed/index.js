/**
 * Adapted from https://github.com/gatsbyjs/gatsby/blob/bb5d62dc5ac9154f87fd572ef81905121de1ed23/packages/gatsby-plugin-twitter/src/gatsby-browser.js
 * @license MIT
 * Copyright (c) 2015 Gatsbyjs
 */
const injectTwitterScript = () => {
  function addJS(jsCode) {
    var s = document.createElement(`script`)

    s.type = `text/javascript`
    s.innerText = jsCode
    document.getElementsByTagName(`head`)[0].appendChild(s)
  }
  addJS(`
    window.twttr = (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0],
        t = window.twttr || {};
      if (d.getElementById(id)) return t;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://platform.twitter.com/widgets.js";
      fjs.parentNode.insertBefore(js, fjs);
      t._e = [];
      t.ready = function(f) {
        t._e.push(f);
      };
      return t;
    })(document, "script", "twitter-wjs");
  `)
}

let injectedTwitterScript = false

const embedClasses = [
  `.twitter-tweet`,
  `.twitter-timeline`,
  `.twitter-follow-button`,
  `.twitter-share-button`,
].join(`,`)

export function checkTwitterEmbeds() {
  // If there's an embedded element, lazy-load the twitter script (if it hasn't
  // already been loaded), and then run the twitter load function.
  if (document.querySelector(embedClasses) !== null) {
    if (!injectedTwitterScript) {
      injectTwitterScript()
      injectedTwitterScript = true
    }

    const twttr = /** @type {any} */ (window).twttr

    if (
      typeof twttr !== `undefined` &&
      twttr.widgets &&
      typeof twttr.widgets.load === `function`
    ) {
      twttr.widgets.load()
    }
  }
}
