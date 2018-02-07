import styled, { keyframes } from 'styled-components'
import React from 'react'
import Chance from 'chance'
import _ from 'lodash'
import { fontSize, beat, C4, B4, E4 } from './styles'

export default {
  title: 'dt.in.th',
  render: renderPage
}

function renderPage () {
  return (
    <div>
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
        <MainContent>
          <Heading>About</Heading>
          <Intro>
            Hi! I’m <Name>Thai Pangsakulyanont</Name>.
            I’m a software developer from Thailand.
            I like to build random stuff!
          </Intro>
          <Footer />
        </MainContent>
      </Perspective>
    </div>
  )
}

const Heading = styled.h2`
  color: #D7FC70;
  margin: ${beat(1.5)} 0 0;
  font-size: ${fontSize(B4)};
  line-height: ${beat(1.5)};
`

const Name = styled.strong`
  color: #bef;
`

const Intro = styled.p`
  margin: ${beat(1)} 0;
  font-size: ${fontSize(E4)};
  line-height: ${beat(1.25)};
`

const Perspective = styled.div`
  min-height: 100vh;
  perspective: 100vw;
  perspective-origin: 50vw 50vh;
  overflow: hidden;
`

const getAnimation = _.memoize((i) => {
  const c = new Chance(i)
  const x0 = c.floating({ min: -20, max: 20 })
  const y0 = c.floating({ min: -20, max: 20 })
  const z0 = c.floating({ min: 50, max: 90 })
  const xr = c.floating({ min: -20, max: 20 })
  const yr = c.floating({ min: -20, max: 20 })
  const zr = c.floating({ min: -20, max: 20 })
  const keyframe = i => {
    const v = Math.pow(1 - (i / 8), 3)
    const o = Math.pow(i / 8, 0.5)
    const f = x => x.toFixed(3).replace(/(\..*?)0*$/, '$1').replace(/\.$/, '')
    return `
      ${i * 100 / 8}% {
        transform:
          rotate3d(${f(xr * v)}, ${f(yr * v)}, ${f(zr * v)}, ${f(v * 180)}deg)
          translate3d(${f(x0 * v)}vw, ${f(y0 * v)}vw, ${f(z0 * v)}vw);
        opacity: ${o};
      }
    `
  }
  return keyframes`
    ${Array(9).fill().map((_, i) => i).map(keyframe).join('')}
  `
})

const AnimatedCharacter = styled(
  ({ className, children }) => <span className={className}>{children}</span>
)`
  display: inline-block;
  position: relative;
  animation: 1s ${props => getAnimation(props.seed)} linear;
  animation-fill-mode: backwards;
  animation-delay: ${props => props.delay}s;
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

const Footer = styled(({ className }) => {
  return (
    <footer className={className}>
      <Navigation small animated={false} />
    </footer>
  )
})`
  margin: ${beat(3)} 0 ${beat(1)};
`

function Navigation ({ animated, small }) {
  const item = (index, href, text) => (
    <LinkItem
      animated={animated}
      small={small}
      index={index}
      href={href}
    >
      {text}
    </LinkItem>
  )
  return (
    <Links>
      {item(2, 'https://flicknote.spacet.me', 'Music')}
      {item(3, 'https://github.com/dtinth', 'GitHub')}
      {item(4, 'https://twitter.com/dtinth', 'Twitter')}
      {item(5, 'https://medium.com/@dtinth', 'Medium')}
      {item(6, 'https://me.dt.in.th', 'Blog')}
    </Links>
  )
}

const Links = styled.div`
  display: flex;
  padding: 0 16px;
  flex-wrap: wrap;
  justify-content: center;
`

function LinkItem ({ animated, small, index, children, href }) {
  const wrapWithAnimation = x => animated
    ? <AnimatedCharacter delay={index * 0.07 + 0.3} seed={index + 99}>{x}</AnimatedCharacter>
    : x
  return (
    <LinkListItem small={small}>
      {wrapWithAnimation(<a href={href}>{children}</a>)}
    </LinkListItem>
  )
}

const LinkListItem = styled.div`
  margin: ${props => props.small ? `${beat(0.25)} ${beat(0.5)}` : `${beat(0.5)} ${beat(0.67)}`};
  font-size: ${props => fontSize(props.small ? C4 : E4)};
  a {
    color: #ffb;
    text-decoration: none;
  }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0px); }
  to { opacity: 1; transform: translateY(0px); }
`

const MainContent = styled.div`
  margin: ${beat(3)} auto ${beat(2)};
  padding: 0 8px;
  max-width: 720px;
  line-height: ${beat(1)};
  animation: 1s ${fadeIn} ease-out;
  animation-delay: 0.7s;
  animation-fill-mode: backwards;
`
