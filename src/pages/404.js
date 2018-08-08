import React from 'react'
import { Layout, MainContent } from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div className="md-order-1 d-flex flex-lg-column flex-auto flex-wrap">
      <MainContent className="flex-row flex-lg-column mt-4 mt-lg-6 pb-6 mx-auto px-3">
        <h1 class="alt-h1">Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </MainContent>
    </div>
  </Layout>
)

export default NotFoundPage
