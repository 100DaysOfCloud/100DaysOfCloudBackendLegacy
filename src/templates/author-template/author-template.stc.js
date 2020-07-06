import styled, {css} from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import {Loading} from '../../assets/css/animations'
import {device} from '../../theme'

export const AuthorSection = styled.section `
    background: ${themeGet("colors.themeColor")};
    padding-top: 60px;
    padding-bottom: 50px;
    ${device.large}{
        padding-top: 78px;
        padding-bottom: 72px; 
    }
`;

export const AuthorImg = styled.figure `
    margin-bottom: 10px;
    ${device.small}{
        margin-bottom: 0;
    }
    img{
        border-radius: 50%;
        border: 15px solid #fff;
    }
`;

export const AuthorInfo = styled.div `
    ${device.small}{
        padding-left: 35px;
    }
`;

export const AuthorBlogs = styled.section `
    padding-top: 55px;
    padding-bottom: 24px;
    ${device.small}{
        padding-top: 75px;
        padding-bottom: 44px;
    }
    ${device.large}{
        padding-top: 95px;
        padding-bottom: 70px;
    }
`;

export const LoadMoreBtnWrap = styled.div `
    ${props => props.isLoading && css `
        button{
            cursor: not-allowed;
            opacity: .5;
        }
        svg {
            animation: ${Loading} .5s linear 0s infinite;
        }
    `}
`;