import CMS from 'netlify-cms-app'
import React from 'react'
import { StuffInfo } from '../stuff/StuffInfoPage'
import PageWrapper from '../PageWrapper'

CMS.registerPreviewTemplate('stuff', function StuffPreview({
  entry,
  widgetFor,
}) {
  return (
    <PageWrapper>
      <StuffInfo title={entry.getIn(['data', 'title'])}>
        {widgetFor('body')}
      </StuffInfo>
    </PageWrapper>
  )
})
