import React from "react"
import PropTypes from "prop-types"
import Anchor from "../shared/anchor"
import LogoImg from "../../assets/img/logo.png"
import { LogoWrap } from "./logo.stc"

const Logo = props => {
  return (
    <LogoWrap {...props}>
      <Anchor path="/">
        <img src={LogoImg} alt="100 Days of Cloud Logo" />
      </Anchor>
    </LogoWrap>
  )
}

Logo.propTypes = {
  transparentBG: PropTypes.bool,
}

export default Logo
