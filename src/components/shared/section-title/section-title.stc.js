import styled from 'styled-components'
import { space, layout } from 'styled-system'
import { themeGet } from '@styled-system/theme-get';

export const SectionTitleWrap = styled.div `
    ${space}
    ${layout}
    h3{
        font-size: 24px;
        text-transform: uppercase;
        position: relative;
        &:after{
            position: absolute;
            content: "";
            left: 2px;
            bottom: 4px;
            width: 120px;
            height: 20px;
            z-index: -1;
            background-color: ${themeGet("colors.themeColor")};
        }
    }
`;