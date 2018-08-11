import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import { Layout, MainContent } from '../../components/layout'
import Masthead from '../../components/masthead'

const BlogLayout = props => (
  <StaticQuery
    query={graphql`
      query {
        masthead: file(relativePath: { eq: "mh/artiom-vallat-771678-unsplash.jpg" }) {
          childImageSharp {
            sizes(maxWidth: 2480, quality: 90, toFormat: PNG, cropFocus: SOUTH) {
              ...GatsbyImageSharpSizes
            }
          }
        }
      }
    `}
    render={data => (
      <Layout>
        <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
          <Masthead
            imageSizes={data.masthead.childImageSharp.sizes}
            heading={props.mastheadTitle || 'Blog'}
          >
            <p className="alt-lead">
              {props.mastheadTagline || 'Documenting the struggles and '
               + 'adventures of engineering and operations.'}
            </p>
          </Masthead>
          <MainContent className="flex-row flex-lg-column mt-4 mt-lg-6 pb-6 mx-auto px-3">
            {props.children}
          </MainContent>
        </div>
      </Layout>
    )}
  />
)

export default BlogLayout
