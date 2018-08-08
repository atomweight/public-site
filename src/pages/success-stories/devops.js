import React from 'react'
import { Link } from 'gatsby'

import { Abbr } from '../../components/styled'
import SuccessStoriesLayout from './layout'

const DevOpsSuccessStoriesPage = props => (
  <SuccessStoriesLayout>
    <Link to="/success-stories">&larr; Back</Link>
    <h2 className="alt-h2 mb-5">DevOps</h2>
    <div className="d-flex flex-column">
      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Continuous Integration</h3>
        <p>
          Atomweight has deployed
          multiple <Abbr title="Continuous Integration/Continuous Deployment">
            CI/CD</Abbr> solutions in a variety of environments. Continuous
            integration has many benefits: automatic validation of
            functionality, faster delivery of features, and ultimately higher
            quality software. Specifically, Atomweight has deployed CI/CD
            solutions using technologies such as GitLab, Jenkins, TravisCI, and
            TeamCity. With these solutions, Atomweight has designed and
            implemented automated unit testing, web compatibility testing,
            security testing, and integrations with configuration management
            systems.
        </p>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Logging and Monitoring</h3>
        <p>
          Processing and storing logs from applications and infrastructure can
          be a complex and expensive initiative. Atomweight has extensive
          experience deploying the free and open
          source <Abbr title="Elasticsearch, Logstash, and Kibana">
          ELK</Abbr> stack to provide full-text log search and monitoring
          capabilities at an affordable price. Most notably, we have deployed
          this solution in a <Abbr title="Managed Security Service Provider">
          MSSP</Abbr> environment which is processing logs at petabyte scale.
          This solution has saved our clients the money and risk of using
          third-party log management services.
        </p>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>High Availability Infrastructure</h3>
        <p>
          It is essential that mission critical systems are able to recover
          from faults and continue to service their users. Atomweight has
          deployed web services and data processing pipelines with the concepts
          of fault tolerance and high availability in mind. This includes
          automatically scaling web infrastructure based on inbound requests,
          and replicating data stores across cloud regions to survive service
          provider downtime. In February 2017, our solution was put to the test
          when <Abbr title="Amazon Web Services">AWS</Abbr> suffered a
          service-level outage of their file storage system in a single region.
          Our solution was able to swap to the replicated data in another
          region to continue serving customers with minimal interruption.
        </p>
      </div>
    </div>
  </SuccessStoriesLayout>
)

export default DevOpsSuccessStoriesPage
