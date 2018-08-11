import React from 'react'
import { Link, graphql } from 'gatsby'

import BlogLayout from '../pages/blog/layout'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <BlogLayout
      mastheadTitle={post.frontmatter.title}
      mastheadTagline={post.frontmatter.tagline}
    >
      <Link to="/blog">&larr; Back</Link>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </BlogLayout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         author
//         title
//         tagline
//         date(formatString: "DD MMMM, YYYY")
//       }
//     }
//   }
// `
