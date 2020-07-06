import React from 'react'
import {Link} from 'gatsby'
import {CategoryWrap} from './category.stc'

export const Category = ({text, slug, ...restProps}) => {
    return (
        <CategoryWrap {...restProps}>
            <Link to={slug}>{text}</Link>
        </CategoryWrap>
    )
}

