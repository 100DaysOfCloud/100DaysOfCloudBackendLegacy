import styled from 'styled-components'
import {themeGet} from '@styled-system/theme-get'

export const VideoPoster = styled.figure `
    position: relative;
    img{
        width: 100%;
        border-radius: 5px;
    }
`;

export const VideoVerlay = styled.div `
    background-color: ${themeGet("colors.themeColor")};
    opacity: .8;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`;

export const VideoButton = styled.span `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(.8);
    width: 60px;
    height: 60px;
    border: 2px solid;
    text-align: center;
    line-height: 56px;
    border-radius: 50%;
    transition: ${themeGet('transition')};
    svg{
        width: 30px;
        height: 30px;
    }
`;

export const VideoThumbWrapper = styled.div `
    position: relative;
    cursor: pointer;
    &:hover{
        ${VideoButton}{
            transform: translate(-50%,-50%) scale(1);
        }
    }
`;