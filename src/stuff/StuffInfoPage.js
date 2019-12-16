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
  const breadcrumb = [{ text: 'Stuff', href: '/stuff/' }]
  const { markdownRemark: stuff } = props.data

  return (
    <ActiveSectionProvider activeSection="stuff">
      <PageMeta title={stuff.frontmatter.title} />
      <Main>
        <Wrapper>
          <Breadcrumb items={breadcrumb} />
          <Heading>{stuff.frontmatter.title}</Heading>
        </Wrapper>
        <Wrapper>
          <MarkdownContent html={stuff.html} />
        </Wrapper>
        <Wrapper>
          <Footer />
        </Wrapper>
      </Main>
    </ActiveSectionProvider>
  )
}
