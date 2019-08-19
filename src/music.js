import {
  ActiveSectionProvider,
  Footer,
  FadeIn,
  Main,
  Wrapper,
  Perspective,
  AnimatedCharacter,
  Intro,
  SiteTitle,
  SiteTitleContainer,
  PreviousNext,
  Breadcrumb,
  YouTube,
  SoundCloud,
  Name,
} from './common'
import styled from 'styled-components'
import React from 'react'
import { beat, fontSize, F4, Eb4, Bb3, relativeFontSize } from './styles'
import data from './music.yml'
import MarkdownIt from 'markdown-it'

export const ENABLED = true // process.env.NODE_ENV !== 'production'
const songs = data.songs
const pages = {
  '/music/': {
    title: 'flicknote',
    render: renderHome,
  },
}

for (const song of songs) {
  pages[`/music/${song.id}/`] = {
    title: song.title,
    render: () => renderSongPage(song),
  }
}

function renderHome() {
  return (
    <ActiveSectionProvider activeSection="music">
      <Perspective>
        <SiteTitleContainer>
          <SiteTitle>
            {'flicknote'.split('').map((ch, i) =>
              ch === ' ' ? (
                <span />
              ) : (
                <AnimatedCharacter key={i} seed={i} delay={i * 0.03}>
                  {ch}
                </AnimatedCharacter>
              ),
            )}
          </SiteTitle>
        </SiteTitleContainer>
        <Main>
          <FadeIn>
            <Wrapper>
              <Intro>
                Hi! I’m <Name>Thai Pangsakulyanont</Name>. I am an amateur
                composer, producer, and iPad-drummer. Here’s a selection of my
                song projects and collaborations! I also{' '}
                <a href="/">build software</a>.
              </Intro>
            </Wrapper>
          </FadeIn>
          <Wrapper>
            <Tracklist />
            <Footer />
          </Wrapper>
        </Main>
      </Perspective>
    </ActiveSectionProvider>
  )
}

const Tracklist = styled(({ className }) => {
  return (
    <ul className={className}>
      {songs.map((song, index) => (
        <li key={song.id}>
          <TracklistItem song={song} index={index} />
        </li>
      ))}
    </ul>
  )
})`
  padding: 0;
  margin: ${beat(2)} 0 0;
  list-style: none;
  > li {
    display: block;
    margin-top: ${beat(1)};
  }
`

const TracklistItem = styled(({ className, song, index }) => (
  <a href={`/music/${song.id}/`} className={className}>
    <span className="genre">
      <SongType type={song.type} />
      <br />
      {song.genre}
    </span>
    <br />
    <strong className="title">{song.title}</strong>
    <br />
    <span className="artist">{song.artist}</span>
  </a>
))`
  color: inherit;
  text-decoration: none;
  display: block;
  text-align: center;
  margin: 0 auto;
  max-width: ${beat(24)};
  background: #252423;
  padding: ${beat(0.5)};
  border: 1px solid #656463;
  box-shadow: 2px 2px 0 #151413;
  line-height: ${beat(1)};
  > .genre {
    color: #8b8685;
    line-height: ${beat(0.75)};
    font-size: ${fontSize(F4)};
    display: block;
  }
  > .title {
    color: #bef;
    display: block;
  }
  > .artist {
    font-size: ${fontSize(F4)};
    display: block;
  }
  > br {
    display: none;
  }
`

function renderSongPage(song) {
  const breadcrumb = [{ text: 'Music', href: '/music/' }]
  const index = songs.indexOf(song)
  const newerSong = songs[index - 1]
  const olderSong = songs[index + 1]
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
        {!!song.description && (
          <Wrapper>
            <SongDescription text={song.description} />
          </Wrapper>
        )}
        <Wrapper>
          <PreviousNext>
            {!!olderSong && (
              <PreviousNext.Item older>
                <PreviousNext.Link href={`/music/${olderSong.id}/`}>
                  &laquo; older song
                  <PreviousNext.Title>{olderSong.title}</PreviousNext.Title>
                </PreviousNext.Link>
              </PreviousNext.Item>
            )}
            {!!newerSong && (
              <PreviousNext.Item newer>
                <PreviousNext.Link href={`/music/${newerSong.id}/`}>
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
const SongHeading = styled(({ className, song }) => (
  <h1 href={`/music/${song.id}/`} className={className}>
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
const SongNavigation = styled(({ className, children, older, newer }) => (
  <div className={className}>
    <div className="current">{children}</div>
    <div className="navigate older">
      <a
        href={older ? `/music/${older.id}/` : '#'}
        className={older ? '' : 'is-disabled'}
        tabIndex={older ? 0 : -1}
      >
        &laquo;
      </a>
    </div>
    <div className="navigate newer">
      <a
        href={newer ? `/music/${newer.id}/` : '#'}
        className={newer ? '' : 'is-disabled'}
        tabIndex={newer ? 0 : -1}
      >
        &raquo;
      </a>
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

const md = MarkdownIt({
  linkify: true,
})
const SongDescription = styled(({ className, text }) => {
  const html = md.render(text)

  // TODO: Render Markdown in preprocessor instead of here
  return (
    <div className={className} dangerouslySetInnerHTML={{ __html: html }} />
  )
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

const SongType = styled(({ className, type }) => (
  <span className={`${className} ${type}`}>{type}</span>
))`
  text-transform: uppercase;
  border: 1px solid currentColor;
  font-size: ${relativeFontSize(3)};
  font-weight: normal;
  padding: 0.1ex 0.25ex;
  border-radius: 3px;
  &.collab {
    color: #f9d153;
  }
  &.original {
    color: #d7fc70;
  }
  &.remix {
    color: #fc80a8;
  }
`

export default ENABLED ? pages : {}
