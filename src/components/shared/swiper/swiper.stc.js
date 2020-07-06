import styled, {css} from 'styled-components';
import { themeGet } from '@styled-system/theme-get';
import {device} from '../../../theme'


export const SwiperBtnGroup = styled.div `
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    button{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        border: none;
        padding: 0;
        z-index: 1;
        svg{
            width: 20px;
            height: 20px;
        }
        &.swiper-custom-prev{
            left: 20px;
        }
        &.swiper-custom-next{
            right: 20px;
        }
    }
`;


export const SwiperWrap = styled.div `
    position: relative;
    ${props => props.arrows === false && css `
        .swiper-button-next,
        .swiper-button-prev{
            display: none;
        }
    `}
    ${props => props.customArrows === false && css `
        ${SwiperBtnGroup}{
            display: none;
        }
    `}
    .swiper-button-next,
    .swiper-button-prev{
        padding: 0;
        border: none;
        color:${themeGet("colors.headingColor")};
        &:after{
            display: none;
        }
    }
    .swiper-button-next{
        right: 0;
    }
    .swiper-button-prev{
        left: 0;
    }
    .swiper-btn{
        svg{
            width: 25px;
            height: 22px;
        }
    }
    ${props => props.navStyle === 2 && css `
        ${SwiperBtnGroup}{
            button{
                &.swiper-custom-prev{
                    left: 20px;
                    ${device.xlarge}{
                        left: -47px;
                    }
                }
                &.swiper-custom-next{
                    right: 20px;
                    ${device.xlarge}{
                        right: -47px;
                    }
                }
            }
        }
    `}
`;