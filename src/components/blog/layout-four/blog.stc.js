import styled from 'styled-components'
import {Link} from 'gatsby'
import {space} from 'styled-system'
import { themeGet } from '@styled-system/theme-get';

export const BlogWrapper = styled.article `
    ${space}
`;  

export const BlogInner = styled.div ``;

export const BlogMedia = styled.div `
    position: relative;
`;

export const BlogThumb = styled.div `
    img{
        border-radius: 5px;
    }
`;

export const BlogCategory = styled(Link) `
    position: absolute;
    left: 25px;
    top: 25px;
    display: inline-block;
    color: #fff;
    text-transform: capitalize;
    border: 2px solid #fff;
    height: 30px;
    min-width: 104px;
    border-radius: 35px;
    line-height: 26px;
    text-align: center;
    font-size: 12px;
    z-index: 9;
    &:hover{
        color: #fff;
    }
`;

export const BlogContent = styled.div `
    margin-top: 15px;
`;

export const BlogTitle = styled.h3 `
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
    margin-bottom: 10px;
    a{
        color: ${themeGet("colors.headingColor")}
    }
`;

export const BlogExcerpt = styled.p ``;
