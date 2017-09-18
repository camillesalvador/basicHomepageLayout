import React from 'react'
import Layout from '../components/PageLayout'

import stylesheet from 'styles/index.scss'
// or, if you work with plain css
// import stylesheet from 'styles/index.css'

export default () =>
  <Layout>
    <main>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <input type="email" placeholder="Subscribe to our newsletter!" />
    </main>
  </Layout>
