import CMS from 'netlify-cms-app'
import React from 'react'

CMS.registerPreviewTemplate('stuff', function StuffPreview({
  entry,
  widgetFor,
}) {
  return <div>{widgetFor('body')}</div>
})
