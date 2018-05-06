import React from 'react'
import styled from 'styled-components'
import {
  ActiveSectionProvider,
  Breadcrumb,
  Main,
  Wrapper,
  Heading,
  Intro,
  P,
  Footer,
  YouTube,
  PreviousNext,
  SlideShare,
  Name
} from './common'
import { beat } from './styles'
import smellsInReactAppsImage from './talks/smells-in-react-apps.jpg'
import { Prefetcher } from './prefetch.mjs'

const data = [
  {
    id: 'smells-in-react-apps',
    title: 'Smells in React Apps',
    date: '2018-01-27',
    meta: {
      description:
        'Recognizing code smells is an important skill that helps you build maintainable software.',
      image: smellsInReactAppsImage
    },
    description: () => (
      <React.Fragment>
        <Intro>
          Recognizing code smells is an important skill that helps you build
          maintainable software.
        </Intro>
        <P>
          This talk is about code and design smells in React applications, based
          on the experience working in a 2-year-old project with more than 900
          components.
        </P>
        <P>
          Presented at <a href='https://2018.jsconf.asia/'>JSConf.Asia 2018</a>.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://speakerdeck.com/dtinth/smells-in-react-apps'>
            Slides
          </a>
        </li>
        <li>
          <a href='https://speakerdeck.com/dtinth/smells-in-react-apps-with-edited-transcript'>
            Slides (with edited transcript)
          </a>
        </li>
      </TalkLinks>
    ),
    youtube: 'xBa0_b-5XDw'
  },

  {
    id: 'code-mania-110',
    title: 'Let’s Start Contributing to Open Source!',
    date: '2017-11-25',
    description: () => (
      <React.Fragment>
        <P>
          A workshop to encourage people to start contributing to Open Source!
        </P>
        <P>
          Presented at{' '}
          <a href='https://www.eventpop.me/e/2446'>Code Mania 110</a>.
        </P>
      </React.Fragment>
    ),
    speakerdeck: {
      id: 'dfd8464f036645128c8dcb1d59f55419',
      ratio: 1.33333333333333
    },
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://www.youtube.com/watch?v=XCdW7-kmxXg'>
            Workshop recording
          </a>
        </li>
      </TalkLinks>
    )
  },

  {
    id: 'react-live-coding',
    title: 'React Bangkok 2.0.0: Live coding / mob programming session',
    date: '2017-06-03',
    description: () => (
      <React.Fragment>
        <P>
          In this session, I demonstrated how one can quickly create a simple
          React application by doing live coding. The goal is to let people
          interested in React see how React app development feels like.
        </P>
        <P>
          Presented at{' '}
          <a href='https://reactbkk.com/2.0.0/'>React Bangkok 2.0.0</a>.
        </P>
      </React.Fragment>
    ),
    youtube: 'u5mpnKYhfUE'
  },

  {
    id: 'web-midi-instruments-lightning-talk',
    title: 'Creating musical instruments using Web MIDI API',
    date: '2016-11-26',
    description: () => (
      <React.Fragment>
        <P>
          Presented at <a href='https://2016.jsconf.asia/'>JSConf.Asia 2016</a>.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://our.wonderful.software/my-musical-instruments-f88ed8b12331'>
            Writeup
          </a>
        </li>
      </TalkLinks>
    ),
    youtube: '3Y-XeJmGQis'
  },

  {
    id: 'hoc',
    title: 'Higher-Order Components and Recompose',
    date: '2016-08-27',
    description: () => (
      <React.Fragment>
        <P>
          In this talk, I presented about higher-order functions, and a pattern
          for solving code duplication in React components using higher-order
          components. I also talked about how object-oriented programming
          (pursuing well-factored code) and functional programming (pursuing
          predictable code) goes hand in hand.
        </P>
        <P>
          Presented at{' '}
          <a href='https://reactbkk.github.io/1.0.0/'>React Bangkok 1.0.0</a>.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://reactbkk.github.io/1.0.0/higher-order-components.pdf'>
            Slides
          </a>
        </li>
      </TalkLinks>
    ),
    youtube: 'MyX4Et5fqlY'
  },

  {
    id: 'taskworld-react',
    title: 'Taskworld and the Evolving Use of React.js',
    date: '2016-06-14',
    description: () => (
      <React.Fragment>
        <P>
          In this talk, I and{' '}
          <a href='https://medium.com/@chrisza'>Chakrit Likitkhajorn</a>{' '}
          presented about the basic concepts of React.js and how Taskworld uses
          React.js in its front-end. Topics include declarative views,
          functional components, virtual DOM, and handling state changes. It
          also explores the benefits and challenges of using React, and gives a
          quick overview of Redux, a state management solution.
        </P>
        <P>
          Presented at{' '}
          <a href='https://www.meetup.com/bkk-web/events/231034570/'>
            BKK WEB Meetup
          </a>{' '}
          and{' '}
          <a href='https://www.eventpop.me/e/2489'>
            Facebook Developer Circles Bangkok: Meetup Launch {'&'} Hackathon
          </a>.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://taskworld.github.io/react-talk/'>Slides</a>
        </li>
      </TalkLinks>
    )
  },

  {
    id: 'tdd',
    title: 'TDD',
    date: '2016-03-30',
    description: () => (
      <React.Fragment>
        <P>
          A lecture I gave to Computer Engineering students in a Seminar course.
          In this lecture I give a gentle introduction to test-driven
          development. When I published the slides, it got shared more than
          1,000 times in the first day.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='http://go.spacet.me/tdd20160330'>Slides</a>
        </li>
      </TalkLinks>
    )
  },

  {
    id: 'spring',
    title: 'CSS Spring Animation Using Physics and Calculus',
    date: '2015-11-22',
    description: () => (
      <React.Fragment>
        <Intro>Where design, programming, physics and calculus meet.</Intro>
        <P>
          In this talk, I implemented a realistic spring-type animation using
          basic knowledge of physics and calculus. I talk about this because
          many software engineering students wonder if they’ll ever use the
          knowledge learn from the required Calculus and Physics course in their
          life. I want to show that knowledge allows you to be more creative.
        </P>
        <P>
          Presented at{' '}
          <a href='http://2015.barcampbangkhen.org/'>BarCamp Bangkhen 6</a>.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://medium.com/@dtinth/spring-animation-in-css-2039de6e1a03'>
            Writeup
          </a>
        </li>
      </TalkLinks>
    )
  },

  {
    id: 'functional-reactive-programming',
    title: 'Functional Reactive Programming using RxJS',
    date: '2015-07-18',
    description: () => (
      <React.Fragment>
        <P>
          In this talk, I explained the basic concepts of functional reactive
          programming, the marble diagram, and a library that enables reactive
          programming, RxJS.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a
            href={
              'https://www.youtube.com/watch?v=6ghavmltuso&index=24&list=PLN3vA36CdPiQc18953hkzgM0fxHKYzdns'
            }
          >
            Videos
          </a>
        </li>
      </TalkLinks>
    )
  },

  {
    id: 'codemania2015',
    title: 'Frontend Web Development in 2015',
    date: '2015-06-27',
    description: () => (
      <React.Fragment>
        <P>
          In this talk, I walked through the new technologies in front-end web
          development that has become increasingly popular in 2015. It includes
          browser technologies (WebGL, Web Audio, WebRTC, Service Worker),
          development tools (preprocessing languages, transpilers, package
          managers, module bundlers), and React library.
        </P>
        <P>
          Presented at <em>Code Mania 10</em>.
        </P>
      </React.Fragment>
    ),
    links: () => (
      <TalkLinks>
        <li>
          <a href='https://spacet.me/codemania2015/'>Talk homepage</a>
        </li>
      </TalkLinks>
    ),
    youtube: '3PWmxxKeT2Y'
  },

  {
    id: 'vim',
    title: 'VIM tips, technique, scripts, plugins',
    date: '2013-09-22',
    description: () => (
      <React.Fragment>
        <P>
          In this talk, I showed my VIM configuration, with the tricks and
          plugins that I use.
        </P>
        <P>
          Presented at{' '}
          <a href='http://2013.barcampbangkhen.org/'>BarCamp Bangkhen 4</a>.
        </P>
      </React.Fragment>
    ),
    slideshare: 'whRzNPugGQEBOI'
  },

  {
    id: 'recursion',
    title: 'Introduction to Recursion (Python)',
    date: '2013-06-27',
    description: () => (
      <React.Fragment>
        <P>
          An introductory lecture to recursion for freshmen students in Python.
        </P>
      </React.Fragment>
    ),
    slideshare: 'DiR07r8gy55JdE'
  }
]

