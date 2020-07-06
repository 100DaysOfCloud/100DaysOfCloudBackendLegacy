import styled from "styled-components";
import { themeGet } from '@styled-system/theme-get';

export const RecentPostItem = styled.div `
    padding-bottom: 16px;
    padding-top: 16px;
    border-bottom: 1px solid ${themeGet("colors.borderColor")};
`;

export const RecentPostWrap = styled.div `
    ${RecentPostItem}{
        &:first-child{
            padding-top: 0;
        }
        &:last-child{
            padding-bottom: 0;
            border: none;
        }
    }
`;

 