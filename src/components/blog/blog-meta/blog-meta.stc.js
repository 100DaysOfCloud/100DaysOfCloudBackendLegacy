import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import { device } from '../../../theme'

export const MetaWrap = styled.div`
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    position: relative;
    padding-left: 10px;
    padding-right: 10px;
    ${device.small}{
        display: inline-block;
        &:first-child{
            padding-left: 0;
        }
        &:last-child{
            padding-right: 0px;
            &:after{
                display: none;
            }
        }
    }
    a{
        color: ${themeGet("colors.textColor")};
    }
    &:after{
        position: absolute;
        content: "";
        right: auto;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        background-color: ${themeGet("colors.themeColor")};
        width: 4px;
        height: 4px;
        border-radius: 50%;
        ${device.small}{
            left: auto;
            right: 0;
        }
    }
`;