import React from 'react'
import {Link} from 'gatsby'
import Img from 'gatsby-image'
import Image from '../../../image'
import {BlogThumb} from './thumbnail.stc'

const Thumbnail = ({image, path, title}) => {
    const imageSrc = image.childImageSharp;
    let blogImage;
    if(imageSrc.fixed && typeof imageSrc.fixed !== 'function'){
        blogImage = <Img fixed={imageSrc.fixed} alt={title}/>;
    } else if(imageSrc.fluid){
        blogImage = <Image fluid={imageSrc.fluid} alt={title}/>
    } else{
        blogImage = <img src={imageSrc} alt={title}/>
    }
    return (
        <BlogThumb>
            <Link to={path}>{blogImage}</Link>
        </BlogThumb>
    )
}

Thumbnail.defaultProps = {
    image: {}
}

export default Thumbnail
