import styled from "styled-components";
import {device} from '../../../theme'

export const AboutTitleWrap = styled.section `
    padding-top: 55px;
    padding-bottom: 42px;
    ${device.small}{
        padding-top: 75px;
    }
    ${device.medium}{
        padding-top: 95px;
    }
`;