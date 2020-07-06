import React from 'react'
import {Link} from 'gatsby'
import { FiTag } from "react-icons/fi";
import {createList, slugify} from '../../../../utils/utilFunctions'
import {TagWrapper} from './tags.stc'

export const Tags = ({tags, ...restProps}) => {
    let tagList = createList({
        list: tags
    });
    return(
        <TagWrapper {...restProps}>
            <FiTag className="icon"/>
            {tagList.map(tag => (
                <Link to={`/tag/${slugify(tag.text)}`} key={slugify(tag.text)}>
                    {tag.text}{tag.sep}
                </Link>
            ))}
        </TagWrapper>
    )
}

