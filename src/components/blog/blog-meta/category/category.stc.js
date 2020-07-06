import styled from "styled-components";
import {space} from 'styled-system'
import { themeGet } from '@styled-system/theme-get';

export const CategoryWrap = styled.div `
    ${space}
    a{
        display: inline-block;
        position: relative;
        text-transform: uppercase;
        font-weight: 400;
        font-size: 12px;
        color: ${themeGet("colors.headingColor")};
        &:after{
            position: absolute;
            content: "";
            left: 1px;
            bottom: 2px;
            background-color: ${themeGet("colors.themeColor")};
            width: 50px;
            height: 8px;
            z-index: -1;
        }
        &:hover{
            color: ${themeGet("colors.hoverColorTwo")};
        }
    }
`