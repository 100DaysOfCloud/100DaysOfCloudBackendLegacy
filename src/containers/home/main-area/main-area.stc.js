import styled from "styled-components";
import {device} from '../../../theme'

export const MainWrapper = styled.main `
    margin-bottom: 47px;
    ${device.small}{
        margin-bottom: 67px;
    }
    ${device.medium}{
        margin-bottom: 100px;
    }
`;