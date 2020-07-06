import styled from "styled-components";
import { space, color, typography, border, variant} from 'styled-system'

export const InputWrap = styled('input')(
    variant({
        prop: 'layout',
        variants: {
            underlined: {
                fontSize: '16px',
                height: '50px',
                color: 'headingColor',
                border: '0px',
                borderBottomWidth: '2px',
                borderBottomColor: 'headingColor',
                borderStyle: 'solid',
                paddingLeft: 0,
                paddingBottom: '22px',
                '&::placeholder': {
                    color: 'headingColor'
                }
            },
            contained: {
                background: '#fff',
                borderRadius: '5px',
                height: '60px',
                paddingLeft: '25px',
                paddingRight: '25px',
                fontSize: '14px',
                color: '#63696a',
                '&::placeholder': {
                    color: '#63696a'
                }
            }
        }
    }),
    space,
    typography,
    border,
    color,
    {
        '&::placeholder': {
            color
        }
    }

)
