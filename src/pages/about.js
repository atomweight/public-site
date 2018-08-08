import React from 'react'
import { graphql } from 'gatsby'
// import 'primer-core/index.scss'
import Octicon, {MarkGithub} from '@github/octicons-react'

import { Layout, MainContent } from '../components/layout'
import Masthead from '../components/masthead'

const AboutPage = ({ data }) => (
  <Layout>
    <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
      <Masthead
        imageSizes={data.masthead.childImageSharp.sizes}
        heading="About Us"
      >
        <p className="alt-lead">
          We&rsquo;re a lot faster at work than we were coming up with this tagline.
        </p>
      </Masthead>
      <MainContent className="flex-row flex-lg-column mt-4 mt-lg-6 pb-6 mx-auto px-3">
        <h1 className="alt-h1">Adam Stauffer</h1>
        <p className="alt-lead">Co-founder</p>
        <p className="mb-2">
          With a background in computer science, Adam is a passionate software
          developer looking to solve business problems. Adam has been working in
          the cybersecurity industry since 2010 in both federal and commercial
          environments. Adam has been using his skills as a software developer
          to automate cybersecurity work, specifically in the areas of data
          parsing, scraping, and analysis. In addition to his roles in
          cybersecurity, Adam has served as a DevOps engineer &mdash; building
          engineering and business processes for startups.
        </p>

        <p className="mb-7">
          <Octicon icon={MarkGithub} size='small' verticalAlign='middle' />
          &nbsp;
          <a href="https://github.com/adamstauffer">GitHub</a>
        </p>

        <h1 className="alt-h1">David Gidwani</h1>
        <p className="alt-lead">Co-founder</p>
        <p className="mb-2">
          David is a pragmatic engineer who is eager to build impactful systems.
          David has operated in many engineering roles throughout his career,
          including cybersecurity engineer, DevOps engineer, cloud platform
          engineer, and software engineer. David holds a bachelor&rsquo;s degree
          in Cybersecurity from the University of Maryland University College.
          In his free time, David develops and contributes to many popular open
          source projects.
        </p>

        <p className="mb-7">
          <Octicon icon={MarkGithub} size='small' verticalAlign='middle' />
          &nbsp;
          <a href="https://github.com/darvid">GitHub</a>
        </p>
      </MainContent>
    </div>
  </Layout>
)

export default AboutPage

export const query = graphql`
  query {
    masthead: file(relativePath: { eq: "mh/tobias-van-schneider-100597-unsplash.jpg" }) {
      childImageSharp {
        sizes(maxWidth: 2480, quality: 90, toFormat: PNG) {
          ...GatsbyImageSharpSizes
        }
      }
    }
  }
`;
