import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Image from "../../../components/image"
import { AboutBannerWrap } from "./about-banner-area.stc"

const AboutBannerArea = () => {
  const aboutBannerData = useStaticQuery(graphql`
    query AboutBannerQuery {
      aboutJson(id: { eq: "about-page-banner" }) {
        banner {
          childImageSharp {
            fluid(
              maxWidth: 1260
              maxHeight: 550
              quality: 100
              srcSetBreakpoints: 6
            ) {
              ...GatsbyImageSharpFluid_withWebp
              presentationWidth
              presentationHeight
            }
          }
        }
      }
    }
  `)
  const bannerImg = aboutBannerData.aboutJson.banner.childImageSharp.fluid
  return (
    <AboutBannerWrap>
      <Container>
        <Row>
          <Col lg={12}>
            <Image fluid={bannerImg} alt="about banner" />
          </Col>
        </Row>
      </Container>
    </AboutBannerWrap>
  )
}

export default AboutBannerArea
