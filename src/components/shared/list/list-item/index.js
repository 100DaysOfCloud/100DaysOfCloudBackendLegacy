import React from 'react'
import {ListItemWrap} from './list-item.stc'

export const ListItem = ({children, ...restProps}) => {
    return <ListItemWrap {...restProps}>{children}</ListItemWrap>
}
