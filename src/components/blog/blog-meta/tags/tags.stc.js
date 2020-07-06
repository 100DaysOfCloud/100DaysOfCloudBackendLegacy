import styled from 'styled-components'
import {themeGet} from '@styled-system/theme-get'

export const TagWrapper = styled.div `
    display: flex;
    align-items: center;
    a{
        color: ${themeGet("colors.silver")};
        font-size: 14px;
        padding-right: 3px;
    }
    .icon{
        width: 18px;
        height: 20px;
        margin-right: 9px;
        color: ${themeGet("colors.textColor")};
    }
`;