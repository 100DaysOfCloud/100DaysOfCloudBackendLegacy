import styled from "styled-components";
import {themeGet} from '@styled-system/theme-get'
import {device} from '../../../../theme'

export const LinkedWrap = styled.div `
    position: relative;
    padding: 40px 25px 40px;
    background: ${themeGet("colors.themeColor")};
    text-align: center;
    border-radius: 5px;
    ${device.medium}{
        padding: 50px 31px 50px;
    }
    .icon{
        width: 20px;
        height: 20px;
        ${device.medium}{
            width: 30px;
            height: 30px;
        }
    }
    a{
        display: block;
        color: ${themeGet("colors.textColor")};
        font-size: 20px;
        word-break: break-word;
        ${device.large}{
            font-size: 25px;
        }
    }
`;