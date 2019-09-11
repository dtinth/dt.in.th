import React from 'react'
import {
  ActiveSectionProvider,
  Footer,
  FadeIn,
  Main,
  Navigation,
  Wrapper,
  Perspective,
  AnimatedCharacter,
  Heading,
  Intro,
  SiteTitle,
  SiteTitleContainer,
  Name,
} from '../common'

export default () => {
  return (
    <ActiveSectionProvider activeSection="home">
      <Perspective>
        <SiteTitleContainer>
          <SiteTitle>
            {'dt.in.th'.split('').map((ch, i) =>
              ch === ' ' ? (
                <span />
              ) : (
                <AnimatedCharacter key={i} seed={i} delay={i * 0.03}>
                  {ch}
                </AnimatedCharacter>
              ),
            )}
          </SiteTitle>
          <Navigation animated />
        </SiteTitleContainer>
        <Main>
          <FadeIn>
            <Wrapper>
              <Heading>About</Heading>
              <Intro>
                Hi! I’m <Name>Thai Pangsakulyanont</Name>. I’m a software
                developer from Thailand. I like to build random stuff!
              </Intro>
              <Footer />
            </Wrapper>
          </FadeIn>
        </Main>
      </Perspective>
    </ActiveSectionProvider>
  )
}
