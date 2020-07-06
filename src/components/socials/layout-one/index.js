import React from 'react'
import { FiFacebook, FiInstagram, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";
import Social, {SocialLink} from '../../shared/social'

const SocialOne = ({social, ...restProps}) => {
    const {facebook, instagram, linkedin, twitter, youtube} = social;
    return (
        <Social {...restProps}>
            {facebook && (
                <SocialLink path={facebook}>
                    <FiFacebook/>
                </SocialLink>
            )}
            {instagram && (
                <SocialLink path={instagram}>
                    <FiInstagram/>
                </SocialLink>
            )}
            {linkedin && (
                <SocialLink path={linkedin}>
                    <FiLinkedin/>
                </SocialLink>
            )}
            {twitter && (
                <SocialLink path={twitter}>
                    <FiTwitter/>
                </SocialLink>
            )}
            {youtube && (
                <SocialLink path={youtube}>
                    <FiYoutube/>
                </SocialLink>
            )}
        </Social>
    )
}

SocialOne.defaultProps = {
    pr: '27px'
}

export default SocialOne
