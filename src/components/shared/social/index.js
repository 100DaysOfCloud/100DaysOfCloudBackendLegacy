import React from "react"
import PropTypes from "prop-types"
import { SocialWrap } from "./social.stc"
import { SocialLink } from "./social-link"

const Social = ({ children, ...props }) => {
  return <SocialWrap {...props}>{children}</SocialWrap>
}

Social.propTypes = {
  fontSize: PropTypes.string,
  fontWeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  color: PropTypes.string,
  bgcolor: PropTypes.string,
  btnstyle: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
    "transparent",
  ]),
  size: PropTypes.oneOf(["large", "medium", "small", "thin"]),
  shape: PropTypes.oneOf(["square", "rounded", "oval"]),
  varient: PropTypes.oneOf(["outlined", "texted", "underlined"]),
  borderwidth: PropTypes.string,
  bordercolor: PropTypes.string,
  space: PropTypes.number,
}

Social.defaultProps = {
  icon: {},
  hover: {},
}

export { SocialLink }

export default Social
