import styled, { css } from 'styled-components'
import { space, color, flexbox, layout, typography, border, shadow, variant } from 'styled-system'

const ButtonStyled = css(
    variant({
        prop: 'shape',
        variants: {
            rectangle: {
                borderRadius: 0,
            },
            rounded: {
                borderRadius: '4px',
            },
            bullet: {
                borderRadius: '35px',
            },
        }
    }),
    variant({
        prop: 'btnsize',
        variants: {
            fullwidth: {
                fontSize: 1,
                fontWeight: 500,
                width: '100%',
                paddingLeft: ['30px', '55px'],
                paddingRight: ['30px', '55px'],
                paddingTop: ['18px', '22px'],
                paddingBottom: ['18px', '22px']
            },
            large: {
                fontSize: 1,
                paddingLeft: ['30px', '55px'],
                paddingRight: ['30px', '55px'],
                paddingTop: ['18px', '22px'],
                paddingBottom: ['18px', '22px']
            },
            medium: {
                fontSize: 1,
                padding: '5px 15px',
                minHeight: '50px',
                lineHeight: '48px'
            },
            small: {
                fontSize: 0,
            },
        }
    }),
    variant({
        prop: 'varient',
        variants: {
            contained: {
                backgroundColor: '#f8777c',
                textTransform: 'uppercase',
                border: `1px solid`,
                borderColor: '#f8777c',
                color: '#fff'
            },
            outlined: {
                borderColor: 'themeColor',
                border: `1px solid`,
                backgroundColor: 'transparent'
            },
            texted: {
                border: 'none',
                color: 'headingColor',
                padding: 0,
                textTransform: 'uppercase',
                lineHeight: 1,
                width: 'auto',
                minHeight: 'auto',
            },
            underlined: {
                border: 'none',
                paddingBottom: '5px',
                borderBottom: `1px solid`,
                borderBottomColor: 'themeColor'
            },
            iconButton: {
                padding: 0,
                border: 'none',
                background: 'transparent',
                lineHeight: 1,
                width: 'auto',
                minHeight: 'auto',
                'svg': {
                    width: '18px',
                    height: '18px'
                }
            }
        }
    }),
    variant({
        prop: 'colors',
        variants: {
            light: {
                border: `1px solid #fff`,
                backgroundColor: '#fff',
                color: 'headingColor',
                textTransform: 'uppercase',
                '&:hover': {
                    borderColor: 'hoverColor',
                    backgroundColor: 'hoverColor',
                    color: '#fff'
                }
            }
        }
    }),
    space,
    color,
    typography,
    border,
    shadow,
    layout,
    flexbox
);

export const ButtonWrap = styled.button`
    ${props => props.iconcss && css`
        &.hasIcon{
            .btn-span{
                display: inline-flex;
                align-items: center;
                line-height: 1;
            }
        }
        .icon {
            padding-left: ${props => props.iconcss.pl};
            padding-right: ${props => props.iconcss.pr};
            svg{
                width: ${props => props.iconcss.width || '16px'};
                height: ${props => props.iconcss.width || '18px'};
            }
        }
    `}
    ${props => props.disabled && css`
        opacity: .5;
        cursor: not-allowed !important;
    `}
    ${ButtonStyled}
`;

export const AnchorButton = styled.a`
    ${props => props.iconcss && css`
        &.hasIcon{
            .btn-span{
                display: inline-flex;
                align-items: center;
                line-height: 1;
            }
        }
        .icon {
            padding-left: ${props => props.iconcss.pl};
            padding-right: ${props => props.iconcss.pr};
            svg{
                width: ${props => props.iconcss.width || '16px'};
                height: ${props => props.iconcss.width || '18px'};
            }
        }
    `}
    ${ButtonStyled}
`; 