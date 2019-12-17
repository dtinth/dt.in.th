// @ts-check
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { beat, fontSize, Db3, F4, Ab3, F3 } from '../styles'
import { checkTwitterEmbeds } from '../twitter-embed'
import RehypeReact from 'rehype-react'
import { renderToStaticMarkup } from 'react-dom/server'

export const MarkdownContent = styled(({ className, children }) => {
  return <div className={className}>{children}</div>
})`
  margin-top: ${beat(0.75)};
  p,
  pre,
  ul,
  ol,
  blockquote {
    &:first-child {
      margin: 0;
    }
    &:not(:first-child) {
      margin: ${beat(0.75)} 0 0;
    }
  }
  li {
    margin-top: ${beat(0.5)};
  }
  li > p:first-child {
    margin: ${beat(0.75)} 0 0;
  }
  h2 {
    color: #d7fc70;
    margin: ${beat(1.5)} 0 0;
    font-size: ${fontSize(Db3)};
    line-height: ${beat(1.5)};
  }
  h3 {
    color: #a9a8a7;
    margin: ${beat(1)} 0 0;
    font-size: ${fontSize(F3)};
    line-height: ${beat(1.5)};
  }
  h3 + p:not(:first-child) {
    margin-top: ${beat(0.25)};
  }
  p,
  li {
    code {
      border: 1px solid #555453;
      background: #252423;
      padding: 3px;
      padding-bottom: 0;
      border-radius: 2px;
      border-bottom-width: 2px;
      box-shadow: 0 1px 0 #252423;
      color: #e9d7c5;
    }
  }
  blockquote {
    border-left: 4px solid #656463;
    margin: ${beat(0.75)} 0 0;
    padding: ${beat(0.25)} ${beat(0.5)};
    font-style: italic;
  }
  hr {
    border: 0;
    border-top: 2px solid #454443;
    margin: ${beat(0.75)} 0;
  }
  .twitter-tweet-rendered,
  .gatsby-resp-iframe-wrapper {
    margin: ${beat(1)} 0;
  }
  strong {
    color: white;
    text-shadow: 1px 1px 0 #0003;
  }
  em {
    background: #fff1;
    text-shadow: 1px 1px 0 #0003;
  }

  /* for Netlify CMS */
  twitter-embed,
  call-to-action {
    background: #454443;
    display: block;
    color: #8b8685;
    font-size: ${fontSize(F4)};
    line-height: ${beat(0.75)};
    padding: ${beat(0.5)};
    &:not(:first-child) {
      margin: ${beat(0.75)} 0 0;
    }
    & * {
      color: inherit;
    }
  }

  img {
    max-width: 100%;
  }
`

function createRehypeReactCompiler() {
  return new RehypeReact(
    /** @type {any} */ ({
      createElement: React.createElement,
      components: {
        'twitter-embed': TwitterEmbed,
        'call-to-action': CallToAction,
      },
    }),
  )
}

function TwitterEmbed({ children }) {
  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      checkTwitterEmbeds(ref.current)
    }
  }, [])
  return (
    <div
      dangerouslySetInnerHTML={{
        __html:
          '<blockquote class="twitter-tweet tw-align-center" data-theme="dark">' +
          renderToStaticMarkup(children) +
          '</blockquote>',
      }}
      ref={ref}
    />
  )
}

const CallToAction = styled(({ href, className, children }) => {
  return (
    <p className={className}>
      <a href={href}>
        <strong>{children}</strong>
        <span className="cta-url">{href}</span>
      </a>
    </p>
  )
})`
  & a {
    display: block;
    text-decoration: none;
    color: #8b8685;
    background: #252423;
    border: 1px solid #666;
    border-radius: 10px;
    box-shadow: 0 0 1px #090807 inset, 0 -10px 20px rgba(9, 8, 7, 0.2) inset,
      0 2px 15px rgba(69, 68, 67, 0.7) inset, 0 3px 4px rgba(9, 8, 7, 0.4);
    -moz-transition: 0.1s background;
    -webkit-transition: 0.1s background;
    transition: 0.1s background;
    padding: ${beat(0.5)};

    &:hover {
      background: #353433;
    }

    &:focus {
      outline: none;
      border-color: #aaa;
    }

    & > strong {
      display: block;
      position: relative;
      color: #ffb;
      font-size: ${fontSize(Ab3)};
      padding-left: ${beat(1.25)};
      &::before {
        content: '→';
        color: #8b8685;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
      }
    }

    &:hover > strong {
      color: #fff;
    }

    & > .cta-url {
      display: block;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: ${fontSize(F4)};
      line-height: ${beat(0.75)};
      padding-left: ${beat(1.25)};
      margin-top: ${beat(0.25)};
    }
  }
`

export const { Compiler: renderHtmlAst } = createRehypeReactCompiler()
