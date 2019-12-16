import CMS from 'netlify-cms-app'
import React from 'react'
import { StuffInfo } from '../stuff/StuffInfoPage'

CMS.registerPreviewTemplate('stuff', function StuffPreview({
  entry,
  widgetFor,
}) {
  return (
    <StuffInfo title={entry.getIn(['data', 'title'])}>
      {widgetFor('body')}
    </StuffInfo>
  )
})
