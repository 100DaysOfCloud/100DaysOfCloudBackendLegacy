import styled, {css} from "styled-components";
import { themeGet } from '@styled-system/theme-get';
import { typography, color } from 'styled-system'
import {device} from '../../../theme'

export const WidgetTitle = styled.h3 `
    font-weight: 500;
    font-size: 18px;
    text-transform: uppercase;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    color: ${themeGet("colors.headingColor")};
    border-color: ${themeGet("colors.borderColor")};
    margin-bottom: 25px;
    ${color}
`;

export const WidgetBoxWrap = styled.div `
    border: 1px solid ${themeGet("colors.borderColor")};
    padding: 20px;
    border-radius: 5px;
    ${device.large}{
        padding: 30px;
    }
    ${props => props.skin === 'primary' && css `
        background: ${themeGet("colors.themeColor")};
        ${WidgetTitle}{
            color: #fff;
            border-color: #fff;
        }
    `}
    ${color}
    ${typography}
`;

