import styled, { keyframes } from 'styled-components'
import React from 'react'
import Chance from 'chance'
import _ from 'lodash'
import { fontSize, beat, C4, B4, E4, G3 } from './styles'
import { Prefetcher } from './prefetch'

export function Breadcrumb ({ items = [] }) {
  return (
    <BreadcrumbContainer>
      <a href='/'>
        <SiteName>dt.in.th</SiteName>
      </a>{' '}
      &raquo;
      {items.map((item, i) => (
        <React.Fragment key={i}>
          {' '}
          <a href={item.href}>{item.text}</a> &raquo;
        </React.Fragment>
      ))}
    </BreadcrumbContainer>
  )
}

const BreadcrumbContainer = styled.div`
  color: #8b8685;
  a {
    color: #8b8685;
    text-decoration: none;
  }
`

export const Heading = styled.h1`
  color: #d7fc70;
  margin: ${beat(1.5)} 0 0;
  font-size: ${fontSize(B4)};
  line-height: ${beat(1.5)};
  ${BreadcrumbContainer} + & {
    margin-top: 0;
  }
`

export const P = styled.p`
  margin: ${beat(1)} 0 0;
  line-height: ${beat(1)};
`

export const Name = styled.strong`
  color: #bef;
`

export const Intro = styled.p`
  margin: ${beat(1)} 0;
  font-size: ${fontSize(E4)};
  line-height: ${beat(1.25)};
`

export const Perspective = styled.div`
  min-height: 100vh;
  perspective: 100vw;
  perspective-origin: 50vw 50vh;
  overflow: hidden;
`

