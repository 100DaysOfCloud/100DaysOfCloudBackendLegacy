import React from 'react'
import {SocialLinkWrap} from './social-link.stc';

export const SocialLink = ({path, children, ...props}) => {
    return <SocialLinkWrap {...props} href={path} target="_blank" rel="noopener noreferrer">{children}</SocialLinkWrap>
}



