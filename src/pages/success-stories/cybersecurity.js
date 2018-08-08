import React from 'react'
import { Link } from 'gatsby'

import { Abbr } from '../../components/styled'
import SuccessStoriesLayout from './layout'

const CybersecuritySuccessStoriesPage = props => (
  <SuccessStoriesLayout>
    <Link to="/success-stories">&larr; Back</Link>
    <h2 className="alt-h2 mb-5">Cybersecurity</h2>
    <div className="d-flex flex-column">
      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Intrusion Detection System Deployment</h3>
        <p>
          <Abbr title="Host-based Intrusion Detection System">
            HIDS</Abbr> and <Abbr title="Network Intrusion Detection System">
            NIDS</Abbr> are used to gain visibility into security events
          occurring within an organization's IT assets. Atomweight has deployed
          multiple IDS solutions across a variety of environments, including
          free and open source tools like OSSEC, Snort, Suricata, and Bro, as
          well as commercial solutions from McAfee and Symantec. We have tuned
          and configured these solutions to eliminate common false positives
          without negatively impacting network performance. These solutions
          have been successfully deployed in small restricted networks (less
          than 50 endpoints) as well as large cloud environments (greater than
          2,000 endpoints).
        </p>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Security Incident and Event Management</h3>
        <p>
          <Abbr title="Security Incident and Event Management">SIEM</Abbr> is
          the process of aggregating and analyzing security data occurring in
          real time across an organization. To perform this practice, a SIEM
          solution is required to store and process security events that are
          logged from intrusion detection systems, vulnerability scanners, and
          auditing systems. Atomweight has deployed free and open source SIEM
          tools such as SIEMonster and SecurityOnion, as well as commercial
          solutions from McAfee, Splunk, and AlienVault. These solutions have
          allowed our clients to be alerted to critical security incidents as
          well as capture metrics to aid in security forecasting.
        </p>
      </div>

      <div className="p-5 mb-md-5 border bg-gray-light">
        <h3>Cloud Hardening</h3>
        <p>
          As cloud services evolve, it can be difficult to ensure that they are
          configured securely. In many cases, cloud accounts are setup to
          quickly stand up infrastructure with security as an afterthought.
          Atomweight has hardened multiple cloud deployments, including locking
          down firewalls and access control to least privilege, configuring
          auditing, enabling encryption, and automating patch management. This
          work has primarily been done
          in <Abbr title="Amazon Web Services">AWS</Abbr> environments using
          security groups, IAM roles, CloudTrail, KMS, and EC2 Systems Manager.
          Our clients rest assured knowing that their cloud infrastructure is
          protected from basic attacks that target misconfiguration.
        </p>
      </div>
    </div>
  </SuccessStoriesLayout>
)

export default CybersecuritySuccessStoriesPage
