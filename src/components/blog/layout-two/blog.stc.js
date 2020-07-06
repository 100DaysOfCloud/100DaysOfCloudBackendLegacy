import styled from "styled-components";
import {space} from 'styled-system'
import {device} from '../../../theme'

export const BlogWrapper = styled.article `
    ${space}
`;

export const BlogInner = styled.div `
    ${device.small}{
        display: flex;
        flex-wrap: wrap;
    }
`;

export const BlogMedia = styled.div `
    width: 100%;
    margin-bottom: 20px;
    ${device.small}{
        flex-basis: 370px;
        max-width: 370px;
        margin-bottom: 0;
    }
    ${device.medium}{
        flex-basis: 300px;
        max-width: 300px;
    }
    ${device.large}{
        flex-basis: 400px;
        max-width: 400px;
    }
`;

export const BlogContent = styled.div `
    align-self: center;
    width: 100%;
    ${device.small}{
        flex-basis: calc(100% - 370px);
        max-width: calc(100% - 370px);
        padding-left: 30px;
    }
    ${device.medium}{
        flex-basis: calc(100% - 300px);
        max-width: calc(100% - 300px);
    }
    ${device.large}{
        flex-basis: calc(100% - 400px);
        max-width: calc(100% - 400px);
    }
`;

export const BlogHeader = styled.header ``;

export const BlogTitle = styled.h3 `
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
    a{
        color: #0e1b47;
    }
`;

export const BlogMetaWrap = styled.div `
    margin-bottom: 20px;
`;

export const BlogExcerpt = styled.p `
    margin-bottom: 18px;
`;

export const BlogFooter = styled.footer ``;