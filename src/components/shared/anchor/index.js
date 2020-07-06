import React from 'react'
import PropTypes from 'prop-types';
import {LinkWrapper, AnchorTag} from './anchor.stc'

const Anchor = ({path, children, ...props}) => {
    const internal = /^\/(?!\/)/.test(path)
    if(internal){
        return <LinkWrapper to={path} {...props}>{children}</LinkWrapper>
    }
    return (
        <AnchorTag href={path} {...props}>
          {children}
        </AnchorTag>
    )
} 
 
Anchor.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string
}


export default Anchor
 