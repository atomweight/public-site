import React from 'react'
import { graphql } from 'gatsby'
import 'primer-core/index.scss'

import { Layout, MainContent } from '../components/layout'
import Masthead from '../components/masthead'

const WhyPage = ({ data }) => (
  <Layout>
    <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
      <Masthead
        imageSizes={data.masthead.childImageSharp.sizes}
        heading="Why Atomweight?"
      >
        <p className="alt-lead">
          Simple, practical solutions for organizations of any size.
        </p>
      </Masthead>
      <MainContent className="flex-row flex-lg-column mt-4 mt-lg-6 pb-6 mx-auto px-3">
        <h1 className="alt-h1">Low Cost</h1>
        <p>
          We pride ourselves in being affordable to our clients. Our services
          are available for competitive hourly rates, firm-fixed-price
          contracts, or anything in between. In many cases, we do not invoice
          until we have made a positive impact on your business.
        </p>

        <p className="mb-5">
          Our principles of low cost also apply to our solutions. We specialize
          in finding ways to make free and open source software solve your
          business problems. We aren&rsquo;t interested in taking your money
          and telling you to buy a commercial product. There are very rare cases
          that we recommend a commercial solution to meet our client&rsquo;s
          requirements &mdash; in these cases you can be sure that the solution
          is affordable and performant.
        </p>

        <h1 className="alt-h1">High Quality</h1>
        <p>
          We offer more than just consulting. We have the expertise to get
          involved in your engineering process without being too preachy or
          pushy. We work best when we can get our hands dirty, but we are also
          comfortable with designing, validating, and educating new ideas.
        </p>

        <p className="mb-5">
          Our solutions will speak for themselves. The most common compliment
          we receive is &ldquo;it just works&rdquo;. Consistency is a core value
          in our solutions &mdash; nothing is more frustrating than a solution
          that sometimes works. Our experience in environments where IT and
          security budgets are constrained and tolerance of risk is extremely
          low is our greatest asset. We&rsquo;ve seen it all, and can share our
          lessons learned with you.
        </p>

        <h1 className="alt-h1">Built-in Security</h1>
        <p className="mb-5">
          Because security solutions are something we offer, it is built into
          everything we do. For example, our software engineering solutions are
          properly developed toward the latest application security best
          practices. We have deep understanding of both federal and commercial
          security frameworks, including NIST 800-53, HIPAA, PCI, and ISO 27001.
          We work in environments where these requirements surround us, and we
          are comfortable meeting them.
        </p>

        <h1 className="alt-h1">Focus on Training</h1>
        <p>
          We involve our clients throughout our engineering process to ensure
          that knowledge is properly transferred. Our goal is to teach our
          clients how to maintain the solutions we provide. This includes clear
          and concise documentation, diagrams, and even training sessions.
        </p>
      </MainContent>
    </div>
  </Layout>
)

export default WhyPage

export const query = graphql`
  query {
    masthead: file(relativePath: { eq: "mh/tobias-van-schneider-88137-unsplash.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2480, quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
