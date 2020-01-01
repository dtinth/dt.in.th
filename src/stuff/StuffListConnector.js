import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

export default props => (
  <StaticQuery
    query={graphql`
      query StuffListConnectorQuery {
        allMarkdownRemark(
          filter: { fields: { sourceInstanceName: { eq: "stuff" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                id
                tags
                title
                parent
                description
                created
                updated
              }
            }
          }
        }
      }
    `}
    render={data =>
      props.children(data.allMarkdownRemark.edges.map(edge => edge.node))
    }
  />
)
