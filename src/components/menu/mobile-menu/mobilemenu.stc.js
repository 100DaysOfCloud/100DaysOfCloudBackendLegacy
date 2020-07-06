import styled from 'styled-components';
import {themeGet} from '@styled-system/theme-get'
import {NavbarWrap} from '../../shared/navbar/navbar.stc'
import {NavItemWrap} from '../../shared/navbar/navitem/navitem.stc'
import {NavLinkWrap, AnchorTag, SmoothScroll} from '../../shared/navbar/navlink/navlink.stc'

export const MobileMenuWrap = styled.nav `
    ${NavbarWrap}{
        flex-direction: column;
    } 
    ${NavItemWrap}{
        padding-left: 0;
        padding-right: 0;
        position: relative;
        border-bottom: 1px solid rgba(0,0,0,.5);
    }
    ${NavLinkWrap},
    ${AnchorTag},
    ${SmoothScroll}{
        display: block;
        color: ${themeGet("colors.headingColor")};
        padding: 18px 0;
        font-size: 16px;
        font-weight: 500;
        line-height: 1.5;
        transition: ${themeGet("transition")};
    }
`;