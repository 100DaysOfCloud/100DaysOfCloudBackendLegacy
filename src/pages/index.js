import React from "react"
import SEO from "../components/seo"
import Layout from "../containers/layout/layout"
import Header from "../containers/layout/header"
import Footer from "../containers/layout/footer"
import MainArea from "../containers/home/main-area"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <div className="main-content">
      <MainArea />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
