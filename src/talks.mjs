import React from 'react'
import styled from 'styled-components'
import { ActiveSectionProvider, Breadcrumb, Main, Wrapper, Heading, Intro, P, Footer, YouTube, Name } from './common'
import { beat } from './styles'

const data = [
  {
    id: 'smells-in-react-apps',
    title: 'Smells in React Apps',
    description: () => (
      <React.Fragment>
        <Intro>
          Recognizing code smells is an important skill
          that helps you build maintainable software.
        </Intro>
        <P>
          This talk is about code and design smells in React applications,
          based on the experience working in a 2-year-old project
          with more than 900 components.
        </P>
        <P>
          Presented at <a href='https://2018.jsconf.asia/'>JSConf.Asia 2018</a>.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://speakerdeck.com/dtinth/smells-in-react-apps'>Slides</a>
        </li>
        <li>
          <a href='https://speakerdeck.com/dtinth/smells-in-react-apps-with-edited-transcript'>
            Slides (with edited transcript)
          </a>
        </li>
      </TalkLinks>
    ),
    youtube: 'xBa0_b-5XDw'
  }
]

const pages = { }

for (const talkData of data) {
  pages[`/talks/${talkData.id}/`] = talkPage(talkData)
}

pages['/talks/'] = {
  title: 'Thai’s Talks',
  render: renderIndex
}

function talkPage (talkData) {
  return {
    title: talkData.title,
    render: () => renderTalk(talkData)
  }
}

function renderTalk (talkData) {
  const breadcrumb = [
    { text: 'Talks', href: '/talks/' }
  ]
  return (
    <ActiveSectionProvider activeSection='talks'>
      <Main>
        <Wrapper>
          <Breadcrumb items={breadcrumb} />
          <Heading><Name>{talkData.title}</Name></Heading>
          {talkData.description()}
        </Wrapper>
        <P>
          {!!talkData.youtube && <YouTube id={talkData.youtube} />}
        </P>
        <Wrapper>
          {talkData.links()}
          <Footer />
        </Wrapper>
      </Main>
    </ActiveSectionProvider>
  )
}

function renderIndex () {
  return (
    <ActiveSectionProvider activeSection='talks'>
      <Main>
        <Wrapper>
          <Breadcrumb />
          <Heading>Talks</Heading>
          <TalkLinks>
            {data.map((talk, i) => (
              <li key={i}>
                <a href={`/talks/${talk.id}/`}><Name>{talk.title}</Name></a>
              </li>
            ))}
          </TalkLinks>
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

export default pages
