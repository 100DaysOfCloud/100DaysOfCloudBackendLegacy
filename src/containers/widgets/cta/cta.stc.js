import styled from "styled-components";
import BackgroundImage from 'gatsby-background-image'
import { themeGet } from '@styled-system/theme-get';

export const CtaWrap = styled.div `
    position: relative;
    padding-top: 280px;
    padding-left: 45px;
    padding-bottom: 38px;
    margin-bottom: 30px;
    &:after{
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        border-radius: 6px;
        background-image: -moz-linear-gradient( 45deg, rgb(248,119,124) 0%, rgba(248,119,124,0) 100%);
        background-image: -webkit-linear-gradient( 45deg, rgb(248,119,124) 0%, rgba(248,119,124,0) 100%);
        background-image: -ms-linear-gradient( 45deg, rgb(248,119,124) 0%, rgba(248,119,124,0) 100%);
    }
`;

export const CtaBG = styled(BackgroundImage)`
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    &:before,
    &:after{
        border-radius: 6px;
    }
`;
export const CtaContent = styled.div `
    position: relative;
    z-index: 2;
    color: #fff;
    .cta-heading{
        span{
            display: block;
            font-family: ${themeGet('fonts.marck')};
            font-size: 50px;
            margin-top: 13px;
        }
    }
`;