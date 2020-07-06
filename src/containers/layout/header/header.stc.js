import styled, {css} from 'styled-components'
import { themeGet } from '@styled-system/theme-get';

export const HeaderOuter = styled.div `
    position: relative;
`;



export const HeaderMain = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 30px;
    padding-bottom: 30px;
`;


export const HeaderWrap = styled.header `
    position: relative;
    width: 100%;
    z-index: 99;
    border-bottom: 1px solid ${themeGet("colors.borderColor")};
    .hamburger{
        position: relative;
        &:before {
            position: absolute;
            content: "";
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            width: 1px;
            height: 13px;
        }
    }
    ${props => props.transparent && css `
        background-color: transparent;
        border: none;
        position: absolute;
        left: 0;
        top: 0;
        .hamburger{
            &:before {
                background-color: rgba( 255,255,255,0.6);
            }
        }
    `}
    ${props => !props.transparent && css `
        .hamburger{
            &:before {
                background-color: rgba( 0,0,0,0.102);
            }
        }
    `}
`;

