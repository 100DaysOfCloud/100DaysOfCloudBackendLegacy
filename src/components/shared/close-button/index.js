import React from "react"
import PropTypes from "prop-types"
import { FiXCircle } from "react-icons/fi"
import { CloseButtonWrap } from "./close-button.style"

const CloseButton = ({ onClick }) => {
  return (
    <CloseButtonWrap onClick={onClick}>
      <FiXCircle className="icon" />
      <div style={{ display: "none" }}>Close</div>
    </CloseButtonWrap>
  )
}

CloseButton.propTypes = {
  onClick: PropTypes.func,
}

export default CloseButton
