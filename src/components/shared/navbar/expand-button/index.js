import React from 'react'
import {ExpandButtonWrap} from './expand-button.stc'

export const ExpandButton = ({onClick, ...props}) => {
    return (
        <ExpandButtonWrap className="menu-expand" onClick={onClick} {...props}>
            icon
        </ExpandButtonWrap>
    )
}

