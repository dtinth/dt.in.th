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
  Name
} from './common'
import { Prefetcher } from './prefetch'
import styled from 'styled-components'
import React from 'react'
import { beat, fontSize, F4, Eb4, Bb3 } from './styles'

export const ENABLED = true // process.env.NODE_ENV !== 'production'

export const songs = [
  {
    id: '422',
    title: '422',
    artist: 'flicknote · vocals by MindaRyn',
    genre: '0xF09F8EB9',
    youtube: 'gGIVlAwr-m8',
    date: '2017-07-16'
  },
  {
    id: 'butter-fly-cover-collab',
    title: 'Butter-Fly (Digimon Tri Ver.) (Cover/Collab)',
    artist: 'original by Wada Kouji · cover by MindaRyn',
    type: 'cover',
    genre: 'ANIME SONG COLLABORATION',
    youtube: 'CHarkZrQH34',
    date: '2017-01-20'
  },
  {
    id: 'everyday-evermore',
    title: 'Everyday evermore',
    artist: 'flicknote vs Dekdekbaloo feat. MindaRyn',
    genre: 'HOPEFUL LOVE SONG',
    youtube: 'KEqiqYXuaj8',
    date: '2016-09-23'
  },
  {
    id: 'bursting-music-star',
    title: 'bursting☆music☆star',
    artist: 'flicknote · video by 5argon',
    genre: 'MOR LAM SING STYLE',
    youtube: 'KEqiqYXuaj8',
    date: '2016-09-23'
  },
  {
    id: 'over-whelming-joy',
    title: 'OVER-WHELMING JOY',
    artist: 'flicknote',
    genre: 'SPEED CARNIVAL',
    youtube: '0eRTa2NQ4r0',
    date: '2016-07-03'
  },
  {
    id: 'running-out-2015',
    title: 'Running Out 2015',
    artist: 'flicknote · video by 5argon',
    genre: 'FRANTIC',
    youtube: 'X6y2m09V4Hw',
    date: '2016-07-03'
  },
  {
    id: 'only-love-remix',
    title: 'Only Love (Euphoric Trance Remix)',
    artist: 'Shannon Hurley remixed by flicknote',
    genre: 'EUPHORIC TRANCE',
    youtube: 'KUoi1Hp-bzM',
    date: '2015-08-16'
  },
  {
    id: 'by-my-side-ambient-house-mix',
    title: 'BY☆MY☆SIDE (Ambient House Mix)',
    artist: 'flicknote',
    genre: 'AMBIENT HOUSE',
    soundcloud: '207325787',
    date: '2015-05-27'
  },
  {
    id: 'auto-synchro',
    title: 'AUTO±SYNCHRO',
    artist: 'flicknote',
    genre: 'HARDSTYLE',
    soundcloud: '186916227',
    date: '2015-01-20'
  },
  {
    id: 'reminiscentia',
    title: 'Reminiscentia',
    artist: 'flicknote',
    genre: 'DRAMATIC TRANCE',
    soundcloud: '171200575',
    date: '2014-10-08'
  },
  {
    id: 'by-my-side',
    title: 'BY☆MY☆SIDE',
    artist: 'flicknote',
    genre: 'TRANCE CORE',
    soundcloud: '126044912',
    date: '2013-12-23'
  },
  {
    id: 'sawasdee-new-year',
    title: 'Sawasdee New Year',
    artist: 'flicknote',
    genre: 'CYBER QUICK WALTZ',
    soundcloud: '73064541',
    date: '2012-12-31'
  },
  {
    id: 'dont-wake-me-up-re-remix',
    title: 'Don’t Wake Me Up (iaht’s Re-Remix)',
    artist: 'original by Addict Animal vs Surafux · remixed by iaht',
    type: 'remix',
    genre: 'MELODIC TRANCE',
    soundcloud: '55936013',
    date: '2012-08-11'
  },
  {
    id: 'opaque-space',
    title: 'Opaque Space',
    artist: 'iaht',
    genre: 'HARDCORE',
    soundcloud: '182770407',
    date: '2010-09-10'
  }
]

const pages = {
  '/music/': {
    title: 'flicknote',
    render: renderHome
  }
}

for (const song of songs) {
  pages[`/music/${song.id}/`] = {
    title: song.title,
    render: () => renderSongPage(song)
  }
}

function renderHome () {
  return (
    <ActiveSectionProvider activeSection='music'>
      <Perspective>
        <SiteTitleContainer>
          <SiteTitle>
            {'flicknote'.split('').map(
              (ch, i) =>
                ch === ' ' ? (
                  <span />
                ) : (
                  <AnimatedCharacter key={i} seed={i} delay={i * 0.03}>
                    {ch}
                  </AnimatedCharacter>
                )
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
                <a href='/'>build software</a>.
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
      {songs.map(song => (
        <li key={song.id}>
          <TracklistItem song={song} />
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

const TracklistItem = styled(({ className, song }) => (
  <a href={`/music/${song.id}/`} className={className}>
    <span className='genre'>{song.genre}</span>
    <br />
    <strong className='title'>{song.title}</strong>
    <br />
    <span className='artist'>{song.artist}</span>
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
  box-shadow: 2px 2px 0 #090807;
  line-height: ${beat(1)};
  > .genre {
    color: #8b8685;
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

function renderSongPage (song) {
  const breadcrumb = [{ text: 'Music', href: '/music/' }]
  const index = songs.indexOf(song)
  const newerSong = songs[index - 1]
  const olderSong = songs[index + 1]
  return (
    <ActiveSectionProvider activeSection='music'>
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
        <Prefetcher>
          {prefetch => (
            <Wrapper>
              <PreviousNext>
                {!!olderSong && (
                  <PreviousNext.Item older>
                    <PreviousNext.Link
                      href={prefetch(`/music/${olderSong.id}/`)}
                    >
                      &laquo; older song
                      <PreviousNext.Title>{olderSong.title}</PreviousNext.Title>
                    </PreviousNext.Link>
                  </PreviousNext.Item>
                )}
                {!!newerSong && (
                  <PreviousNext.Item newer>
                    <PreviousNext.Link
                      href={prefetch(`/music/${newerSong.id}/`)}
                    >
                      newer song &raquo;
                      <PreviousNext.Title>{newerSong.title}</PreviousNext.Title>
                    </PreviousNext.Link>
                  </PreviousNext.Item>
                )}
              </PreviousNext>
              <Footer />
            </Wrapper>
          )}
        </Prefetcher>
      </Main>
    </ActiveSectionProvider>
  )
}
const SongHeading = styled(({ className, song }) => (
  <h1 href={`/music/${song.id}/`} className={className}>
    <span className='genre'>{song.genre}</span>
    <br />
    <strong className='title'>{song.title}</strong>
    <br />
    <span className='artist'>{song.artist}</span>
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
    <div className='current'>{children}</div>
    <div className='navigate older'>
      <a
        href={older ? `/music/${older.id}/` : '#'}
        className={older ? '' : 'is-disabled'}
        tabIndex={older ? 0 : -1}
      >
        &laquo;
      </a>
    </div>
    <div className='navigate newer'>
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

export default (ENABLED ? pages : {})
