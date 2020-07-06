import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import {device} from '../../../theme'

export const AboutContentWrap = styled.section `
    padding-bottom: 56px;
    ${device.small}{
        padding-bottom: 76px;
    }
    ${device.medium}{
        padding-bottom: 96px;
    }
`;

export const AboutContentTop = styled.div `
    margin-bottom: 38px;
`;

export const AboutList = styled.ul `
    margin: 0;
    padding: 0;
    list-style: none;
    li{
        margin-bottom: 11px;
        position: relative;
        padding-left: 18px;
        &:before{
            position: absolute;
            content: "";
            left: 0;
            top: 7px;
            width: 6px;
            height: 6px;
            background: #99999c;
            border-radius: 50%;
        }
    }
`;

export const AboutContentBottom = styled.div `
    border-top: 1px solid ${themeGet("colors.borderColor")};
    padding-top: 42px;
    margin-top: 35px;
`;