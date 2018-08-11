import React from 'react'
import { Link, graphql } from 'gatsby'
import Image from 'gatsby-image'
import 'primer-core/index.scss'

import { Layout, MainContent } from '../components/layout'
import Masthead from '../components/masthead'

const IndexPage = ({ data }) => (
  <Layout>
    <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
      <Masthead
        imageSizes={data.masthead.childImageSharp.sizes}
        heading="We are Atomweight"
      >
        <p className="alt-lead">
          The DevOps and software engineering consultancy that provides
          lightweight, affordable solutions.
        </p>
      </Masthead>
      <MainContent className="flex-row flex-lg-column mt-4 mt-lg-6 pb-6 mx-auto px-3">
        <h1 className="alt-h1">What we do</h1>
        <p className="alt-lead">
          Established in 2018, Atomweight prides itself in providing low cost,
          high quality solutions to our clients&rsquo; business problems.
        </p>

        <p>
          Whether you are looking to bring a new software product to market,
          automate your engineering processes, monitor your infrastructure for
          cybersecurity threats, or reduce cost of your cloud computing bill,
          we have the expertise to develop the solution.
        </p>

        <p>
          We have years of experience solving these problems in many different
          environments, including government, startups, and financial
          industries. We have worked under the constraints of limited budgets,
          compressed schedules, and low trust while still exceeding business
          objectives. Let our experience save you the time and money of
          learning or deploying new technologies from scratch.
        </p>

        <div className="container-lg clearfix mt-4 mt-lg-6 mb-2 mb-lg-4">
          <div className="col-lg-6 col-md-6 float-left border-top p-2">
            <h3 className="alt-h3">Software Engineering</h3>
            <p className="text-gray">
              Are you looking to build a new software product? Do you have an
              existing product that needs a face-lift? We are seasoned
              software developers - fluent in Python, Go, Java, and C++.
              Bring your own requirements, or we can help you define them.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 float-left border-top p-2">
            <h3 className="alt-h3">DevOps</h3>
            <p className="text-gray">
              Have you embraced the need for synergy between development and
              operations practices? Are you looking to perform continuous
              delivery, or simply deploy software faster? We have experience
              with the latest DevOps tools and practices, and a deep
              understanding of the strengths and weaknesses of each.
            </p>
          </div>
        </div>
        <Image fluid={data.content.childImageSharp.fluid} />
        <div className="d-table col-12 mt-2 mt-lg-4">
          <div className="col-lg-6 col-md-6 float-left border-top p-2">
            <h3 className="alt-h3">Cybersecurity</h3>
            <p className="text-gray">
              Are you looking to automate security testing into your
              engineering practices? Do you want to monitor your
              infrastructure for threats or configure systems to meet
              regulatory requirements? We have deployed open-source intrusion
              detection systems and SIEMs across many environments to increase
              visibility into cybersecurity threats. We also have extensive
              experience in hardening servers, network devices, and cloud
              infrastructure to best practices.
            </p>
          </div>
          <div className="col-lg-6 col-md-6 float-left border-top p-2">
            <h3 className="alt-h3">Cloud Optimization</h3>
            <p className="text-gray">
              Cloud service offerings are constantly evolving. Are you using
              the right services for the job? Are you looking to improve the
              reliability of your infrastructure by implementing high
              availability? Do you think you are spending too much on your
              cloud computing resources?
            </p>
            <p className="text-gray">
              We stay on top of the latest developments in cloud services. We
              have engineered fault-tolerant systems to avoid downtime in
              mission critical environments. We have also saved many clients up
              to 60% on their cloud computing bills by identifying unused or
              overprovisioned resources.
            </p>
          </div>
        </div>

        <h1 className="alt-h1">Reach out</h1>
        <p className="alt-lead">
          We&rsquo;d love to hear from you.
          {' '}<Link to="/contact">Drop us a line!</Link>
        </p>
      </MainContent>

    </div>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    content: file(relativePath: { eq: "thomas-kvistholt-191153-unsplash.jpg" }) {
      childImageSharp {
        fluid(maxHeight: 400, quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    masthead: file(relativePath: { eq: "mh/adrien-olichon-762119-unsplash.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2480, quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
