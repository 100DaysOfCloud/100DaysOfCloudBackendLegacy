import React from 'react'
import {ListItem} from './list-item/'
import {ListWrap} from './list.stc'

const List = ({children, ...restProps}) => {
    return <ListWrap {...restProps}>{children}</ListWrap>
}

export {ListItem}
export default List
