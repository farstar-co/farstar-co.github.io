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
    <h1>Large Title</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu odio magna. Fusce suscipit
      ligula sit amet elit auctor laoreet. Aenean vestibulum nisi in scelerisque porttitor. Nunc
      viverra congue metus ut placerat. Nulla nisl lacus, molestie in vehicula in, euismod sodales
      lorem. Curabitur facilisis tellus scelerisque odio iaculis, eget euismod dui feugiat. Ut
      imperdiet tempus ligula sit amet tempor. Phasellus pretium erat vel magna condimentum
      pellentesque.
    </p>
    {/* <Link to="/page-2/">Go to page 2</Link> */}
  </Layout>
)

export default IndexPage
