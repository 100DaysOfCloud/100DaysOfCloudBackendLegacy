import styled from 'styled-components'
import Anchor from '../../shared/anchor'
import { themeGet } from '@styled-system/theme-get';
import { device } from '../../../theme'

export const BlogWrapper = styled.article`

`;

export const BlogInner = styled.div``;

export const BlogMedia = styled.div``;

export const BlogContent = styled.div`
    text-align: center;
    margin-top: 15px;
`;

export const BlogTitle = styled.h3`
    font-size: 14px;
    font-weight: 400;
    text-transform: capitalize;
    margin-bottom: 2px;
    ${device.small}{
        font-size: 16px;
    }
    a{
        color: ${themeGet("colors.headingColor")}
    }
`;

export const BlogMeta = styled.div``;

export const BlogMetaItem = styled(Anchor)`
    color: ${themeGet("colors.headingColor")};
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
`;
