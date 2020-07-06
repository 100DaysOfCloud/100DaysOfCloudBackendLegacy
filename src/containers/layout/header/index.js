import React, { Fragment } from "react"
import { Container } from "reactstrap"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "../../../components/logo"
import { MainMenu } from "../../../components/menu"
import {
  HeaderWrap,
  HeaderOuter,
  HeaderMain,
} from "./header.stc"

const Header = props => {

  const HeaderData = useStaticQuery(graphql`
    query HeaderDataQuery {
      allMenuJson {
        edges {
          node {
            title
            path
          }
        }
      }
    }
  `)

  const menu = HeaderData.allMenuJson.edges
  return (
    <Fragment>
      <HeaderWrap>
        <HeaderOuter>
          <Container>
            <HeaderMain>
              <Logo />
              <MainMenu menuData={menu} />
            </HeaderMain>
          </Container>
        </HeaderOuter>
      </HeaderWrap>
    </Fragment>
  )
}

export default Header
