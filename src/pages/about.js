import React from "react"
import SEO from "../components/seo"
import Layout from "../containers/layout/layout"
import Header from "../containers/layout/header"
import Footer from "../containers/layout/footer"
import AboutTitleArea from "../containers/about/about-title-area"
import AboutBannerArea from "../containers/about/about-banner-area"
import AboutContentArea from "../containers/about/about-content-area"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Header />
    <div className="main-content">
      <AboutTitleArea />
      <AboutBannerArea />
      <AboutContentArea />
    </div>
    <Footer />
  </Layout>
)

export default AboutPage
