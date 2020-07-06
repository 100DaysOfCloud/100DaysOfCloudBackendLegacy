import React from "react"
import PropTypes from "prop-types"
import { LabelWrap } from "./label.stc"

export const Label = ({ children, ...restProps }) => {
  return <LabelWrap {...restProps}>{children}</LabelWrap>
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
}

Label.defaultProps = {
  color: "textColor",
  fontSize: "16px",
  fontWeight: 500,
  mb: 0,
}
