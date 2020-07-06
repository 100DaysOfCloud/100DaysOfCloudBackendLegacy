import styled from 'styled-components';
import { space, flexbox, layout } from 'styled-system'
import { device } from '../../../../theme'

export const OffCanvasBodyWrap = styled.div`
    padding: 20px 30px 60px;
    @media ${device.xsmall}{
        padding: 20px 40px 60px;
    }
    ${space}
    ${flexbox}
    ${layout}
`;