const pages = {}

for (const talkData of data) {
  pages[`/talks/${talkData.id}/`] = talkPage(talkData)
}

pages['/talks/'] = {
  title: 'Thai’s Talks',
  render: renderIndex
}

function talkPage (talkData) {
  const meta = talkData.meta || {}
  const description = meta.description
  const image = meta.image
  return {
    title: talkData.title,
    render: () => renderTalk(talkData),
    head: () => (
      <React.Fragment>
        {!!description && <meta name='description' content={description} />}
        <meta property='og:title' content={talkData.title} />
        {!!description && (
          <meta property='og:description' content={description} />
        )}
        <meta
          property='og:url'
          content={`https://dt.in.th/talks/${talkData.id}/`}
        />
        {!!image && <meta property='og:image' content={image} />}
      </React.Fragment>
    )
  }
}

function renderTalk (talkData) {
  const breadcrumb = [{ text: 'Talks', href: '/talks/' }]
  const index = data.indexOf(talkData)
  const newerTalk = data[index - 1]
  const olderTalk = data[index + 1]
  return (
    <ActiveSectionProvider activeSection='talks'>
      <Main>
        <Wrapper>
          <Breadcrumb items={breadcrumb} />
          <Heading>
            <Name>{talkData.title}</Name>
          </Heading>
          {talkData.description()}
        </Wrapper>
        <P>
          {talkData.youtube ? (
            <YouTube id={talkData.youtube} />
          ) : talkData.speakerdeck ? (
            <Wrapper>
              <script
                async
                className='speakerdeck-embed'
                data-id={talkData.speakerdeck.id}
                data-ratio={talkData.speakerdeck.ratio}
                src='https://speakerdeck.com/assets/embed.js'
              />
            </Wrapper>
          ) : talkData.slideshare ? (
            <SlideShare id={talkData.slideshare} />
          ) : null}
        </P>
        <Prefetcher>
          {prefetch => (
            <Wrapper>
              {!!talkData.links && talkData.links()}
              <PreviousNext>
                {!!olderTalk && (
                  <PreviousNext.Item older>
                    <PreviousNext.Link
                      href={prefetch(`/talks/${olderTalk.id}/`)}
                    >
                      &laquo; older talk
                      <PreviousNext.Title>{olderTalk.title}</PreviousNext.Title>
                    </PreviousNext.Link>
                  </PreviousNext.Item>
                )}
                {!!newerTalk && (
                  <PreviousNext.Item newer>
                    <PreviousNext.Link
                      href={prefetch(`/talks/${newerTalk.id}/`)}
                    >
                      newer talk &raquo;
                      <PreviousNext.Title>{newerTalk.title}</PreviousNext.Title>
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

function renderIndex () {
  return (
    <ActiveSectionProvider activeSection='talks'>
      <Main>
        <Wrapper>
          <Breadcrumb />
          <Heading>Talks</Heading>
          <Prefetcher>
            {prefetch => (
              <TalkLinks>
                {data.map((talk, i) => (
                  <li key={i}>
                    {talk.date}{' '}
                    <a href={prefetch(`/talks/${talk.id}/`, { when: i < 3 })}>
                      {talk.title}
                    </a>
                  </li>
                ))}
              </TalkLinks>
            )}
          </Prefetcher>
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
