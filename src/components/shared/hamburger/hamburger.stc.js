import styled, {css} from 'styled-components'
import { themeGet } from '@styled-system/theme-get';

export const HamburgerWrap = styled.button `
    width: 18px;
    height: 13px;
    position: relative;    
    background: transparent;
    border: none;
    padding: 0;
    ${props => props.whiteColor && css `
        span{
            background-color: rgb( 255, 255, 255 );
            &:before,
            &:after{
                background-color: rgb( 255, 255, 255 );
            }
        }
        &:hover{
            span{
                background-color: #fff;
                opacity: 1;
                &:before{
                    background-color: #fff;
                }
                &:after{
                    background-color: #fff;
                }
            }
        }
    `}
    ${props => !props.whiteColor && css `
        span{
            background-color: rgb( 0, 0, 0 );
            &:before,
            &:after{
                background-color: rgb( 0, 0, 0 );
            }
        }
        &:hover{
            span{
                background-color: #000;
                opacity: 1;
                &:before{
                    background-color: #000;
                }
                &:after{
                    background-color: #000;
                }
            }
        }
    `}
    span{        
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 100%;
        height: 2px;
        opacity: 0.502;
        transition: ${themeGet("transition", "all .3s")};
        &:after, 
        &:before{
            position: absolute;
            content: "";
            transition: ${themeGet("transition", "all .3s")};
            left: 0;
            width: 100%;
            height: 2px;
        }
        &:before{
            top: -6px;
        }
        &:after{
            bottom: -6px;
        }
    }

`;