// @ts-check
import React, { createContext, useContext } from 'react'

import {
  ActiveSectionProvider,
  Footer,
  Main,
  Wrapper,
  Breadcrumb,
  PageMeta,
  Heading,
} from '../common'
import { graphql, Link } from 'gatsby'
import styled from 'styled-components'
import { fontSize, F4, beat } from '../styles'
import {
  MarkdownContent,
  renderHtmlAst,
  InjectableComponentContext,
} from '../markdown'
import StuffListConnector from './StuffListConnector'
import _ from 'lodash'

export const CurrentPageIdContext = createContext('')

export const pageQuery = graphql`
  query StuffByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      htmlAst
      frontmatter {
        id
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
    <ActiveSectionProvider activeSection="pages">
      <PageMeta title={stuff.frontmatter.title} />
      <CurrentPageIdContext.Provider value={stuff.frontmatter.id}>
        <InjectableComponentContext.Provider value={injectableComponents}>
          <BreadcrumbDataConnector pageId={stuff.frontmatter.id}>
            {breadcrumbs => (
              <StuffInfo
                title={stuff.frontmatter.title}
                created={stuff.frontmatter.created}
                updated={stuff.frontmatter.updated}
                tags={stuff.frontmatter.tags}
                breadcrumbs={breadcrumbs}
              >
                <MarkdownContent intro>
                  {renderHtmlAst(stuff.htmlAst)}
                </MarkdownContent>
              </StuffInfo>
            )}
          </BreadcrumbDataConnector>
        </InjectableComponentContext.Provider>
      </CurrentPageIdContext.Provider>
    </ActiveSectionProvider>
  )
}

function BreadcrumbDataConnector(props) {
  return (
    <StuffListConnector>
      {stuffs => {
        const breadcrumbs = generateBreadcrumbs(stuffs, props.pageId)
        return props.children(breadcrumbs)
      }}
    </StuffListConnector>
  )
}

function generateBreadcrumbs(stuffs, pageId) {
  const stuffMap = new Map(stuffs.map(stuff => [stuff.frontmatter.id, stuff]))
  const paths = []
  const visit = (currentPageId, currentBreadcrumb) => {
    const page = stuffMap.get(currentPageId)
    if (!page) {
      return
    }
    const parentIds = getParentIds(page)
    if (!parentIds.length) {
      paths.push(currentBreadcrumb)
      return
    }
    for (const parentId of parentIds) {
      const parentPage = stuffMap.get(parentId)
      if (parentPage) {
        visit(parentId, [
          { href: parentPage.fields.slug, text: parentPage.frontmatter.title },
          ...currentBreadcrumb,
        ])
      }
    }
  }
  visit(pageId, [])
  if (paths.length === 0) paths.push([])
  return paths
}

function getParentIds(stuff) {
  return stuff.frontmatter.parent
    ? Array.isArray(stuff.frontmatter.parent)
      ? stuff.frontmatter.parent
      : [stuff.frontmatter.parent]
    : []
}

const injectableComponents = {
  'child-page-list': function ChildPageList(props) {
    const currentPageId = useContext(CurrentPageIdContext)

    return (
      <StuffListConnector>
        {stuffs => {
          return (
            <ul>
              {_.sortBy(stuffs, 'frontmatter.updated')
                .reverse()
                .filter(stuff => stuff.frontmatter.parent === currentPageId)
                .map(stuff => (
                  <li key={stuff.id} style={{ marginTop: beat(1) }}>
                    <strong>
                      <Link
                        to={stuff.fields.slug}
                        style={{ textDecoration: 'none' }}
                      >
                        {stuff.frontmatter.title}
                      </Link>
                    </strong>{' '}
                    <StuffMeta style={{ display: 'inline-block' }}>
                      <MetaDate style={{ verticalAlign: 'baseline' }}>
                        <DateDisplay date={stuff.frontmatter.created} />
                      </MetaDate>
                    </StuffMeta>
                    <br />
                    {stuff.frontmatter.description}
                  </li>
                ))}
            </ul>
          )
        }}
      </StuffListConnector>
    )
  },
}

export function StuffInfo({
  title,
  created,
  updated,
  tags,
  children,
  breadcrumbs = [[]],
}) {
  return (
    <Main>
      <Wrapper>
        {breadcrumbs.map((b, index) => (
          <Breadcrumb key={index} items={b} />
        ))}
        <Heading>{title}</Heading>
        <StuffMeta>
          <MetaDate>
            <DateDisplay date={created} />
          </MetaDate>
          {(tags || []).map(tag => (
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
  margin-right: 5px;
  line-height: ${beat(0.75)};
  vertical-align: bottom;
  box-shadow: inset 0 0 0 1px #555453;
`

const Tag = styled.span`
  color: #9b9695;
  display: inline-block;
  padding: 0 0.75ex;
  margin-right: 5px;
  line-height: ${beat(0.75)};
  vertical-align: bottom;
  background: #454443;
`

function DateDisplay({ date }) {
  const datePart = String(new Date(date).toJSON()).split('T')[0]
  return <span>{datePart}</span>
}
