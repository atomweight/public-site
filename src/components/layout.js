import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import 'primer/index.scss'

import Header from './header'
import './layout.scss'

const MainContent = props => (
  <main className={`main-content responsive-full-width ${props.className}`}>
    {props.children}
  </main>
)

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: 'Atomweight is a Baltimore-based software engineering and devops consultancy.',
            },
            {
              name: 'keywords',
              content: 'devops, cybersecurity, software engineering, software development, consulting, cloud, aws',
            },
          ]}
        />
        <Header siteTitle={data.site.siteMetadata.title} />
        <div className="d-flex flex-wrap flex-lg-nowrap">
          {children}
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export {
  Layout,
  MainContent,
}
