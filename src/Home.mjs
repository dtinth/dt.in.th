import styled, { keyframes } from 'styled-components'
import React from 'react'
import Chance from 'chance'
import _ from 'lodash'
const beat = n => `${n * 24}px`

export default function Home () {
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
          <Links>
            {/* <LinkItem index={0} href='/projects/'>Projects</LinkItem> */}
            <LinkItem index={1} href='https://flicknote.spacet.me'>Music</LinkItem>
            {/* <LinkItem index={2} href='/talks/'>Talks</LinkItem> */}
            <LinkItem index={3} href='https://github.com/dtinth'>GitHub</LinkItem>
            <LinkItem index={4} href='https://twitter.com/dtinth'>Twitter</LinkItem>
            <LinkItem index={5} href='https://medium.com/@dtinth'>Medium</LinkItem>
            <LinkItem index={6} href='https://me.dt.in.th'>Blog</LinkItem>
          </Links>
        </SiteTitleContainer>
        <MainContent>
          <Intro>
            Hi! I’m <strong>Thai Pangsakulyanont</strong>.
            I’m a software developer from Thailand.
            I like to build random stuff!
          </Intro>
        </MainContent>
      </Perspective>
    </div>
  )
}

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
    const v = Math.pow(1 - (i / 10), 3)
    const o = Math.pow(i / 10, 0.5)
    const f = x => x.toFixed(3).replace(/(\..*?)0*$/, '$1').replace(/\.$/, '')
    return `
      ${i * 100 / 10}% {
        transform:
          rotate3d(${f(xr * v)}, ${f(yr * v)}, ${f(zr * v)}, ${f(v * 180)}deg)
          translate3d(${f(x0 * v)}vw, ${f(y0 * v)}vw, ${f(z0 * v)}vw);
        opacity: ${o};
      }
    `
  }
  return keyframes`
    ${Array(11).fill().map((_, i) => i).map(keyframe).join('')}
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
  margin: 0;
  font-size: 64px;
  @media (min-width: 360px) { font-size: 96px; }
  @media (min-width: 480px) { font-size: 128px; }
  @media (min-width: 720px) { font-size: 192px; }
`

const SiteTitleContainer = styled.div`
  padding-top: 20vh;
`

const Links = styled.div`
  display: flex;
  padding: 0 16px;
  flex-wrap: wrap;
  justify-content: center;
`

function LinkItem ({ index, children, href }) {
  return (
    <LinkListItem>
      <AnimatedCharacter delay={index * 0.07 + 0.3} seed={index + 99}>
        <a href={href}>{children}</a>
      </AnimatedCharacter>
    </LinkListItem>
  )
}

const LinkListItem = styled.div`
  margin: 12px 16px;
  font-size: 24px;
  a {
    color: #ffb;
    text-decoration: none;
  }
`

const introAnimation = keyframes`
  from { opacity: 0; transform: translateY(0px); }
  to { opacity: 1; transform: translateY(0px); }
`

const MainContent = styled.div`
  margin: ${beat(3)} auto ${beat(1)};
  padding: 0 8px;
  max-width: 720px;
  line-height: ${beat(1)};
`

const Intro = styled.p`
  margin: ${beat(1)} 0;
  font-size: 24px;
  animation: 1s ${introAnimation} ease-out;
  animation-fill-mode: backwards;
  animation-delay: 0.7s;
  line-height: ${beat(1.5)};
  strong {
    color: #bef;
  }
`
