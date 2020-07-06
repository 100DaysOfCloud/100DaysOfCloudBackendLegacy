import React from "react"
import { Container, Row, Col } from "reactstrap"
import LogoImg from "../../../assets/img/logo.png"
import { FooterWrap, FooterBottom, FooterWidget } from "./footer.stc"

const Footer = props => {
  const {
    widgetStyle: { logoWidget }
  } = props
  return (
    <FooterWrap>
      <Container>
        <FooterBottom>
          <Row className="align-items-end">
            <Col md={3} xl={3}>
              <FooterWidget {...logoWidget}>
                <img src={LogoImg} alt="Footer Logo" />
              </FooterWidget>
            </Col>
            <Col md={{ size: 4, offset: 1 }} lg={{ size: 4, offset: 1 }}>
              <FooterWidget>
              </FooterWidget>
            </Col>
          </Row>
        </FooterBottom>
      </Container>
    </FooterWrap>
  )
}

Footer.defaultProps = {
  footerMenuOne: {
    color: "#000000",
    pb: "14px",
    textTransform: "uppercase",
    fontWeight: 500,
  },
  widgetStyle: {
    logoWidget: {
      mb: ["33px", null, null, 0],
    },
    menuOneWidget: {
      mb: ["29px", null, null, 0],
    },
    menuTwoWidget: {
      mb: ["35px", null, null, 0],
    },
  },
  footerMenuTwo: {
    color: "#000000",
    pb: "14px",
    fontWeight: 400,
  },
  copyright: {
    borderTopWidth: "1px",
    borderTopStyle: "solid",
    borderTopColor: "borderColor",
    pt: "25px",
  },
}

export default Footer
