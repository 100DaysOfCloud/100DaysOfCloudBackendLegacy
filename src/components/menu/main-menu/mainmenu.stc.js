import styled, { css } from "styled-components"
import { themeGet } from "@styled-system/theme-get"
import { NavbarWrap } from "../../shared/navbar/navbar.stc"
import { NavItemWrap } from "../../shared/navbar/navitem/navitem.stc"
import {
  NavLinkWrap,
  AnchorTag,
  SmoothScroll,
} from "../../shared/navbar/navlink/navlink.stc"

export const MainMenuWrap = styled.nav`
    flex-grow: 1;
    display: flex;
    align-items: center;
    ${NavbarWrap}{
        ${NavItemWrap}{
            &:hover{
                & > ${NavLinkWrap},
                & > ${AnchorTag},
                & > ${SmoothScroll}{
                    &:after{
                        width: 72%;
                        left: 0;
                    }
                }
            }
        }
        & > ${NavItemWrap}{
            &:first-child{
                margin-left: 0;
                padding-left: 0;
            }
            &:last-child{
                margin-right: 0;
                padding-right: 0;
            }
            & > ${NavLinkWrap},
            & > ${AnchorTag},
            & > ${SmoothScroll}{
                position: relative;
                ${props =>
                  props.whiteColor &&
                  css`
                    color: #fff;
                    font-size: 16px;
                  `}
                ${props =>
                  !props.whiteColor &&
                  css`
                    color: #000;
                    font-size: 16px;
                  `}
                &.active{
                    &:after{
                        width: 72%;
                    }
                }
            }
        }
    }
`
