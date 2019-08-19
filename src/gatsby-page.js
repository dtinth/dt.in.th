import * as layout from './layout'
import home from './home'
import music from './music'
import talks from './talks'

export const pages = Object.assign(
  {
    '/': home,
  },
  talks,
  music,
)

export default props => {
  return layout.render(pages[props.path])
}
