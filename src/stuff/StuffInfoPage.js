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

export const pageQuery = graphql`
  query StuffByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        description
        tags
      }
    }
  }
`
export default props => {
  const { markdownRemark: stuff } = props.data

  return (
    <ActiveSectionProvider activeSection="stuff">
      <PageMeta title={stuff.frontmatter.title} />
      <StuffInfo title={stuff.frontmatter.title}>
        <MarkdownContent>
          <div dangerouslySetInnerHTML={{ __html: stuff.html }} />
        </MarkdownContent>
      </StuffInfo>
    </ActiveSectionProvider>
  )
}

export function StuffInfo({ title, children }) {
  const breadcrumb = [{ text: 'Stuff', href: '/stuff/' }]
  return (
    <Main>
      <Wrapper>
        <Breadcrumb items={breadcrumb} />
        <Heading>{title}</Heading>
      </Wrapper>
      <Wrapper>{children}</Wrapper>
      <Wrapper>
        <Footer />
      </Wrapper>
    </Main>
  )
}
