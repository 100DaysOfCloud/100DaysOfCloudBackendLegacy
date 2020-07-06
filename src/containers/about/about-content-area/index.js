import React from "react"
import { Container, Row, Col } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Heading from "../../../components/shared/heading"
import Text from "../../../components/shared/text"
import {
  AboutContentWrap,
  AboutContentTop,
  AboutContentBottom,
} from "./about-content-area.stc"

const AboutContentArea = props => {
  const aboutData = useStaticQuery(graphql`
    query AboutContentQuery {
      aboutJson(id: { eq: "about-page-content" }) {
        top_content {
          heading
          content {
            text1
            text2
          }
        }
        bottom_content {
          heading
          content {
            text1
          }
        }
      }
    }
  `)
  const { top_content, bottom_content } = aboutData.aboutJson
  const { topHeadingCSS, textCSS, bottomHeadingCSS } = props
  return (
    <AboutContentWrap>
      <Container>
        <Row className="justify-content-center">
          <Col lg={10} xl={8}>
            {top_content && (
              <AboutContentTop>
                {top_content.heading && (
                  <Heading {...topHeadingCSS}>{top_content.heading}</Heading>
                )}
                {top_content.content.text1 && (
                  <Text {...textCSS}>{top_content.content.text1}</Text>
                )}
                {top_content.content.text2 && (
                  <Text {...textCSS}>{top_content.content.text2}</Text>
                )}
              </AboutContentTop>
            )}
            {bottom_content && (
              <AboutContentBottom>
                {bottom_content.heading && (
                  <Heading {...bottomHeadingCSS}>
                    {bottom_content.heading}
                  </Heading>
                )}
                {bottom_content.content.text1 && (
                  <Text>{bottom_content.content.text1}</Text>
                )}
                <ul>
                  <li>
                    <a href="https://www.exampro.co/">ExamPro</a> is a site with
                    Cloud certified training courses.
                  </li>
                  <li>
                    <a href="https://cloudresumechallenge.dev/">
                      The Cloud Resume challenge{" "}
                    </a>
                    is a challenge started by{" "}
                    <a href="https://forrestbrazeal.com/">Forrest Brazel</a> to
                    help you get your first cloud job in cloud.
                  </li>
                  <li>
                    <a href="https://johanrin.com/">Johan Rin</a> has helped
                    start the #100DaysofCloud challenge and is writing helpful
                    blog posts on various cloud topics.
                  </li>
                  <li>
                    <a href="https://www.youtube.com/c/bartcastle">
                      Bart Castle
                    </a>{" "}
                    is an AWS Instructor at CBT Nuggets.
                  </li>
                  <li>
                    <a href="https://www.youtube.com/madebygps">
                      Gwyneth Peña S.'s Youtube
                    </a>{" "}
                    channel focuses on Microsoft Azure.
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCZGGwqjk5jfO4vN1SOCJ2ew">
                      Neal Davis
                    </a>{" "}
                    creates full AWS certification courses and practice exams.
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UCSLIvjWJwLRQze9Pn4cectQ">
                      Marcia Villalba
                    </a>{" "}
                    was an AWS Serverless Hero turned AWS Developer Advocate.
                    Check out her Youtube videos to learn more about AWS.
                  </li>
                </ul>
              </AboutContentBottom>
            )}
          </Col>
        </Row>
      </Container>
    </AboutContentWrap>
  )
}

AboutContentArea.defaultProps = {
  topHeadingCSS: {
    as: "h4",
    color: "secondaryColor",
    lineHeight: 1.375,
    mb: "17px",
  },
  textCSS: {
    mb: "26px",
  },
  listHeadingCSS: {
    as: "h5",
    mb: "14px",
  },
  bottomHeadingCSS: {
    as: "h5",
    mb: "24px",
  },
}

export default AboutContentArea
