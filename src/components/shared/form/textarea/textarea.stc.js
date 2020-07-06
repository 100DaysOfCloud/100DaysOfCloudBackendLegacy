import styled from "styled-components";
import { space, color, layout, typography, border, variant} from 'styled-system'

export const TextareaWrap = styled('textarea')(
    variant({
        prop: 'layout',
        variants: {
            underlined: {
                fontSize: '16px',
                height: '100px',
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
                height: '120px',
                paddingLeft: '25px',
                paddingRight: '25px',
                paddingTop: '20px',
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
    layout,
    {
        '&::placeholder': {
            color
        }
    }

)
