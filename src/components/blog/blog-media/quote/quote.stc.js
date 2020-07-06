import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get'

export const BlogQuote = styled.blockquote `
    position: relative;
    padding: 50px 31px 50px;
    background: ${themeGet("colors.themeColor")};
    text-align: center;
    .icon{
        width: 30px;
        height: 30px;
    }
    h3{
        font-size: 22px;
        line-height: 1.5;
        margin-bottom: 39px;
    }
    footer{
        font-size: 18px;
        color: #333;
        margin-bottom: 0;
    }
`;