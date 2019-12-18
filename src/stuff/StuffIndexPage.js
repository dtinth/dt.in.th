// @ts-check
import {
  ActiveSectionProvider,
  Footer,
  Main,
  Wrapper,
  PageMeta,
  Breadcrumb,
  Heading,
  P,
} from '../common'
import _ from 'lodash'
import styled from 'styled-components'
import React from 'react'
import { beat, fontSize, F4, Eb4 } from '../styles'
import { Link, graphql } from 'gatsby'

export const pageQuery = graphql`
  query AllStuff {
    allMarkdownRemark(
      filter: { fields: { sourceInstanceName: { eq: "stuff" } } }
    ) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            tags
            description
            created
            updated
            title
          }
        }
      }
    }
  }
`
export default props => {
  const stuffs = _.sortBy(
    props.data.allMarkdownRemark.edges,
    'node.frontmatter.updated',
  ).reverse()

  return (
    <ActiveSectionProvider activeSection="stuff">
      <PageMeta title={'Stuff'} />
      <Main>
        <Wrapper>
          <Breadcrumb items={[]} />
          <Heading>Stuff</Heading>
        </Wrapper>
        <Wrapper>
          <P>Note: This page is an unorganized work in progress…</P>
          <StuffList>
            {stuffs.map(({ node: stuff }) => (
              <li key={stuff.id}>
                <Link to={stuff.fields.slug}>
                  <h2>{stuff.frontmatter.title}</h2>
                  <p>{stuff.frontmatter.description}</p>
                </Link>
              </li>
            ))}
          </StuffList>
          <Footer />
        </Wrapper>
      </Main>
    </ActiveSectionProvider>
  )
}

const StuffList = styled.ul`
  margin: ${beat(1)} -8px 0;
  padding: 0;
  list-style: none;
  border-bottom: 1px solid #555453;

  > li > a {
    display: block;
    text-decoration: none;
    border-top: 1px solid #555453;
    padding: ${beat(0.4)} ${beat(0.5)} ${beat(0.5)};
    &:hover {
      background: #454443;
    }
    h2 {
      font-size: 1em;
      margin: 0;
    }
    p {
      font-size: ${fontSize(Eb4)};
      margin: 0;
      color: #e9e8e7;
      line-height: ${beat(0.8)};
    }
  }
`
