import React from 'react'
import { Link } from 'gatsby'

import { Abbr } from '../../components/styled'
import SuccessStoriesLayout from './layout'

const CloudOptimizationSuccessStoriesPage = props => (
  <SuccessStoriesLayout>
    <Link to="/success-stories">&larr; Back</Link>
    <h2 className="alt-h2 mb-5">Cloud Optimization</h2>
    <div className="d-flex flex-column">
      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Segmentation &amp; Architecture</h3>
        <p>
          An important aspect of protecting an organization's infrastructure is
          ensuring that cloud networks are architected properly. This includes
          segmenting development environments from production environments,
          creating <Abbr title="Demilitarized Zones">DMZs</Abbr> to protect
          public-facing assets, and crafting  <Abbr
            title="Network Access Control Lists">NACLs</Abbr> to prevent
          traversal of private networks. Atomweight has created properly
          architected networks from scratch, as well as re-archictected and
          segmented existing networks. This effort ensures that your
          infrastructure is protected from cybersecurity threats and is able
          to grow with your business.
        </p>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Cost Optimization</h3>
        <p>
          Most organizations do not realize they are spending too much on their
          cloud infrastructure. Cloud providers offer many ways to help you
          reduce your bill, however these solutions are often not well
          documented or communicated. For example, most cloud providers offer a
          method of reserving cloud capacity for a set period of time at a
          discounted rate. However, it is difficult to track when reserved
          capacity is expiring or becomes unused as infrastructure changes.
          Atomweight has developed multiple tools to detect unused or
          overprovisioned cloud resources. Using these tools and processes have
          enabled our clients to save up to 60% on their cloud computing bill.
        </p>
      </div>
    </div>
  </SuccessStoriesLayout>
)

export default CloudOptimizationSuccessStoriesPage
