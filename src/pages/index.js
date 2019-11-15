import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import Logo from "../components/logo"
import SEO from "../components/seo"
import "../styles/home.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="home">
      <div style={{ maxWidth: `340px`, marginBottom: `3.45rem` }}>
        <Logo />
      </div>
      <p style={{ textAlign: "justify", marginBottom: `3.45rem` }}>
        We believe positive social change is possible. We work on a range of international
        development programs from policy through design and implementation. Our expertise is in
        complex, multi-stakeholder projects across dispersed global geographies. Farstar is founded
        and run by serial entrepreneurs who believe in enterprise and innovation as drivers of
        change. We are fortunate to work with a world-wide network of experienced partners, driven
        collaborators and passionate clients.
      </p>
      {/* <Link to="/page-2/">Go to page 2</Link> */}
    </div>
  </Layout>
)

export default IndexPage
