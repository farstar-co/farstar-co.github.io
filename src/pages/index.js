import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ maxWidth: `150px`, marginBottom: `1.45rem` }}>
      <Logo />
    </div>
    <h1>(Social Change)++</h1>
    <p>
      We believe positive social change is possible. We work on a range of international development
      programs from policy through design and implementation. Our expertise is in complex,
      multi-stakeholder projects across dispersed global geographies. Farstar is founded and run by
      serial entrepreneurs who believe in enterprise and innovation as drivers of change. We are
      fortunate to work with a world-wide network of experienced partners, driven collaborators and
      passionate clients.
    </p>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
