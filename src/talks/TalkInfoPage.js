import React from 'react'
import styled from 'styled-components'
import { beat } from '../styles'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
  ActiveSectionProvider,
  Breadcrumb,
  Main,
  Wrapper,
  Heading,
  P,
  Footer,
  YouTube,
  PreviousNext,
  SlideShare,
  Name,
  SpeakerDeck,
} from '../common'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query TalkInfoQuery($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      fields {
        slug
      }
      frontmatter {
        title
        date
        speakerdeck {
          id
          ratio
        }
        slideshare
        youtube
        links {
          url
          title
        }
      }
    }
  }
`

export default props => {
  const {
    data: { mdx },
    pageContext: { olderTalk, newerTalk },
  } = props

  const breadcrumb = [{ text: 'Talks', href: '/talks/' }]
  const talkData = mdx.frontmatter

  return (
    <ActiveSectionProvider activeSection="talks">
      <Main>
        <Wrapper>
          <Breadcrumb items={breadcrumb} />
          <Heading>
            <Name>{talkData.title}</Name>
          </Heading>
          <MDXRenderer>{mdx.body}</MDXRenderer>
        </Wrapper>
        <P>
          {talkData.youtube ? (
            <YouTube id={talkData.youtube} />
          ) : talkData.speakerdeck ? (
            <Wrapper>
              <SpeakerDeck
                id={talkData.speakerdeck.id}
                ratio={talkData.speakerdeck.ratio}
              />
            </Wrapper>
          ) : talkData.slideshare ? (
            <SlideShare id={talkData.slideshare} />
          ) : null}
        </P>
        <Wrapper>
          {!!talkData.links && (
            <TalkLinks>
              {talkData.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url}>{link.title}</a>
                </li>
              ))}
            </TalkLinks>
          )}
          <PreviousNext>
            {!!olderTalk && (
              <PreviousNext.Item older>
                <PreviousNext.Link to={`/talks/${olderTalk.id}/`}>
                  &laquo; older talk
                  <PreviousNext.Title>{olderTalk.title}</PreviousNext.Title>
                </PreviousNext.Link>
              </PreviousNext.Item>
            )}
            {!!newerTalk && (
              <PreviousNext.Item newer>
                <PreviousNext.Link to={`/talks/${newerTalk.id}/`}>
                  newer talk &raquo;
                  <PreviousNext.Title>{newerTalk.title}</PreviousNext.Title>
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

const TalkLinks = styled.ul`
  margin: ${beat(1)} 0 0;
  line-height: ${beat(1)};
  padding-left: ${beat(1)};
`
