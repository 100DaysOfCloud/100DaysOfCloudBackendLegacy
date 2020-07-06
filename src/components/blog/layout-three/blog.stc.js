import styled from 'styled-components'
import Anchor from '../../shared/anchor'
import { themeGet } from '@styled-system/theme-get';
import {device} from '../../../theme'

export const BlogWrap = styled.article `
    display: flex;
    flex-wrap: wrap;
`;

export const BlogContent = styled.div `
    order: 2;
    flex-basis: 100%;
    max-width: 100%;
    ${device.xsmall}{
        order: 2;
        flex-basis: calc(100% - 78px);
        max-width: calc(100% - 78px);
        padding-right: 30px;
    }
    ${device.medium}{
        padding-right: 20px;
    }
    ${device.large}{
        padding-right: 30px;
    }
`;

export const BlogDate = styled(Anchor) `
    color: ${themeGet("colors.headingColor")};
    text-transform: uppercase;
    margin-bottom: 10px;
    display: block;
`;

export const BlogTitle = styled.h5 `
    font-size: ${themeGet("fontSizes.2")};
    a{
        color: ${themeGet("colors.headingColor")};
    }
`;

export const BlogMedia = styled.div `
    order: 1;
    margin-bottom: 5px;
    flex-basis: 100%;
    max-width: 100%;
    ${device.xsmall}{
        order: 2;
        flex-basis: 78px;
        max-width: 78px;
        margin-bottom: 0;
    }
`;