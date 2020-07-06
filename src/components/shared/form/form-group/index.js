import React from 'react'
import PropTypes from 'prop-types'
import {FormGroupWrap} from './form-group.stc'

export const FormGroup = ({children, ...restProps}) => {
    return <FormGroupWrap {...restProps}>{children}</FormGroupWrap>
}

FormGroup.propTypes = {
    children: PropTypes.node.isRequired
}

