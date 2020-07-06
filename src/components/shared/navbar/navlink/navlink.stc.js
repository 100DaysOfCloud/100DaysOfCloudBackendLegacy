import styled, {css} from 'styled-components'
import {Link} from 'gatsby'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const NavLinkStyled = css `
    display: inline-block;
    color: #fff;
    font-size: 12px;
    font-weight: 500;
    line-height: 2;
    text-transform: uppercase;
`;
export const AnchorTag = styled.a `
    ${NavLinkStyled}
`;
 
export const NavLinkWrap = styled(Link) `
    ${NavLinkStyled}
`;  

export const SmoothScroll = styled(AnchorLink) `
    ${NavLinkStyled}
`; 