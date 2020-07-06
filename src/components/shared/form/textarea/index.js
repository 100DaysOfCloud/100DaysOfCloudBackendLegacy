import React from 'react'
import {TextareaWrap} from './textarea.stc'

export const Textarea = React.forwardRef((props, ref) => {
    return <TextareaWrap ref={ref} {...props}></TextareaWrap>
})

Textarea.defaultProps = {
    layout: 'contained'
}

export default Textarea
  