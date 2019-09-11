// @ts-check
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
  Name,
} from '../common'
import styled from 'styled-components'
import React from 'react'
import { beat, fontSize, F4 } from '../styles'
import { Link, graphql } from 'gatsby'
import { SongType } from './SongType'

export const pageQuery = graphql`
  query SongIndexQuery {
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
            genre
            artist
            type
          }
        }
      }
    }
  }
`

export default props => {
  const songs = props.data.allMdx.edges.map(({ node }) => ({
    id: node.fields.slug,
    title: node.frontmatter.title,
    genre: node.frontmatter.genre,
    artist: node.frontmatter.artist,
    type: node.frontmatter.type,
  }))
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
                <Link to="/">build software</Link>.
              </Intro>
            </Wrapper>
          </FadeIn>
          <Wrapper>
            <Tracklist songs={songs} />
            <Footer />
          </Wrapper>
        </Main>
      </Perspective>
    </ActiveSectionProvider>
  )
}

const Tracklist = styled(({ className, songs }) => {
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
  <Link to={`/music/${song.id}/`} className={className}>
    <span className="genre">
      <SongType type={song.type} />
      <br />
      {song.genre}
    </span>
    <br />
    <strong className="title">{song.title}</strong>
    <br />
    <span className="artist">{song.artist}</span>
  </Link>
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
