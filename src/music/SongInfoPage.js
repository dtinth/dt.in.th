// @ts-check
import React from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { beat, fontSize, Eb4, Bb3, relativeFontSize } from '../styles'
import { Link } from 'gatsby'
import { SongType } from './SongType'

import {
  ActiveSectionProvider,
  Footer,
  Main,
  Wrapper,
  PreviousNext,
  Breadcrumb,
  YouTube,
  SoundCloud,
} from '../common'

export const pageQuery = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        genre
        artist
        type
        youtube
        soundcloud
      }
    }
  }
`

export default props => {
  const {
    data: { mdx },
    pageContext: { olderSong, newerSong },
  } = props

  const breadcrumb = [{ text: 'Music', href: '/music/' }]
  const song = mdx.frontmatter

  return (
    <ActiveSectionProvider activeSection="music">
      <Main>
        <Wrapper>
          <Breadcrumb items={breadcrumb} />
          <SongNavigation older={olderSong} newer={newerSong}>
            <SongHeading song={song} />
          </SongNavigation>
        </Wrapper>
        {song.youtube ? (
          <YouTube id={song.youtube} />
        ) : song.soundcloud ? (
          <SoundCloud id={song.soundcloud} />
        ) : null}
        <Wrapper>
          <SongDescription>
            <MDXRenderer>{mdx.body}</MDXRenderer>
          </SongDescription>
        </Wrapper>
        <Wrapper>
          <PreviousNext>
            {!!olderSong && (
              <PreviousNext.Item older>
                <PreviousNext.Link to={`/music/${olderSong.id}/`}>
                  &laquo; older song
                  <PreviousNext.Title>{olderSong.title}</PreviousNext.Title>
                </PreviousNext.Link>
              </PreviousNext.Item>
            )}
            {!!newerSong && (
              <PreviousNext.Item newer>
                <PreviousNext.Link to={`/music/${newerSong.id}/`}>
                  newer song &raquo;
                  <PreviousNext.Title>{newerSong.title}</PreviousNext.Title>
                </PreviousNext.Link>
              </PreviousNext.Item>
            )}
          </PreviousNext>
          <Footer />
        </Wrapper>
      </Main>
    </ActiveSectionProvider>
  )
}

const SongNavigation = styled(({ className, children, older, newer }) => (
  <div className={className}>
    <div className="current">{children}</div>
    <div className="navigate older">
      <Link
        to={older ? `/music/${older.id}/` : '#'}
        className={older ? '' : 'is-disabled'}
        tabIndex={older ? 0 : -1}
      >
        &laquo;
      </Link>
    </div>
    <div className="navigate newer">
      <Link
        to={newer ? `/music/${newer.id}/` : '#'}
        className={newer ? '' : 'is-disabled'}
        tabIndex={newer ? 0 : -1}
      >
        &raquo;
      </Link>
    </div>
  </div>
))`
  display: flex;
  align-items: center;
  > .current {
    order: 2;
    flex: 1;
  }
  > .older {
    order: 1;
  }
  > .newer {
    order: 3;
  }
  > .navigate {
    > a {
      text-decoration: none;
      &.is-disabled {
        color: #8b8685;
        pointer-events: none;
      }
    }
  }
`

const SongDescription = styled(({ className, children }) => {
  return <div className={className}>{children}</div>
})`
  margin-top: ${beat(1)};
  pre,
  code {
    font: inherit;
  }
  p,
  h1,
  h2,
  pre,
  blockquote {
    &:first-child {
      margin: 0;
    }
    &:not(:first-child) {
      margin: ${beat(1)} 0 0;
    }
  }
  blockquote {
    background: #090807;
    border: 1px solid #656463;
    margin: ${beat(1)} 0 0;
    box-shadow: 2px 2px 0 #151413;
    padding: ${beat(0.5)};
  }
  hr {
    border: 0;
    border-top: 2px solid #454443;
    margin: ${beat(1)} 0;
  }
`

const SongHeading = styled(({ className, song }) => (
  <h1 className={className}>
    <span className="genre">
      <SongType type={song.type} />
      <br />
      {song.genre}
    </span>
    <br />
    <strong className="title">{song.title}</strong>
    <br />
    <span className="artist">{song.artist}</span>
  </h1>
))`
  text-align: center;
  margin: ${beat(1)} 0;
  line-height: ${beat(1)};
  font-weight: normal;
  > .genre {
    color: #8b8685;
    display: block;
    font-size: ${fontSize(Eb4)};
  }
  > .title {
    color: #bef;
    display: block;
    font-size: ${fontSize(Bb3)};
  }
  > .artist {
    display: block;
    font-size: ${fontSize(Eb4)};
  }
  > br {
    display: none;
  }
`
