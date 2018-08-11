import React from 'react'
import { graphql } from 'gatsby'
import Octicon, {MarkGithub} from '@github/octicons-react'

import { Layout, MainContent } from '../components/layout'
import Masthead from '../components/masthead'

export default ({ data }) => (
  <Layout>
    <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
      <Masthead
        imageSizes={data.masthead.childImageSharp.sizes}
        heading="Contact Us"
      >
      </Masthead>
      <MainContent className="flex-row flex-lg-column mt-4 mt-lg-6 pb-6 mx-auto px-3">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <input name="bot-field" />
          </p>
          <dl className="form-group">
            <dt><label htmlFor="name">Your Name</label></dt>
            <dd>
              <input
                className="form-control"
                type="text"
                name="name"
                id="name"
                required
              />
            </dd>
          </dl>
          <dl className="form-group">
            <dt><label htmlFor="companyName">Your Company Name</label></dt>
            <dd>
              <input
                className="form-control"
                type="text"
                name="companyName"
                id="companyName"
                required
              />
            </dd>
          </dl>
          <dl className="form-group">
            <dt><label htmlFor="email">Your Email</label></dt>
            <dd>
              <input
                className="form-control"
                type="text"
                name="email"
                id="email"
                required
              />
            </dd>
          </dl>
          <dl className="form-group">
            <dt><label htmlFor="email">Your Message</label></dt>
            <dd>
              <textarea
                className="form-control"
                name="message"
                required
              ></textarea>
            </dd>
          </dl>

          <button className="btn" type="submit">Submit</button>
        </form>
      </MainContent>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    masthead: file(relativePath: { eq: "mh/paul-csogi-18594-unsplash.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2480, quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
