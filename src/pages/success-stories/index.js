import React from 'react'

import { Abbr, LinkButton } from '../../components/styled'
import SuccessStoriesLayout from './layout'

const SuccessStoriesIndexPage = props => (
  <SuccessStoriesLayout>
    <div className="d-flex flex-column">
      <div className="p-5 mb-md-5 border bg-gray-light">
        <h2 className="alt-h2">Software Development</h2>
        <p className="alt-lead">
          Custom-tailored desktop, web, and mobile applications, ranging
          from lightweight tools to
          full-fledged <Abbr title="Software as a Service">SaaS</Abbr> offerings.
        </p>

        <LinkButton to="/success-stories/software-development">
          Learn more
        </LinkButton>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h2 className="alt-h2">DevOps</h2>
        <p className="alt-lead">
          Processes, tools, and training to modernize and accelerate engineering
          practices toward industry standards.
        </p>

        <LinkButton to="/success-stories/devops">
          Learn more
        </LinkButton>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h2 className="alt-h2">Cybersecurity</h2>
        <p className="alt-lead">
          Infrastructure monitoring solutions, hardened operating systems and
          software applications, and rigorous security assessments.
        </p>

        <LinkButton to="/success-stories/cybersecurity">
          Learn more
        </LinkButton>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h2 className="alt-h2">Cloud Optimization</h2>
        <p className="alt-lead">
          Scalable and fault-tolerant infrastructure, bare-metal to cloud
          migration, and architecture design to reduce costs, improve
          performance and operate securely.
        </p>

        <LinkButton to="/success-stories/cloud-optimization">
          Learn more
        </LinkButton>
      </div>
    </div>
  </SuccessStoriesLayout>
)

export default SuccessStoriesIndexPage
