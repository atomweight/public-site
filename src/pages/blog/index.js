import React from 'react'
import { Link, graphql } from 'gatsby'

import BlogLayout from './layout'

const BlogIndexPage = props => (
  <BlogLayout>
    {props.data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id}>
        <h3>
          {node.frontmatter.date} &mdash;
          {' '}<Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h3>
      </div>
    ))}
  </BlogLayout>
)

export default BlogIndexPage

// export const query = graphql`
//   query {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           fields {
//             slug
//           }
//           frontmatter {
//             author
//             title
//             tagline
//             date(formatString: "DD MMMM, YYYY")
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `
