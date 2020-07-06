import styled from "styled-components";
import { space } from 'styled-system'
import { themeGet } from '@styled-system/theme-get';
import { device } from '../../../theme'

export const FooterWrap = styled.footer``;

export const FooterTop = styled.div`
    border-top: 1px solid ${themeGet("colors.borderColor")};
    padding-top: 60px;
    padding-bottom: 33px;
    ${device.small}{
        padding-top: 76px;
    }
    ${device.medium}{
        padding-top: 95px;
    }
`;

export const FooterBottom = styled.div`
    padding-bottom: 50px;
`;

export const FooterWidget = styled.div`
    ${space}
`;

export const AddressWidget = styled.div``;