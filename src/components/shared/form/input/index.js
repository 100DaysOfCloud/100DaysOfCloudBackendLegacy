import React from 'react'
import {InputWrap} from './input.stc'

export const Input = React.forwardRef((props, ref) => {
    return <InputWrap ref={ref} {...props}/>
})

Input.defaultProps = {
    layout: 'contained'
}

export default Input
