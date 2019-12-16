// @ts-check
import React from 'react'

import {
  ActiveSectionProvider,
  Footer,
  Main,
  Wrapper,
  Breadcrumb,
  PageMeta,
  MarkdownContent,
  Heading,
} from '../common'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import { fontSize, F4, beat } from '../styles'

export const pageQuery = graphql`
  query StuffByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
        created
        updated
      }
    }
  }
`
export default props => {
  const { markdownRemark: stuff } = props.data

  return (
    <ActiveSectionProvider activeSection="stuff">
      <PageMeta title={stuff.frontmatter.title} />
      <StuffInfo
        title={stuff.frontmatter.title}
        created={stuff.frontmatter.created}
        updated={stuff.frontmatter.updated}
        tags={stuff.frontmatter.tags}
      >
        <MarkdownContent>
          <div dangerouslySetInnerHTML={{ __html: stuff.html }} />
        </MarkdownContent>
      </StuffInfo>
    </ActiveSectionProvider>
  )
}

export function StuffInfo({ title, created, updated, tags, children }) {
  const breadcrumb = [{ text: 'Stuff', href: '/stuff/' }]
  return (
    <Main>
      <Wrapper>
        <Breadcrumb items={breadcrumb} />
        <Heading>{title}</Heading>
        <StuffMeta>
          <MetaDate>
            <Date date={created} />
          </MetaDate>
          {tags.map(tag => (
            <Tag>{tag}</Tag>
          ))}
        </StuffMeta>
      </Wrapper>
      <Wrapper>{children}</Wrapper>
      <Wrapper>
        <Footer />
      </Wrapper>
    </Main>
  )
}

const StuffMeta = styled.div`
  color: #8b8685;
  font-size: ${fontSize(F4)};
  line-height: ${beat(1)};
`

const MetaDate = styled.span`
  display: inline-block;
  padding: 0 0.75ex;
  margin-right: 0.5ex;
  line-height: ${beat(0.75)};
  vertical-align: bottom;
  box-shadow: inset 0 0 0 1px #555453;
`

const Tag = styled.span`
  color: #9b9695;
  display: inline-block;
  padding: 0 0.75ex;
  margin-right: 0.5ex;
  line-height: ${beat(0.75)};
  vertical-align: bottom;
  background: #454443;
`

function Date({ date }) {
  const datePart = String(date).split('T')[0]
  return <span>{datePart}</span>
}
