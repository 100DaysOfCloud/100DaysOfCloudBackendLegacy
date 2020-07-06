import React from 'react'
import PropTypes from 'prop-types'
import {WidgetBoxWrap, WidgetTitle} from './widget-box.stc'

const WidgetBox = ({title, children, ...restProps}) => {
    return (
        <WidgetBoxWrap {...restProps}>
            {children}
        </WidgetBoxWrap>
    )
}

WidgetBox.propTypes = {
    children: PropTypes.node.isRequired,
}

export {WidgetTitle};
export default WidgetBox
