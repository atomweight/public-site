import React from 'react'
import { Link } from 'gatsby'

import { Abbr, ExternalLinkButton } from '../../components/styled'
import SuccessStoriesLayout from './layout'

const SoftwareDevelopmentSuccessStoriesPage = props => (
  <SuccessStoriesLayout>
    <Link to="/success-stories">&larr; Back</Link>
    <h2 className="alt-h2 mb-5">Software Development</h2>
    <div className="d-flex flex-column">
      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Totem</h3>
        <p>
          Totem&trade; is
          a <Abbr title="Governance, Risk Management, and Compliance">GRC</Abbr> tool
          meant to manage and track compliance to cybersecurity requirements.
          Atomweight designed and built the product as a
          web-based <Abbr title="Software as a Service">SaaS</Abbr>,
          allowing for new customers to be on-boarded quickly. In addition to
          building the software, continuous delivery systems were established
          to quickly iterate on new features.
        </p>

        <ExternalLinkButton to="https://www.haightbey.com/totem/">
          More information
        </ExternalLinkButton>
      </div>
    </div>
  </SuccessStoriesLayout>
)

export default SoftwareDevelopmentSuccessStoriesPage
