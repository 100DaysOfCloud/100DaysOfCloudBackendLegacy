import React from 'react'
import PropTypes from 'prop-types';
import {TextWrapper} from './text.stc'


const Text = ({children, ...props}) => {
    return <TextWrapper  {...props}>{children}</TextWrapper>
}

Text.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.string,
    fontSize: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.array
    ]),
    align: PropTypes.string,
    lineHeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    fontWeight: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    as: PropTypes.oneOf(['p', 'a', 'span', 'strong', 'em']),
}


export default Text
