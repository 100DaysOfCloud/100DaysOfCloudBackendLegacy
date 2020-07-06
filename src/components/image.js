import React from "react";
import Img from "gatsby-image";

const NonStretchedImage = props => {
    let normalizedProps = props
    let alignment;
    if(props.align === 'right'){
        alignment = '0 0 0 auto'
    } else if(props.align === 'left'){
        alignment = '0 auto 0 0'
    }else{
        alignment = '0 auto'
    }

    normalizedProps = {...normalizedProps.fluid, aspectRatio: 1}
    if (props.fluid && props.fluid.presentationWidth) {
        normalizedProps = {
            ...props,
            style: {
                ...(props.style || {}),
                maxWidth: props.fluid.presentationWidth,
                margin: alignment, 
            },
        }
    }
    return <Img {...normalizedProps} />
}

export default NonStretchedImage;