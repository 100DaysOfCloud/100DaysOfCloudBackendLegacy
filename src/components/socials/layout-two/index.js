import React from "react"
import { SocialLink } from "../../shared/social"

const SocialOne = ({ social }) => {
  const { linkedin, twitter } = social
  return (
    <>
      {linkedin && <SocialLink path={linkedin}>LinkedIn</SocialLink>}
      {twitter && <SocialLink path={twitter}>Twitter</SocialLink>}
    </>
  )
}

SocialOne.defaultProps = {
  mr: "15px",
  width: "auto",
  height: "34px",
  lineHeight: "26px",
  borderWidth: "2px",
  margin: "5px",
}

export default SocialOne
