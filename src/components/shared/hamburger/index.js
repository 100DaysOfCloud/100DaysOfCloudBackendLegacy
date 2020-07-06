import React from "react"
import PropTypes from "prop-types"
import { HamburgerWrap } from "./hamburger.stc"

const Hamburger = ({ onClick, ...props }) => {
  return (
    <HamburgerWrap type="button" aria-label="menu" onClick={onClick} {...props}>
      <span></span>
      <div style={{ display: "none" }}>Menu</div>
    </HamburgerWrap>
  )
}

Hamburger.propTypes = {
  onClick: PropTypes.func,
}

export default Hamburger