const getAnimation = _.memoize(i => {
  const c = new Chance(i)
  const x0 = c.floating({ min: -20, max: 20 })
  const y0 = c.floating({ min: -20, max: 20 })
  const z0 = c.floating({ min: 50, max: 90 })
  const xr = c.floating({ min: -20, max: 20 })
  const yr = c.floating({ min: -20, max: 20 })
  const zr = c.floating({ min: -20, max: 20 })
  const keyframe = i => {
    const v = Math.pow(1 - i / 8, 3)
    const o = Math.pow(i / 8, 0.5)
    const f = x =>
      x
        .toFixed(3)
        .replace(/(\..*?)0*$/, '$1')
        .replace(/\.$/, '')
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
    ${Array(9)
    .fill()
    .map((_, i) => i)
    .map(keyframe)
    .join('')}
  `
})

export const AnimatedCharacter = styled(({ className, children }) => (
  <span className={className}>{children}</span>
))`
  display: inline-block;
  position: relative;
  animation: 1s ${props => getAnimation(props.seed)} linear;
  animation-fill-mode: backwards;
  animation-delay: ${props => props.delay}s;
`

export const Footer = styled(({ className }) => {
  return (
    <footer className={className}>
      <Navigation small homeLink animated={false} />
    </footer>
  )
})`
  margin: ${beat(3)} 0 ${beat(1)};
`

const activeSectionContext = React.createContext()

export function Navigation ({ animated, homeLink, small }) {
  const item = (section, index, href, text) => (
    <activeSectionContext.Consumer>
      {activeSection => (
        <LinkItem
          animated={animated}
          small={small}
          index={index}
          active={activeSection === section}
          href={href}
        >
          {text}
        </LinkItem>
      )}
    </activeSectionContext.Consumer>
  )
  return (
    <Prefetcher>
      {prefetch => (
        <Links>
          {homeLink &&
            item('home', 0, prefetch('/'), <SiteName>dt.in.th</SiteName>)}
          {item('talks', 1, prefetch('/talks/'), 'Talks')}
          {item('music', 2, prefetch('/music/'), 'Music')}
          {item('github', 3, 'https://github.com/dtinth', 'GitHub')}
          {item('twitter', 4, 'https://twitter.com/dtinth', 'Twitter')}
          {item('medium', 5, 'https://medium.com/@dtinth', 'Medium')}
          {item('blog', 6, 'https://me.dt.in.th', 'Blog')}
        </Links>
      )}
    </Prefetcher>
  )
}

export function ActiveSectionProvider ({ children, activeSection }) {
  return (
    <activeSectionContext.Provider value={activeSection}>
      {children}
    </activeSectionContext.Provider>
  )
}

const SiteName = styled.strong`
  color: #8b8685;
`

const Links = styled.ul`
  display: flex;
  padding: 0 16px;
  flex-wrap: wrap;
  list-style: none;
  justify-content: center;
`

function LinkItem ({ animated, active, small, index, children, href }) {
  const wrapWithAnimation = x =>
    animated ? (
      <AnimatedCharacter delay={index * 0.07 + 0.3} seed={index + 99}>
        {x}
      </AnimatedCharacter>
    ) : (
      x
    )
  return (
    <LinkListItem small={small} active={active}>
      {wrapWithAnimation(<a href={href}>{children}</a>)}
    </LinkListItem>
  )
}

const LinkListItem = styled.li`
  margin: ${props =>
    props.small ? `${beat(0.25)} ${beat(0.5)}` : `${beat(0.5)} ${beat(0.67)}`};
  font-weight: ${props => (props.active ? '700' : '400')};
  font-size: ${props => fontSize(props.small ? C4 : E4)};
  a {
    color: #ffb;
    text-decoration: none;
  }
`

export const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 8px;
  max-width: 720px;
  line-height: ${beat(1)};
`

export const Main = styled.div`
  margin: ${beat(3)} auto ${beat(2)};
`

export function YouTube ({ id }) {
  return (
    <EmbedContainer ratio={720 / 405}>
      <iframe
        width='720'
        height='405'
        src={'https://www.youtube.com/embed/' + id + '?rel=0'}
        frameBorder='0'
        allowFullScreen
      />
    </EmbedContainer>
  )
}

export function SoundCloud ({ id }) {
  return (
    <Wrapper>
      <iframe
        width='100%'
        height='300'
        scrolling='no'
        frameBorder='no'
        allow='autoplay'
        src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${id}&color=%238b8685&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
      />
    </Wrapper>
  )
}

export function SlideShare ({ id }) {
  return (
    <EmbedContainer ratio={720 / 587}>
      <iframe
        width='720'
        height='587'
        className='youtube'
        src={
          'https://www.slideshare.net/slideshow/embed_code/key/' + id + '?rel=0'
        }
        frameBorder='0'
        allowFullScreen
      />
    </EmbedContainer>
  )
}

const EmbedContainer = styled.span`
  display: block;
  margin: 0 auto;
  max-width: 720px;
  background: #090807;
  iframe {
    display: block;
    max-width: 100vw;
    max-height: ${props => 100 / props.ratio}vw;
  }
`

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(0px); }
  to { opacity: 1; transform: translateY(0px); }
`

export const FadeIn = styled.div`
  animation: 1s ${fadeIn} ease-out;
  animation-delay: 0.7s;
  animation-fill-mode: backwards;
`

export const SiteTitle = styled.h1`
  color: #8b8685;
  text-align: center;
  margin: 0 0 ${beat(1)};
  font-size: 64px;
  font-family: Arimo SiteTitle, Helvetica, sans-serif;
  @media (min-width: 360px) {
    font-size: 96px;
  }
  @media (min-width: 480px) {
    font-size: 128px;
  }
  @media (min-width: 720px) {
    font-size: 192px;
  }
`

export const SiteTitleContainer = styled.div`
  padding-top: 20vh;
`

export const PreviousNext = styled.ul`
  padding: 0;
  margin: ${beat(2)} 0 0;
  list-style: none;
  display: flex;
`
PreviousNext.Item = styled.li`
  text-align: ${props => (props.older ? 'left' : 'right')};
  margin-left: ${props => (props.newer ? 'auto' : '0')};
  width: 32%;
  @media (max-width: 719px) {
    width: 48%;
  }
`
PreviousNext.Link = styled.a`
  display: block;
  text-decoration: none;
  line-height: ${beat(1)};
`
PreviousNext.Title = styled.span`
  display: block;
  color: #8b8685;
  font-size: ${fontSize(G3)};
  line-height: ${beat(0.75)};
`
