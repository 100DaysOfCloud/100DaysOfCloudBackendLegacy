import styled from "styled-components";
import { space, layout, color, typography, system } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'
import { ListItemWrap } from './list-item/list-item.stc'

export const ListWrap = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    ${ListItemWrap}{
        ${color}
        ${space}
        ${layout}
        ${typography}
        ${system({
    textTransform: true
})}
        &:last-child{
            margin-bottom: 0;
            padding-bottom: 0;
        }
        * {
            ${color}
        }
        a{
            &:hover{
                color: ${themeGet("colors.hoverColor")};
            }
        }
    }
`; 