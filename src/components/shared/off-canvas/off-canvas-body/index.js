import React from 'react'
import PropTypes from 'prop-types'
import {OffCanvasBodyWrap} from './off-canvas-body.style'

export const OffCanvasBody = ({children, ...restProps}) => {
    return <OffCanvasBodyWrap {...restProps}>{children}</OffCanvasBodyWrap>
}

OffCanvasBody.propTypes = {
    children: PropTypes.node.isRequired
}

