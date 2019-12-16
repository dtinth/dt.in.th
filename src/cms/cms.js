import CMS from 'netlify-cms-app'

CMS.registerPreviewTemplate('stuff', function StuffPreview({
  entry,
  widgetFor,
}) {
  return <div>{widgetFor('body')}</div>
})
