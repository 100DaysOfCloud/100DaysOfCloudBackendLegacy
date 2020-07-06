import styled from 'styled-components';
import { space, layout, border, color, typography, system } from 'styled-system'
 
export const TextWrapper = styled.p `
    ${color}
    ${space}
    ${layout}
    ${typography}
    ${border}
    ${system({
        textTransform: true
    })}  
`; 