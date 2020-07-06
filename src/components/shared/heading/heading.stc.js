import styled from 'styled-components';
import { space, layout, color, typography, flexbox, system } from 'styled-system'

export const HeadingWrapper = styled.h2 `
    ${color}
    ${space}
    ${layout}
    ${typography}
    ${flexbox }
    ${system({
        textTransform: true
    })}
`;  