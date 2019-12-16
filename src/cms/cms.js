import CMS from 'netlify-cms-app'
import { StuffInfo } from '../stuff/StuffInfoPage'
import PageWrapper from '../PageWrapper'
import React, { useState, useEffect } from 'react'
import { StyleSheetManager } from 'styled-components'

// https://github.com/netlify/netlify-cms/issues/1408#issuecomment-526851039
function StyleInjector({ children }) {
  const [iframeRef, setIframeRef] = useState(null)

  useEffect(() => {
    const iframe = document.getElementsByTagName('iframe')[0]
    const iframeHeadElem = iframe.contentDocument.head
    setIframeRef(iframeHeadElem)
  }, [])

  return (
    iframeRef && (
      <StyleSheetManager target={iframeRef}>{children}</StyleSheetManager>
    )
  )
}

export default function withStyledComponentsRendered(Comp) {
  return props => (
    <StyleInjector>
      <Comp {...props} />
    </StyleInjector>
  )
}

CMS.registerPreviewTemplate(
  'stuff',
  withStyledComponentsRendered(function StuffPreview({ entry, widgetFor }) {
    return (
      <PageWrapper>
        <StuffInfo title={entry.getIn(['data', 'title'])}>
          {widgetFor('body')}
        </StuffInfo>
      </PageWrapper>
    )
  }),
)
