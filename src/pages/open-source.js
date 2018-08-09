import React from 'react'
import { graphql } from 'gatsby'
import 'primer-core/index.scss'

import { Layout, MainContent } from '../components/layout'
import Masthead from '../components/masthead'

const OpenSourcePage = ({ data }) => (
  <Layout>
    <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
      <Masthead
        imageSizes={data.masthead.childImageSharp.sizes}
        heading="Open Source Projects"
      >
        <p className="alt-lead">
          Sharing is caring.
        </p>
      </Masthead>
      <MainContent className="flex-row flex-lg-column mt-4 mt-lg-6 pb-6 mx-auto px-3">
        <p className="alt-lead">Coming soon</p>
      </MainContent>
    </div>
  </Layout>
)

export default OpenSourcePage

export const query = graphql`
  query {
    masthead: file(relativePath: { eq: "mh/matthew-smith-5935-unsplash.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2480, quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
