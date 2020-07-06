import React from 'react'
import PropTypes from 'prop-types'
import {FormWrap} from './form.stc'
import {Input} from './input/'
import {Label} from './label/'
import {FormGroup} from './form-group/'
import {Textarea} from './textarea/'

const Form = ({children, ...restProps}) => {
    return <FormWrap {...restProps}>{children}</FormWrap>
}

Form.propTypes = {
    children: PropTypes.node.isRequired
}

export {Input, Label, FormGroup, Textarea}

export default Form
