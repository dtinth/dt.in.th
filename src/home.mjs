import styled, { keyframes } from 'styled-components'
import React from 'react'
import { beat } from './styles'
import { ActiveSectionProvider, Footer, Main, Navigation, Wrapper, Perspective, AnimatedCharacter, Heading, Intro, Name } from './common'

export default {
  title: 'dt.in.th',
  render: renderPage
}

function renderPage () {
  return (
    <ActiveSectionProvider activeSection='home'>
      <Perspective>
        <SiteTitleContainer>
          <SiteTitle>
            {'dt.in.th'.split('').map((ch, i) => (
              ch === ' '
                ? <span>{' '}</span>
                : <AnimatedCharacter key={i} seed={i} delay={i * 0.03}>{ch}</AnimatedCharacter>
            ))}
          </SiteTitle>
          <Navigation animated />
        </SiteTitleContainer>
        <Main>
          <FadeIn>
            <Wrapper>
              <Heading>About</Heading>
              <Intro>
                Hi! I’m <Name>Thai Pangsakulyanont</Name>.
                I’m a software developer from Thailand.
                I like to build random stuff!
              </Intro>
              <Footer />
            </Wrapper>
          </FadeIn>
        </Main>
      </Perspective>
    </ActiveSectionProvider>
  )
}

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0px); }
  to { opacity: 1; transform: translateY(0px); }
`

export const FadeIn = styled.div`
  animation: 1s ${fadeIn} ease-out;
  animation-delay: 0.7s;
  animation-fill-mode: backwards;
`

const SiteTitle = styled.h1`
  color: #8b8685;
  text-align: center;
  margin: 0 0 ${beat(1)};
  font-size: 64px;
  font-family: Arimo SiteTitle, Helvetica, sans-serif;
  @media (min-width: 360px) { font-size: 96px; }
  @media (min-width: 480px) { font-size: 128px; }
  @media (min-width: 720px) { font-size: 192px; }
`

const SiteTitleContainer = styled.div`
  padding-top: 20vh;
`
