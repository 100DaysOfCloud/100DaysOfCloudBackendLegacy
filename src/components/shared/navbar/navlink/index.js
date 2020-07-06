import React from 'react'
import PropTypes from 'prop-types';
import {NavLinkWrap, AnchorTag, SmoothScroll} from './navlink.stc'

export const NavLink = ({path, children, ...props}) => {
    const internal = /^\/(?!\/)/.test(path)
    const isHash = path.startsWith('#')
    if(internal){
        return (
            <NavLinkWrap to={path} activeClassName="active" {...props}>
                {children}
            </NavLinkWrap>
        )
    }
    if(isHash){
        return (
            <SmoothScroll href={path} {...props}>
                {children}
            </SmoothScroll>
        )
    }
    return (
        <AnchorTag href={path} {...props}>
          {children}
        </AnchorTag>
    )
}

NavLink.propTypes = {
    children: PropTypes.node.isRequired,
    path: PropTypes.string
};

NavLink.defaultProps = {
    path: '/'
}

  