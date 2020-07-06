import styled, {css} from 'styled-components';
import {Link} from 'gatsby';
import { space, layout, color, typography, system } from 'styled-system'
 

export const LinkStyled = css `
    ${color}
    ${space}
    ${layout}
    ${typography}
    ${system({
        textTransform: true
    })} 
`;

export const LinkWrapper = styled(Link)`
    ${LinkStyled}
`;

export const AnchorTag = styled.a`
    ${LinkStyled}
`;