import styled, {css} from 'styled-components'

export const LogoWrap = styled.div `
    position: relative;
    z-index: 1;
    ${props => props.transparentBG && css `
        .dark-logo{
            display: none;
        }
        .white-logo{
            display: inherit;
        }
    `}
    ${props => !props.transparentBG && css `
        .dark-logo{
            display: inherit;
        }
        .white-logo{
            display: none;
        }
    `}
`;