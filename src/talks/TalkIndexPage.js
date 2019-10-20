// @ts-check
import {
  ActiveSectionProvider,
  Footer,
  Main,
  Wrapper,
  Breadcrumb,
  Heading,
  PageMeta,
} from '../common'
import styled from 'styled-components'
import React from 'react'
import { beat } from '../styles'
import { Link, graphql } from 'gatsby'

export const pageQuery = graphql`
  query TalkIndexQuery {
    allMdx(
      filter: { fields: { sourceInstanceName: { eq: "talks" } } }
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
            date
          }
        }
      }
    }
  }
`

export default props => {
  const { data } = props
  return (
    <ActiveSectionProvider activeSection="talks">
      <PageMeta title="Talks" />
      <Main>
        <Wrapper>
          <Breadcrumb />
          <Heading>Talks</Heading>
          <TalkLinks>
            {data.allMdx.edges.map(({ node }, i) => (
              <li key={i}>
                {node.frontmatter.date}{' '}
                <Link to={`/talks/${node.fields.slug}/`}>
                  {node.frontmatter.title}
                </Link>
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
